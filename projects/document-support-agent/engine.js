(function documentSupportModule(root) {
  'use strict';

  const version = 'extractor-bm25/1';
  const identifier = /^[A-Za-z0-9][A-Za-z0-9.-]{0,63}$/;
  const compare = (a, b) => (a > b) - (a < b);
  const own = (object, key) => Object.prototype.hasOwnProperty.call(object, key);
  const tokens = text => text.normalize('NFKC').toLowerCase().match(/[\p{L}\p{N}]+/gu) || [];
  const id = passage => passage.document + '@' + passage.version + '#' + passage.section;
  const docId = passage => passage.document + '@' + passage.version;

  function check(ok, message) {
    if (!ok) throw new Error(message);
  }

  function integer(value, min, max) {
    return Number.isSafeInteger(value) && value >= min && value <= max;
  }

  function list(value, max) {
    return Array.isArray(value) && value.length <= max;
  }

  function roleList(value, roles) {
    return list(value, 12) && value.every(role => roles.has(role));
  }

  function validText(value, max) {
    return typeof value === 'string' && value.trim().length > 0 && value.length <= max;
  }

  function sameInput(a, b) {
    function canonical(value) {
      if (Array.isArray(value)) return value.map(canonical);
      if (value && typeof value === 'object') {
        return Object.fromEntries(Object.keys(value).sort(compare).map(key => [key, canonical(value[key])]));
      }
      return value;
    }
    return JSON.stringify(canonical(a)) === JSON.stringify(canonical(b));
  }

  function assertRequest(request) {
    check(request && typeof request.user === 'string' && identifier.test(request.user) && validText(request.question, 240), 'Invalid request: user/question');
    check(request.document === undefined || (typeof request.document === 'string' && identifier.test(request.document)), 'Invalid request: document');
  }

  function validate(input) {
    check(input && input.format === 1 && typeof input.policyVersion === 'string' && identifier.test(input.policyVersion), 'Invalid input format or policy version');
    check(list(input.users, 12) && input.users.length, 'Provide 1–12 users');
    check(input.users.every(user => user && typeof user.id === 'string' && identifier.test(user.id) && typeof user.role === 'string' && identifier.test(user.role)), 'Invalid user or role');
    check(new Set(input.users.map(user => user.id)).size === input.users.length, 'Duplicate user');
    const roles = new Set(input.users.map(user => user.role));
    check(list(input.documents, 24) && input.documents.length, 'Provide 1–24 documents');
    const editions = new Set();
    const active = new Set();
    for (const document of input.documents) {
      check(document && typeof document.id === 'string' && identifier.test(document.id) && typeof document.version === 'string' && identifier.test(document.version), 'Invalid document ID or version');
      const edition = document.id + '@' + document.version;
      check(!editions.has(edition), 'Duplicate edition: ' + edition);
      editions.add(edition);
      check(typeof document.active === 'boolean' && roleList(document.allow, roles), 'Invalid active flag or access list: ' + edition);
      if (document.active) {
        check(!active.has(document.id), 'Multiple active editions: ' + document.id);
        active.add(document.id);
      }
      check(list(document.sections, 12) && document.sections.length, 'Provide 1–12 sections: ' + edition);
      const sectionIds = new Set();
      for (const section of document.sections) {
        check(section && typeof section.id === 'string' && identifier.test(section.id) && validText(section.title, 100) && validText(section.text, 800), 'Invalid section: ' + edition);
        check(!sectionIds.has(section.id), 'Duplicate section: ' + section.id);
        sectionIds.add(section.id);
      }
    }
    const tool = input.tool;
    check(tool && tool.name === 'read_status' && typeof tool.version === 'string' && identifier.test(tool.version) && roleList(tool.allow, roles), 'Invalid local status tool policy');
    check(tool.assets && !Array.isArray(tool.assets) && typeof tool.assets === 'object' &&
      Object.keys(tool.assets).length <= 12 &&
      Object.entries(tool.assets).every(([asset, value]) => identifier.test(asset) && validText(value, 32)), 'Invalid mock asset state');
    const budget = input.budget;
    check(budget && integer(budget.topK, 1, 4) && integer(budget.contextTokens, 1, 192) && integer(budget.toolCalls, 0, 1), 'Invalid budget: topK 1–4, contextTokens 1–192, toolCalls 0–1');
    check(list(input.cases, 12) && input.cases.length, 'Provide 1–12 cases');
    check(new Set(input.cases.map(entry => entry && entry.id)).size === input.cases.length, 'Duplicate case ID');
    for (const entry of input.cases) {
      check(entry && typeof entry.id === 'string' && identifier.test(entry.id), 'Invalid case ID');
      assertRequest(entry.request);
      if (entry.options) {
        check(entry.options.topK === undefined || integer(entry.options.topK, 1, budget.topK), 'Case topK exceeds input budget');
        check(entry.options.answerMode === undefined || entry.options.answerMode === 'first-sentence', 'Unknown answer mode');
      }
    }
  }

  function buildIndex(documents) {
    const passages = [];
    const postings = new Map();
    for (const document of documents.filter(document => document.active)) {
      for (const section of document.sections) {
        const terms = tokens(section.text);
        const index = passages.length;
        passages.push({
          document: document.id, version: document.version, section: section.id,
          title: section.title, text: section.text, allow: [...document.allow], length: terms.length
        });
        const counts = new Map();
        for (const term of terms) counts.set(term, (counts.get(term) || 0) + 1);
        for (const [term, frequency] of counts) {
          if (!postings.has(term)) postings.set(term, []);
          postings.get(term).push([index, frequency]);
        }
      }
    }
    return { passages, postings: Object.fromEntries(postings) };
  }

  async function sha256(value) {
    const bytes = new TextEncoder().encode(JSON.stringify(value));
    const digest = await root.crypto.subtle.digest('SHA-256', bytes);
    return Array.from(new Uint8Array(digest), byte => byte.toString(16).padStart(2, '0')).join('');
  }

  async function install(input) {
    validate(input);
    const data = JSON.parse(JSON.stringify(input));
    const index = buildIndex(data.documents);
    const manifest = {
      runner: version, policy: data.policyVersion, tool: data.tool.version,
      documents: await sha256(data.documents),
      permissions: await sha256([data.users, data.tool.allow]),
      index: await sha256(index),
      localTool: await sha256(data.tool)
    };
    const saved = { format: 1, version, data, index, manifest };
    return { ...saved, sha256: await sha256(saved) };
  }

  async function restore(state) {
    check(state && state.format === 1 && state.version === version, 'Installed state format or runner version is incompatible');
    const { sha256: expected, ...saved } = state;
    check(await sha256(saved) === expected, 'Installed state SHA-256 mismatch');
    validate(saved.data);
    return state;
  }

  function retrieve(index, eligible, terms, k) {
    const average = eligible.reduce((sum, i) => sum + index.passages[i].length, 0) / eligible.length || 1;
    const allowed = new Set(eligible);
    const scores = new Map();
    for (const term of terms) {
      const postings = own(index.postings, term) ? index.postings[term].filter(([i]) => allowed.has(i)) : [];
      const df = postings.length;
      const idf = Math.log1p((eligible.length - df + 0.5) / (df + 0.5));
      for (const [i, frequency] of postings) {
        const normalization = 1.2 * (0.25 + 0.75 * index.passages[i].length / average);
        const contribution = idf * frequency * 2.2 / (frequency + normalization);
        scores.set(i, (scores.get(i) || 0) + contribution);
      }
    }
    return [...scores]
      .map(([i, score]) => ({ passage: index.passages[i], score }))
      .sort((a, b) => b.score - a.score || compare(id(a.passage), id(b.passage)))
      .slice(0, k);
  }

  function compose(passages, terms, tokenBudget, answerMode) {
    const context = [];
    let remaining = tokenBudget;
    for (const passage of passages) {
      if (passage.length > remaining) continue;
      remaining -= passage.length;
      context.push(passage);
    }
    const matches = [];
    for (const passage of context) {
      const sentences = passage.text.match(/[^.!?]+[.!?]?/gu)?.map(sentence => sentence.trim()).filter(Boolean) || [];
      const fitting = sentences.find(sentence => {
        const words = new Set(tokens(sentence));
        return terms.length >= 2 && terms.every(term => words.has(term)) &&
          words.size > terms.length;
      });
      if (fitting) {
        matches.push({ citation: cite(passage, fitting), first: sentences[0], passage });
      }
    }
    const used = tokenBudget - remaining;
    const placed = context.map(id);
    const conflict = new Set(matches.map(match => tokens(match.citation.quote).join(' '))).size > 1;
    if (conflict || !matches.length) {
      return { text: null, citation: null, conflicts: conflict ? matches.map(match => match.citation) : [], context: placed, used };
    }
    const chosen = matches[0];
    const citation = answerMode === 'first-sentence' ? cite(chosen.passage, chosen.first) : chosen.citation;
    return { text: citation.quote, citation, conflicts: [], context: placed, used };
  }

  function cite(passage, quote) {
    return { id: id(passage), document: passage.document, version: passage.version, section: passage.section, quote };
  }

  function evaluate(outcome, expected, goldContext) {
    const expectedDocument = expected.citation?.split('#')[0];
    const documentHit = expectedDocument === undefined ? null : outcome.ranking.some(row => row.edition === expectedDocument);
    const passageHit = expected.citation === undefined ? null : outcome.ranking.some(row => row.id === expected.citation);
    const citationMatch = expected.citation === undefined ? null : outcome.citation?.id === expected.citation && outcome.citation.quote === expected.quote;
    const stanceMatch = outcome.status === expected.status && (expected.reason === undefined || outcome.reason === expected.reason);
    const toolMatch = outcome.toolCalls === expected.toolCalls &&
      (expected.toolValue === undefined || outcome.toolResult?.value === expected.toolValue);
    let diagnosis = null;
    if (goldContext && !citationMatch) diagnosis = goldContext.citation?.id === expected.citation &&
      goldContext.citation.quote === expected.quote ? 'retrieval' : 'answer';
    return { documentHit, passageHit, citationMatch, stanceMatch, toolMatch, diagnosis, pass: stanceMatch && citationMatch !== false && toolMatch, goldContext };
  }

  function runOne(state, request, options = {}, expected = null) {
    assertRequest(request);
    const { data, index } = state;
    const { user, question, document, tool } = request;
    const terms = [...new Set(tokens(question))];
    const topK = options.topK ?? data.budget.topK;
    const outcome = {
      request: { user, question, ...(document ? { document } : {}), ...(tool !== undefined ? { tool } : {}) },
      limits: { ...data.budget, topK }, status: 'abstain', reason: 'no-evidence', answer: null,
      citation: null, conflicts: [], ranking: [], context: [], contextTokens: 0, toolCalls: 0, toolResult: null, trace: []
    };
    const mark = (stage, decision) => outcome.trace.push({ stage, decision });
    const finish = () => {
      outcome.evaluation = expected ? evaluate(outcome, expected, null) : null;
      return outcome;
    };
    const stop = (status, reason) => {
      outcome.status = status;
      outcome.reason = reason;
      return finish();
    };
    const identity = data.users.find(entry => entry.id === user);
    mark('identity', identity ? 'allow' : 'deny');
    if (!identity) return stop('denied', 'identity');
    const eligible = index.passages.flatMap((passage, i) =>
      (!document || passage.document === document) && passage.allow.includes(identity.role) ? [i] : []);
    mark('documents', document && !eligible.length ? 'deny' : 'filter');
    if (document && !eligible.length) return stop('denied', 'document-access');

    if (tool !== undefined) {
      const args = tool?.args;
      const valid = tool?.name === 'read_status' && Object.keys(tool).length === 2 && args &&
        typeof args === 'object' && Object.keys(args).length === 1 &&
        typeof args.asset === 'string' && own(data.tool.assets, args.asset);
      mark('schema', valid ? 'allow' : 'reject');
      if (!valid) return stop('invalid', 'tool-schema');
      const permitted = data.tool.allow.includes(identity.role);
      mark('tool-access', permitted ? 'allow' : 'deny');
      if (!permitted) return stop('denied', 'tool-access');
      const sameAsset = tokens(args.asset).every(term => terms.includes(term));
      mark('tool-asset', sameAsset ? 'allow' : 'reject');
      if (!sameAsset) return stop('invalid', 'tool-asset-mismatch');
    }

    const ranked = retrieve(index, eligible, terms, topK);
    outcome.ranking = ranked.map(({ passage, score }, i) =>
      ({ rank: i + 1, id: id(passage), edition: docId(passage), score, length: passage.length }));
    mark('retrieval', ranked.length);
    const composed = compose(ranked.map(({ passage }) => passage), terms, data.budget.contextTokens, options.answerMode);
    outcome.context = composed.context;
    outcome.contextTokens = composed.used;
    outcome.answer = composed.text;
    outcome.citation = composed.citation;
    outcome.conflicts = composed.conflicts;
    if (composed.conflicts.length) outcome.reason = 'conflicting-evidence';
    if (composed.citation) {
      outcome.status = 'answered';
      outcome.reason = 'cited';
    }
    mark('answer', outcome.reason);

    if (tool !== undefined && composed.citation && data.budget.toolCalls > 0) {
      mark('execute', 'read_status');
      outcome.toolCalls += 1;
      outcome.toolResult = { asset: tool.args.asset, value: data.tool.assets[tool.args.asset] };
      mark('result', 'local');
    } else if (tool !== undefined) {
      mark('tool-run', 'skipped');
    }
    if (expected?.citation) {
      const gold = eligible.map(i => index.passages[i]).find(passage => id(passage) === expected.citation);
      const goldContext = gold ? compose([gold], terms, data.budget.contextTokens, options.answerMode) : null;
      outcome.evaluation = evaluate(outcome, expected, goldContext);
      return outcome;
    }
    return finish();
  }

  function report(state) {
    const isFixture = sameInput(state.data, root.documentSupportFixture);
    const results = state.data.cases.map(({ id: caseId, request, options, expected }) =>
      ({ id: caseId, ...runOne(state, request, options, isFixture ? expected : null) }));
    const labels = results.map(result => result.evaluation).filter(Boolean);
    const scored = labels.filter(result => result.documentHit !== null);
    const summary = isFixture ? {
      questions: labels.length,
      evidenceQuestions: scored.length,
      documentHits: scored.filter(result => result.documentHit).length,
      passageHits: scored.filter(result => result.passageHit).length,
      exactCitations: scored.filter(result => result.citationMatch).length,
      stanceMatches: labels.filter(result => result.stanceMatch).length,
      toolMatches: labels.filter(result => result.toolMatch).length
    } : null;
    return { format: 1, version, mode: isFixture ? 'fixture' : 'observation', manifest: state.manifest, summary, results };
  }

  root.documentSupportEngine = {
    install, restore, runOne, report,
    source: () => '(' + documentSupportModule.toString() + ')(globalThis);'
  };
})(globalThis);

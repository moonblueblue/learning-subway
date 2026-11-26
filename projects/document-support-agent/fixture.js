(function (root) {
  const reset = { user: 'tech', question: 'G7 reset wait' };
  const status = { user: 'tech', question: 'G7 status', tool: { name: 'read_status', args: { asset: 'G7' } } };
  const evidence = { status: 'answered', citation: 'OPS-17@v2#reset', quote: 'G7 reset: wait 30 seconds.', toolCalls: 0 };
  root.documentSupportFixture = {
    format: 1,
    policyVersion: 'P1',
    documents: [
      { id: 'OPS-17', version: 'v1', active: false, allow: ['tech', 'viewer', 'supervisor'], sections: [
        { id: 'reset', title: 'Reset procedure', text: 'G7 reset: wait 20 seconds.' }
      ] },
      { id: 'OPS-17', version: 'v2', active: true, allow: ['tech', 'viewer', 'supervisor'], sections: [
        { id: 'reset', title: 'Reset procedure', text: 'Revision note. G7 reset: wait 30 seconds.' },
        { id: 'safe', title: 'Protective gear', text: 'G7 protective gear: wear insulated gloves.' }
      ] },
      { id: 'FAQ-02', version: 'v1', active: true, allow: ['tech', 'viewer', 'supervisor'], sections: [
        { id: 'training', title: 'Practice glossary', text: 'G7 reset wait. G7 reset wait. G7 reset wait.' }
      ] },
      { id: 'STAT-04', version: 'v1', active: true, allow: ['tech', 'viewer', 'supervisor'], sections: [
        { id: 'panel', title: 'Local status panel', text: 'G7 status: check the local status panel. G8 status: check the local status panel.' }
      ] },
      { id: 'SAF-09', version: 'v1', active: true, allow: ['supervisor'], sections: [
        { id: 'inspection', title: 'Supervisor inspection', text: 'G7 inspection: record reading in the supervisor log.' }
      ] }
    ],
    users: [
      { id: 'tech', role: 'tech' },
      { id: 'viewer', role: 'viewer' },
      { id: 'lead', role: 'supervisor' }
    ],
    tool: { name: 'read_status', version: 'T1', allow: ['tech', 'supervisor'], assets: { G7: 'READY', G8: 'MAINTENANCE' } },
    budget: { topK: 2, contextTokens: 48, toolCalls: 1 },
    cases: [
      { id: 'reset', request: reset, expected: evidence },
      { id: 'no-evidence', request: { user: 'viewer', question: 'G7 warranty duration' }, expected: { status: 'abstain', reason: 'no-evidence', toolCalls: 0 } },
      { id: 'restricted-document', request: { user: 'viewer', question: 'G7 inspection', document: 'SAF-09' }, expected: { status: 'denied', reason: 'document-access', toolCalls: 0 } },
      { id: 'status-allowed', request: status, expected: { status: 'answered', citation: 'STAT-04@v1#panel', quote: 'G7 status: check the local status panel.', toolCalls: 1, toolValue: 'READY' } },
      { id: 'status-denied', request: { ...status, user: 'viewer' }, expected: { status: 'denied', reason: 'tool-access', toolCalls: 0 } },
      { id: 'retrieval-failure', request: reset, options: { topK: 1 }, expected: evidence },
      { id: 'answer-failure', request: reset, options: { answerMode: 'first-sentence' }, expected: evidence }
    ]
  };
})(globalThis);

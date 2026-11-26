(function installInspection(root) {
  'use strict';

  const limits = {cases: 12, manuals: 8, dimension: 32, pairs: 6};
  const MIN_SURFACE_PIXEL = 64;
  const RETRIEVAL_CONTRAST = 20;
  const ID = /^[A-Za-z0-9_-]{1,32}$/;
  const stamp = /^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\dZ$/;
  const compareIds = (a, b) => a < b ? -1 : a > b ? 1 : 0;
  const round = value => Math.round(value * 10000) / 10000;
  const has = (obj, key) => Object.prototype.hasOwnProperty.call(obj, key);
  const isObject = value => value !== null && typeof value === 'object' && !Array.isArray(value);
  const isNumber = (value, min, max) => Number.isFinite(value) && value >= min && value <= max;
  const isInteger = (value, min, max) => Number.isInteger(value) && isNumber(value, min, max);

  function requireInput(ok, path) {
    if (!ok) throw new Error(path);
  }

  function canonical(value) {
    if (Array.isArray(value)) return '[' + value.map(canonical).join(',') + ']';
    if (isObject(value)) {
      return '{' + Object.keys(value).sort().map(key => JSON.stringify(key) + ':' + canonical(value[key])).join(',') + '}';
    }
    return JSON.stringify(value);
  }

  function localized(value, maxLength) {
    return isObject(value) && ['ko', 'en'].every(lang =>
      typeof value[lang] === 'string' && value[lang].trim().length > 0 && value[lang].length <= maxLength);
  }

  function validate(input) {
    requireInput(isObject(input) && input.schemaVersion === 1, 'schemaVersion');
    const {cases, manuals, settings, lightingPairs} = input;
    requireInput(isObject(settings) && isInteger(settings.contrastThreshold, 1, 255)
      && isInteger(settings.minPixels, 1, limits.dimension ** 2)
      && isNumber(settings.iouThreshold, 0.01, 1), 'settings');
    requireInput(Array.isArray(manuals) && manuals.length && manuals.length <= limits.manuals, 'manuals');
    const manualIds = new Set();
    manuals.forEach((manual, index) => {
      const field = 'manuals[' + index + ']';
      requireInput(isObject(manual) && typeof manual.id === 'string' && ID.test(manual.id)
        && !manualIds.has(manual.id), field + '.id');
      manualIds.add(manual.id);
      requireInput(localized(manual.title, 60) && localized(manual.text, 180), field + '.title/text');
      requireInput(Array.isArray(manual.features) && manual.features.length === 2
        && manual.features.every(value => isNumber(value, 0, 1)), field + '.features');
    });
    requireInput(Array.isArray(cases) && cases.length && cases.length <= limits.cases, 'cases');
    const caseIds = new Set();
    cases.forEach((item, index) => {
      const field = 'cases[' + index + ']';
      requireInput(isObject(item) && typeof item.id === 'string' && ID.test(item.id)
        && !caseIds.has(item.id), field + '.id');
      caseIds.add(item.id);
      requireInput(item.role === 'calibration' || item.role === 'test', field + '.role');
      for (const key of ['camera', 'session']) {
        requireInput(typeof item[key] === 'string' && ID.test(item[key]), field + '.' + key);
      }
      requireInput(typeof item.capturedAt === 'string' && stamp.test(item.capturedAt)
        && Number.isFinite(Date.parse(item.capturedAt))
        && new Date(item.capturedAt).toISOString() === item.capturedAt.replace('Z', '.000Z'), field + '.capturedAt');
      requireInput(isObject(item.lighting) && isNumber(item.lighting.gain, 0.10, 1.50), field + '.lighting.gain');
      requireInput(Array.isArray(item.pixels) && isInteger(item.pixels.length, 2, limits.dimension)
        && Array.isArray(item.pixels[0]) && isInteger(item.pixels[0].length, 2, limits.dimension), field + '.pixels');
      const width = item.pixels[0].length;
      const height = item.pixels.length;
      requireInput(item.pixels.every(row => Array.isArray(row) && row.length === width
        && row.every(value => isInteger(value, 0, 255))), field + '.pixels');
      if (has(item, 'truth') && item.truth !== null) {
        const truth = item.truth;
        requireInput(isObject(truth) && typeof truth.defect === 'string' && ID.test(truth.defect)
          && manualIds.has(truth.manualId), field + '.truth');
        requireInput(Array.isArray(truth.box) && truth.box.length === 4, field + '.truth.box');
        const [x, y, w, h] = truth.box;
        requireInput(isInteger(x, 0, width - 1) && isInteger(y, 0, height - 1)
          && isInteger(w, 1, width - x) && isInteger(h, 1, height - y), field + '.truth.box');
      }
    });
    requireInput(Array.isArray(lightingPairs) && lightingPairs.length <= limits.pairs, 'lightingPairs');
    const pairIds = new Set();
    lightingPairs.forEach((pair, index) => {
      requireInput(isObject(pair) && typeof pair.id === 'string' && ID.test(pair.id)
        && !pairIds.has(pair.id) && caseIds.has(pair.reference) && caseIds.has(pair.variant)
        && pair.reference !== pair.variant, 'lightingPairs[' + index + ']');
      pairIds.add(pair.id);
    });
  }

  function capture(pixels, gain) {
    return pixels.map(row => row.map(value => Math.min(255, Math.max(0, Math.round(32 + (value - 32) * gain)))));
  }

  function surfaceLevel(pixels) {
    const material = pixels.flat().filter(value => value > MIN_SURFACE_PIXEL).sort((a, b) => a - b);
    return material.length ? material[Math.floor(material.length / 2)] : null;
  }

  function detect(pixels, surface, settings) {
    if (surface === null) return null;
    const w = pixels[0].length;
    const h = pixels.length;
    const eligible = pixels.map(row => row.map(value => value > MIN_SURFACE_PIXEL
      && surface - value >= settings.contrastThreshold));
    const components = [];

    for (let row = 0; row < h; row++) {
      for (let col = 0; col < w; col++) {
        if (!eligible[row][col]) continue;
        const cells = [[col, row]];
        eligible[row][col] = false;
        let minX = col;
        let minY = row;
        let maxX = col;
        let maxY = row;
        let totalContrast = 0;
        for (let index = 0; index < cells.length; index++) {
          const [x, y] = cells[index];
          minX = Math.min(minX, x);
          maxX = Math.max(maxX, x);
          minY = Math.min(minY, y);
          maxY = Math.max(maxY, y);
          totalContrast += surface - pixels[y][x];
          for (const [nx, ny] of [[x - 1, y], [x + 1, y], [x, y - 1], [x, y + 1]]) {
            if (eligible[ny]?.[nx]) {
              eligible[ny][nx] = false;
              cells.push([nx, ny]);
            }
          }
        }
        if (cells.length >= settings.minPixels) {
          components.push({
            box: [minX, minY, maxX - minX + 1, maxY - minY + 1],
            count: cells.length,
            meanContrast: round(totalContrast / cells.length),
            cells
          });
        }
      }
    }
    components.sort((a,b) => b.count - a.count || b.meanContrast - a.meanContrast
      || a.box[1] - b.box[1] || a.box[0] - b.box[0]);
    return components[0] ?? null;
  }

  function iou(one, other) {
    const [x1, y1, w1, h1] = one;
    const [x2, y2, w2, h2] = other;
    const overlapWidth = Math.max(0, Math.min(x1 + w1, x2 + w2) - Math.max(x1, x2));
    const overlapHeight = Math.max(0, Math.min(y1 + h1, y2 + h2) - Math.max(y1, y2));
    const intersection = overlapWidth * overlapHeight;
    const union = w1 * h1 + w2 * h2 - intersection;
    return {intersection, union, iou: round(intersection / union)};
  }

  function search(pixels, surface, box, manuals) {
    if (!box) return null;
    const [x, y, w, h] = box;
    const marked = pixels.slice(y, y+h).flatMap(row => row.slice(x, x+w))
      .filter(value => surface !== null && value > MIN_SURFACE_PIXEL && surface - value >= RETRIEVAL_CONTRAST);
    const aspect = (Math.min(4, Math.max(w, h) / Math.min(w, h)) - 1) / 3;
    const fill = marked.length / (w * h);
    const ranking = manuals.map(manual => ({
      id: manual.id,
      distance2: (aspect - manual.features[0]) ** 2 + (fill - manual.features[1]) ** 2
    })).sort((a,b) => a.distance2 - b.distance2 || compareIds(a.id, b.id));
    return {features: [round(aspect), round(fill)], ranking};
  }

  function splitByCapture(cases) {
    const calibration = cases.filter(item => item.role === 'calibration');
    const test = cases.filter(item => item.role === 'test');
    const shared = field => [...new Set(calibration.map(item => item[field]))]
      .filter(value => test.some(item => item[field] === value)).sort(compareIds);
    const cameraOverlap = shared('camera');
    const sessionOverlap = shared('session');
    const latestCalibration = calibration.map(item => item.capturedAt).sort().at(-1) ?? null;
    const earliestTest = test.map(item => item.capturedAt).sort()[0] ?? null;
    const timeSeparated = latestCalibration !== null && earliestTest !== null && latestCalibration < earliestTest;
    return {
      calibration: calibration.map(item => item.id), test: test.map(item => item.id),
      cameraOverlap, sessionOverlap, latestCalibration, earliestTest, timeSeparated,
      separated: timeSeparated && cameraOverlap.length === 0 && sessionOverlap.length === 0
    };
  }

  function evidenceForPair(pair, inputById, resultById) {
    const a = inputById.get(pair.reference);
    const b = inputById.get(pair.variant);
    const sameCondition = ['camera','session','capturedAt','role','pixels','truth']
      .every(field => canonical(a[field]) === canonical(b[field]));
    const aResult = resultById.get(pair.reference);
    const bResult = resultById.get(pair.variant);
    const valid = sameCondition && a.lighting.gain !== b.lighting.gain && a.role === 'test';
    if (!valid) return {...pair, valid, captureChanged: null, firstChangedOutput: null, firstChangedStage: null};
    const captureChanged = canonical(aResult.pixels) !== canonical(bResult.pixels);
    const detectionKey = found => found && [found.box, found.cells];
    const detectionChanged = canonical(detectionKey(aResult.prediction)) !== canonical(detectionKey(bResult.prediction));
    const rankingKey = result => result && result.ranking.map(manual => manual.id);
    const retrievalChanged = canonical(rankingKey(aResult.predictedSearch)) !== canonical(rankingKey(bResult.predictedSearch));
    const firstChangedStage = detectionChanged ? 'detection' : retrievalChanged ? 'retrieval' : null;
    return {...pair, valid, captureChanged, detectionChanged, retrievalChanged,
      firstChangedOutput: captureChanged ? 'capture' : firstChangedStage, firstChangedStage};
  }

  function evaluate(input) {
    validate(input);
    const split = splitByCapture(input.cases);
    const results = input.cases.map(item => {
      const pixels = capture(item.pixels, item.lighting.gain);
      const surface = surfaceLevel(pixels);
      const prediction = detect(pixels, surface, input.settings);
      const predictedSearch = search(pixels, surface, prediction?.box, input.manuals);
      const truth = item.truth ?? null;
      const annotated = has(item, 'truth');
      const overlap = truth && prediction ? iou(truth.box, prediction.box) : null;
      let detection = 'unscored';
      if (truth) {
        detection = prediction === null ? 'missed'
          : overlap.intersection / overlap.union >= input.settings.iouThreshold ? 'matched' : 'mislocalized';
      } else if (annotated) {
        detection = prediction === null ? 'clean' : 'false-positive';
      }
      const oracleSearch = truth ? search(pixels, surface, truth.box, input.manuals) : null;
      const expectedRank = ranking => truth && ranking
        ? ranking.ranking.findIndex(manual => manual.id === truth.manualId) + 1 : null;
      const {id, role, camera, session, capturedAt, lighting} = item;
      return {id, role, camera, session, capturedAt, lighting, annotated, pixels, surface, truth, prediction,
        overlap, detection, predictedSearch, oracleSearch,
        predictedExpectedRank: expectedRank(predictedSearch), oracleExpectedRank: expectedRank(oracleSearch)};
    });
    const inputById = new Map(input.cases.map(item => [item.id, item]));
    const resultById = new Map(results.map(item => [item.id, item]));
    const lightingPairs = input.lightingPairs.map(pair => evidenceForPair(pair, inputById, resultById));
    const test = results.filter(result => result.role === 'test');
    const positive = test.filter(result => result.truth);
    const predicted = positive.filter(result => result.predictedSearch);
    const summary = {
      cases: test.length,
      annotated: test.filter(result => result.annotated).length,
      positives: positive.length,
      matched: positive.filter(result => result.detection === 'matched').length,
      missed: positive.filter(result => result.detection === 'missed').length,
      mislocalized: positive.filter(result => result.detection === 'mislocalized').length,
      falsePositives: test.filter(result => result.detection === 'false-positive').length,
      predictedSearches: predicted.length,
      predictedSearchErrors: predicted.filter(result => result.predictedExpectedRank !== 1).length,
      oracleSearches: positive.length,
      oracleSearchErrors: positive.filter(result => result.oracleExpectedRank !== 1).length
    };
    const fixture = canonical(input) === canonical(sampleInput());
    const referencePassed = fixture && split.separated
      && summary.matched === 2 && summary.missed === 1 && summary.mislocalized === 1
      && summary.oracleSearchErrors === 1
      && test.some(r => r.detection === 'matched' && r.oracleExpectedRank > 1)
      && test.some(r => r.detection === 'missed' && r.oracleExpectedRank === 1)
      && lightingPairs.some(pair => pair.valid && pair.firstChangedStage === 'detection');
    return {schemaVersion: 1, settings: {...input.settings}, limits, fixture, referencePassed: fixture ? referencePassed : null,
      split, results, lightingPairs, summary};
  }

  function sampleInput() {
    function part(marks) {
      const pixels = Array.from({length: 8}, (_, y) => Array.from({length: 12}, (_, x) => {
        const body = x > 0 && x < 11 && y > 0 && y < 7 && !([1,10].includes(x) && [1,6].includes(y));
        if (body && (x === 2 && y === 4 || x === 9 && y === 2)) return 53;
        return body ? 180 : 43;
      }));
      for (const [x,y,value] of marks) pixels[y][x] = value;
      return pixels;
    }
    const scratch = [[3,2,104],[4,2,104],[5,2,104],[6,2,104]];
    const scratchTruth = {box:[3,2,4,1], defect:'scratch', manualId:'SCRATCH'};
    const makeCase = (id, role, camera, session, capturedAt, gain, marks, truth) =>
      ({id,role,camera,session,capturedAt,lighting:{gain},pixels:part(marks),truth: truth ? {...truth, box: [...truth.box]} : null});
    const cases = [
      makeCase('cal-scratch', 'calibration', 'A', 'A09', '2026-11-03T09:00:00Z', 1, scratch, scratchTruth),
      makeCase('lit-scratch', 'test', 'B', 'B14', '2026-11-04T14:00:00Z', 1, scratch, scratchTruth),
      makeCase('dim-scratch', 'test', 'B', 'B14', '2026-11-04T14:00:00Z', .55, scratch, scratchTruth),
      makeCase('compact-chip', 'test', 'C', 'C15', '2026-11-04T15:00:00Z', 1,
        [[4,3,95],[5,3,95],[4,4,95],[5,4,95]],{box:[4,3,2,2],defect:'chip',manualId:'CHIP'}),
      makeCase('shifted-scratch', 'test', 'D', 'D16', '2026-11-04T16:00:00Z', 1,
        [...scratch,[8,4,86],[9,4,86],[8,5,86],[9,5,86]],scratchTruth),
      makeCase('clean', 'test', 'D', 'D16', '2026-11-04T16:03:00Z', 1, [], null)
    ];
    const manuals = [
      {id:'SCRATCH', title:{ko:'표면 흠집',en:'Surface scratch'}, text:{ko:'흠집 길이를 재고 표면 검사표에 기록합니다.',en:'Measure the scratch and log its length.'}, features:[1,1]},
      {id:'DENT', title:{ko:'찍힘',en:'Dent'}, text:{ko:'깊이 게이지로 찍힘의 깊이를 확인합니다.',en:'Check dent depth with the depth gauge.'}, features:[0,1]},
      {id:'CHIP', title:{ko:'깨짐',en:'Chip'}, text:{ko:'깨진 부품을 보류하고 모서리 파손을 기록합니다.',en:'Hold the part and log the chipped edge.'}, features:[0,.5]},
      {id:'GENERAL', title:{ko:'일반 점검',en:'General inspection'}, text:{ko:'조명을 확인하고 표면을 다시 촬영합니다.',en:'Check lighting and capture the surface again.'}, features:[0,0]}
    ];
    return {schemaVersion:1, settings:{contrastThreshold:48, minPixels:2, iouThreshold:.5}, cases, manuals,
      lightingPairs:[{id:'same-scratch',reference:'lit-scratch',variant:'dim-scratch'}]};
  }

  const api = {
    evaluate, sampleInput,
    source: () => '(' + installInspection.toString() + ')(globalThis);\n'
  };
  if (typeof module === 'object' && module.exports) module.exports = api;
  else root.DefectInspection = api;

  if (typeof require === 'function' && typeof module === 'object' && require.main === module) {
    const fs = require('node:fs');
    try {
      const [, , inputPath, outputPath] = process.argv;
      if (!inputPath || !outputPath) throw new Error('node defect-inspection.js INPUT.json REPORT.json');
      const report = evaluate(JSON.parse(fs.readFileSync(inputPath, 'utf8')));
      fs.writeFileSync(outputPath, JSON.stringify(report, null, 2) + '\n');
    } catch (error) {
      process.stderr.write('Invalid input or output: ' + error.message + '\n');
      process.exitCode = 1;
    }
  }
})(globalThis);

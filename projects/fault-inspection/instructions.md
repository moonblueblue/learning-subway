# 설비 경보와 점검 경로 · Fault alerts and inspection routes

[English instructions](#english)

## 제출할 것

1. 센서 입력과 고장 정답을 맞춰 경보를 만드는 프로그램을 작성합니다. `development.json`의 1월로 점수를 학습하고 2월에서 임계값을 선택합니다. 임계값, 학습 결과, 미탐 5점·오탐 1점과 입력 버전을 정책으로 저장합니다.
2. 정책을 저장한 뒤 `holdout.json`의 3월 기간을 엽니다. 같은 자동 판정 대상 행의 기준선·모델 TP, FN, FP, TN, 비용을 비교합니다. 건수가 빠진 행은 ID와 보류 이유를 따로 기록합니다.
3. `plant-map.json`의 서로 다른 세 통로 상태에서 최단 경로와 분 단위 비용을 내는 탐색기를 작성합니다. 경보 ID를 지도 목적지에 연결하고 최대 두 대를 점검 순위에 올립니다. 지도에 없거나 닿을 수 없는 목적지는 상태·설비 ID·지도 버전·폐쇄 통로를 남겨 반장에게 넘깁니다.
4. 코드, 고정 정책, 시점별 평가표, 명령과 실행 환경, 실패 사례와 인계 조건을 제출합니다. 동료에게 같은 파일을 주고 경보·비용·경로의 재현 여부를 기록합니다.

실습 보기의 첫 단계에서 `development.json`과 `reference.js`를 받습니다. 검증 단계에서 정책을 고정하면 미사용 시험 자료를 받을 수 있습니다. 열린 통로 단계에서 지도를 받습니다. 처음 세 데이터 파일은 연습용 합성 자료입니다.

## 시각과 정책

- 행의 키는 설비 ID와 `prediction_at`입니다. 모든 시각은 UTC입니다. `sensor_at`이 측정 시각이고 `sensor_available_at`이 읽을 수 있게 된 시각입니다. 값이 없거나, 예측 뒤에 받았거나, 예측 시점에 측정값이 30분보다 오래되었으면 반장에게 넘깁니다.
- 고장이 예측 직후부터 24시간 이내에 발생하면 1입니다. `failure_at`이 null이면 0입니다. `label_available_at`은 창 마감 뒤에 정답을 확인한 시각입니다. `repair_code`와 `repair_available_at`은 고장 뒤에 들어온 값입니다. 경보 입력에서 제외합니다.
- 기준선은 온도 80°C 이상입니다. 모델은 온도 80°C 이상과 진동 4 mm/s 이상 두 플래그 조합별로 `(f+1)/(n+2)`를 학습합니다. 후보 기준은 .35, .55, .75입니다. 검증 비용이 같으면 더 높은 기준을 택합니다. 두 방식은 같은 입력 유효성 조건으로 평가합니다.
- 경보 점수 내림차순, 동점은 설비 ID 오름차순으로 고릅니다. 최대 두 대입니다. 닫힌 간선은 탐색에서 제외합니다. 도달 불가 또는 매핑 없음은 경로와 비용을 null로 두고 반장에게 넘깁니다.

## 참조 실행

네 파일을 같은 폴더에 둡니다. Node.js 18 이상에서 추가 패키지 없이 실행할 수 있습니다.

```sh
node reference.js lock development.json policy.json
node reference.js evaluate policy.json holdout.json plant-map.json report.json
```

`policy.json`은 검증 비용과 선택한 임계값을 담습니다. `report.json`은 두 정책의 행별 결과, 오류, 점검·대기 목록, 센서 인계, 폐쇄별 경로와 파일 해시를 담습니다. 검증 비용은 순서대로 **2, 6, 10**, 최종 기준은 **.35**입니다. 시험의 자동 판정 7행에서 기준선 **12점**, 모델 **8점**이며 H·I 두 행은 인계입니다. 설비 D는 열린 지도 **5분**, J-D 폐쇄 **8분**, J-D와 K-D 동시 폐쇄 **도달 불가**입니다.

수정 시험은 복사본으로 합니다. `plant-map.json`을 복사해 `scenarios.open`을 `["J-D"]`로 바꿉니다. 같은 정책으로 다시 평가하면 열린 시나리오의 D 경로가 5분에서 8분으로 바뀌고, 경보 비용은 그대로입니다. 또는 `holdout.json` 복사본에서 I의 수신 시각을 예측 8분 전으로 바꿉니다. 자동 판정 행은 8개, 입력 인계는 H 한 행입니다. 수정 자료로 낸 결과는 원래 시험 보고서와 별도로 기록합니다.

## English

### Deliverables

1. Write the alert program. Fit scores on January rows in `development.json` and choose the cutoff on February validation rows. Save a policy with the cutoff, fitted scores, input versions and the 5:1 miss-to-false-alert cost.
2. Open March `holdout.json` once the policy is locked. Compare baseline and learned model TP, FN, FP, TN and total cost on the same eligible rows. Record the ID and reason for every deferred row.
3. Write a route finder that returns shortest routes and costs in minutes under all three map scenarios in `plant-map.json`. Join alert IDs to map destinations and allocate at most two slots. Hand an unmapped or unreachable destination to the inspection lead with the status, unit ID, map version and closures.
4. Submit your code, frozen policy, evaluation by period, commands and runtime, and one failure case with a named handoff and trigger. Ask a peer to rerun the files and record whether the alerts, costs and routes match.

In **Try it**, download `development.json` and `reference.js` at the first step. Lock the threshold at the validation step to unlock the holdout data. Get the map at the open-route step. The case data is synthetic.

### Timing and policy

- Each row is an equipment ID at `prediction_at`. Timestamps use UTC. `sensor_at` is measurement time, and `sensor_available_at` is receipt time. Send missing readings, readings received after prediction, and readings over 30 minutes old at prediction to the inspection lead.
- The outcome is a failure in the 24 hours after prediction. Null `failure_at` indicates no failure. `label_available_at` records confirmation after the window. Exclude `repair_code` and `repair_available_at`, which are recorded after failure, from alert features.
- The baseline alerts at 80°C or above. For each combination of temperature at or above 80°C and vibration at or above 4 mm/s, fit the model's risk score as `(f+1)/(n+2)`. Candidate cutoffs are .35, .55 and .75. Break validation-cost ties in favor of the higher cutoff. Both methods use the same eligible cases.
- Rank alerts by decreasing risk, breaking ties by equipment ID ascending. The map has two slots. Exclude closed edges. Unreachable and unmapped cases have null path and cost and are assigned to the inspection lead.

### Run the reference

Put all four downloaded files together. Use Node.js 18 or later. The script uses the standard library.

```sh
node reference.js lock development.json policy.json
node reference.js evaluate policy.json holdout.json plant-map.json report.json
```

`policy.json` records validation costs and the frozen cutoff. `report.json` includes per-case results for both methods, errors, selected and waiting lists, sensor handoffs, routes by closure, and file hashes. Validation costs are **2, 6, 10**, so the frozen cutoff is **.35**. Across seven eligible holdout rows, baseline costs **12**, model costs **8**, and H and I go to review. D's route takes **5 minutes** open, **8 minutes** with J-D closed, and is **unreachable** with J-D and K-D closed.

To verify that the program responds to changed inputs, copy `plant-map.json` and replace `scenarios.open` with `["J-D"]`. Evaluate with the previous policy. D's first route changes from 5 to 8 minutes and alert cost stays the same. Alternatively, copy `holdout.json` and change I's receipt time to 8 minutes before prediction. The common evaluation cohort grows to eight, leaving only H in sensor review. Keep these experiments separate from the untouched holdout report.

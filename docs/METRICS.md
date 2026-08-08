# Measurement Guide

Measurement exists to test whether a practice protects people and deserves to continue. It is not a substitute for judgment and must not become a new source of surveillance.

## Rules

1. Define metrics and thresholds before final evaluation.
2. Measure distributions and material affected-group differences where lawful, meaningful, and privacy-preserving; do not report averages alone.
3. Pair target metrics with counter-metrics that expose displaced harm or gaming.
4. Record uncertainty, missing data, and measurement burden.
5. Do not create a single composite “Life First score.” Important tradeoffs must remain visible.
6. Every critical metric needs an owner, cadence, warning threshold, stop threshold, and required response.
7. Minimize personal data and suppress unsafe small-group reporting.

## Required dimensions

### 1. Protection and benefit

- intended human benefit and reach;
- harm and near misses by severity and exposure;
- missed risks and delayed intervention;
- recurrence after corrective action; and
- people or needs excluded from the intended benefit.

### 2. Agency and remedy

- notice and explanation coverage;
- accessibility of human alternatives;
- correction and appeal availability;
- appeal volume and overturn rate;
- time to review, correction, and repair;
- unresolved downstream effects; and
- reports of retaliation or coerced acceptance.

### 3. Decision quality

- false-positive and false-negative rates;
- unsupported-claim and source-verification failure rates;
- uncertainty calibration and appropriate abstention;
- escalation quality;
- reviewer disagreement and override correctness; and
- downstream error, not only immediate output accuracy.

### 4. Governance and operations

- required human-review coverage;
- audit-record completeness and traceability;
- reviewer workload, queue pressure, and time available;
- unauthorized changes or scope expansion;
- data access, retention, correction, and deletion compliance;
- rollback and emergency-stop exercise success;
- vendor, model, prompt, and tool drift; and
- unresolved conflicts or expired exceptions.

### 5. Learning

- incident detection, containment, correction, and closure time;
- repeat failure rate;
- corrective-action completion and effectiveness;
- known risks retired or accepted with authority;
- changes triggered by affected-person feedback; and
- public-safe learning summaries issued on schedule.

## Counter-metric examples

| Target | Pair with |
| --- | --- |
| Faster decision time | Harm, missed risk, reviewer workload, appeals, and time to repair |
| Higher automation rate | Override correctness, abstention, accessibility, and agency |
| Fewer escalations | Missed-risk rate, severity of late discoveries, and reviewer disagreement |
| Lower false-positive rate | False negatives and excluded or unserved cases |
| Higher user completion | Coercion, abandonment, human-alternative use, and complaint rate |
| Lower cost | Burden shifted to affected people, reviewers, public institutions, or future repair |

## Metric card

For every material metric record:

- name and decision it informs;
- definition and exclusions;
- numerator, denominator, unit, and population;
- data source and lawful basis;
- owner and review cadence;
- baseline, target, warning threshold, and stop threshold;
- required response;
- disaggregation and small-group protections;
- uncertainty and missingness;
- privacy cost;
- gaming or displacement risk; and
- paired counter-metrics.

Use [METRIC_CARD.md](../templates/METRIC_CARD.md).

## Reporting

Internal reports SHOULD include full operational evidence appropriate to access. Public reports SHOULD explain purpose, scope, outcomes, limitations, material incidents or corrections, and next steps without exposing personal data, protected records, or security details that enable abuse.

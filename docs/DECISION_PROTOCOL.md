# Decision Protocol

This protocol turns the [core framework](../FRAMEWORK.md) into a repeatable authorization process. Use the templates in the [toolkit](../templates/README.md) to retain evidence.

## Entry criteria

Run the protocol before:

- developing or procuring a consequential AI workflow;
- beginning a pilot or live use;
- materially changing model, prompt, tool, data, purpose, population, authority, autonomy, reviewer process, or retention;
- renewing an expired conformance statement or exception; or
- resuming after a serious incident or failed control.

## Gate 0 — Authority and purpose

Record:

1. the legitimate purpose and intended human benefit;
2. the authority and its limits;
3. affected people, including non-users;
4. the accountable system owner;
5. intended and excluded uses; and
6. the prohibited-practice check.

**No-go:** unclear authority, an unlawful or prohibited purpose, no accountable owner, or an inability to bound the use.

## Gate 1 — Risk and alternatives

### Assign a tier

Use plausible severity, exposure, scale, reversibility, autonomy, data sensitivity, affected-person vulnerability, and difficulty of remedy. A single critical trigger elevates the workflow even when average risk appears low.

- **Tier 0 — Minimal:** informational or assistive; no meaningful effect on rights, safety, opportunity, or essential services.
- **Tier 1 — Limited:** bounded and reversible effect with low expected severity and clear human override.
- **Tier 2 — High:** material effect on safety, dignity, liberty, livelihood, access, essential services, or a vulnerable population.
- **Tier 3 — Critical:** potential serious or irreversible harm, crisis conditions, large-scale surveillance, autonomous external action, or decisions where delayed repair is inadequate.

### Compare alternatives

Consider at least:

- no action;
- delay pending better evidence;
- a non-AI process;
- a narrower population or purpose;
- a less intrusive data source;
- advisory output instead of action; and
- a reversible or staged intervention.

Document why the selected path is necessary and proportionate.

## Gate 2 — Evidence, data, and system readiness

### Evidence ledger

Separate:

- observed facts and source;
- model-generated claims;
- human inference;
- contradictions;
- unknowns and uncertainty;
- source age and relevance; and
- corroboration required by consequence.

### Data readiness

Record data provenance, authority, necessity, access, sensitivity, retention, deletion, correction, and disclosure. Data MUST NOT be included merely because it is available.

### System readiness

Inventory model, prompt, retrieval sources, tools, vendor services, action permissions, reviewer interface, fallbacks, logs, and failure dependencies. Agentic tools SHOULD be allowlisted, least-privileged, bounded by transaction/resource limits, and subject to step-up approval for consequential action.

**No-go:** uncertain data rights, missing critical provenance, unbounded tool authority, no safe fallback, or no correction/deletion path appropriate to consequence.

## Gate 3 — Assurance

Evaluate before reliance:

- normal, edge, and adversarial cases;
- unsupported claims and source-verification failures;
- false positives and false negatives;
- uncertainty calibration, abstention, and escalation;
- accessibility and language needs;
- affected-group and non-user impact where lawful and meaningful;
- automation bias and reviewer workload;
- prompt injection, tool manipulation, and supplier failure;
- rollback, emergency stop, appeal, correction, and incident exercises; and
- safe behavior when a required dependency is unavailable.

Define warning and stop thresholds before looking at the final results.

## Gate 4 — Launch authorization

The launch record MUST include:

- passed gates and unresolved residual risk;
- risk tier and system/version identifiers;
- control owners and evidence locations;
- approved population, purpose, data, action, and retention;
- monitoring metrics, warning thresholds, and stop thresholds;
- tested rollback and incident path;
- notice, explanation, correction, and appeal route;
- accountable owner approval; and
- required independent approval.

For Tier 3, AI MAY inform but MUST NOT decide alone. Two-person authorization, corroborated evidence, a tested fallback, and incident readiness are required.

## Gate 5 — Operation and change

During operation:

- log system version, material inputs/sources, tools/actions, reviewer, decision, override, and outcome proportionately;
- monitor benefit, harm, near misses, error, appeals, reviewer disagreement, accessibility, drift, abuse, deletion, and control health;
- protect logs and minimize personal data;
- investigate threshold breaches; and
- re-run affected gates after a material change.

Monitoring MUST NOT silently create a new surveillance purpose.

## Gate 6 — Incident, repair, or retirement

When harm or a critical control failure occurs:

1. contain ongoing exposure and suspend when needed;
2. preserve necessary evidence without expanding access;
3. assess affected people and downstream effects;
4. notify appropriate responsible parties and affected people when safe and required;
5. correct records, restore access or opportunity, and support repair;
6. identify contributing technical, human, incentive, and governance conditions;
7. implement and test corrective actions;
8. publish a safe learning summary when appropriate; and
9. decide whether to resume, revise and retest, or retire.

## Mandatory pause triggers

Pause whenever:

- authority, purpose, or scope is unclear;
- evidence is insufficient or inference is being treated as fact;
- required review is absent, conflicted, overloaded, or rushed;
- purpose, population, data, action, or retention has expanded;
- meaningful correction or appeal is unavailable where required;
- a critical record, control, fallback, rollback, or incident owner is missing;
- a warning or stop threshold is reached; or
- foreseeable serious harm cannot be contained or repaired.

## Emergency conditions

Urgency does not erase accountability. A temporary emergency path MUST name authority, scope, owner, evidence minimum, permitted action, monitoring, expiration, and after-action review. Emergency powers auto-expire and MUST NOT become routine through silence.

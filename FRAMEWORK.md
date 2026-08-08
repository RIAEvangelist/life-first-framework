# Life First Framework v0.3

Status: public working draft
Scope: consequential AI design, deployment, operation, and retirement

## 1. Purpose

Life First is a decision framework for AI-assisted work where mistakes can affect safety, dignity, liberty, access, essential services, livelihood, or meaningful human agency. Its purpose is to make protective intent operational, reviewable, and correctable.

Life First is not a substitute for law, emergency services, professional judgment, accessibility obligations, labor protections, or domain-specific safety standards. When another applicable rule is stronger, follow the stronger rule.

## 2. Normative language

The terms **MUST**, **MUST NOT**, **SHOULD**, **SHOULD NOT**, and **MAY** indicate requirement strength as defined in the [glossary](docs/GLOSSARY.md).

## 3. Commitments

Every scoped Life First implementation commits to:

1. **Life and dignity.** Protection of life and respect for human dignity MUST be primary design constraints.
2. **Agency.** People affected by consequential decisions MUST have meaningful notice, correction, review, or appeal appropriate to the context.
3. **Proportionality.** The intervention MUST be necessary for a legitimate purpose and no more intrusive than required.
4. **Reversibility.** When facts are incomplete, teams SHOULD prefer actions that can be safely paused, corrected, or undone.
5. **Accountability.** An identified human MUST own the decision, its authority, its consequences, and the power to stop the system.
6. **Evidence and uncertainty.** Observed facts, inferences, unknowns, and limitations MUST be distinguished in the record.
7. **Learning and repair.** Teams MUST measure outcomes, correct errors, repair harm where possible, and change or retire practices that fail.

## 4. Operating cycle

### 4.1 Frame

Record the legitimate purpose, applicable authority, decision boundary, affected people, intended benefit, foreseeable harm, and excluded uses. Purpose, audience, and retention MUST NOT expand silently.

### 4.2 Verify

Document the evidence, source, age, relevance, confidence, and limitations. Corroborate material claims in proportion to consequence. Collect, access, retain, and disclose only the data necessary for the approved purpose.

### 4.3 Compare

Consider multiple options, including delay, no action, a non-AI process, and a less intrusive intervention. Compare necessity, expected benefit, harm, reversibility, explainability, accessibility, and appealability.

### 4.4 Authorize

Assign a risk tier, complete the required review, resolve conflicts, and name the accountable decision owner. Reviewers MUST have the competence, independence, information, and authority needed to challenge or stop the action.

### 4.5 Act

Act only inside the approved purpose, scope, access, retention, communication, and escalation limits. High-impact action MUST NOT rely solely on an opaque score or uncorroborated model output.

### 4.6 Observe

Monitor intended benefit, false positives and negatives, near misses, complaints, appeals, reviewer disagreement, affected-person experience, and control failures. Monitoring MUST NOT become an undeclared surveillance purpose.

### 4.7 Repair

Stop or contain ongoing harm, support affected people, correct records and downstream effects, preserve an appropriate audit trail, identify contributing conditions, and verify corrective actions. Retire the practice when serious risk cannot be controlled.

## 5. Risk tiers

| Tier | Description | Minimum decision rule |
| --- | --- | --- |
| **0 — Minimal** | Informational or assistive use with no meaningful effect on rights, safety, essential services, or opportunity. | Named owner, basic testing, user-visible limitations, and ordinary monitoring. |
| **1 — Limited** | Bounded, reversible effect with clear human override and low expected severity. | Documented intake, evidence check, owner approval, rollback, and correction path. |
| **2 — High** | Material effect on safety, dignity, liberty, access, livelihood, essential services, or a vulnerable population. | Independent qualified review before action, documented alternatives, meaningful notice/appeal, monitoring, and incident readiness. |
| **3 — Critical** | Serious harm may be irreversible, time-sensitive, or difficult to repair. | AI MAY inform but MUST NOT decide alone; corroborated evidence, two-person authorization, tested fallback/rollback, incident lead, and explicit legal/domain authority are required. |

Risk is determined by plausible consequence, not by model size, vendor claims, confidence score, or how often the workflow runs. A lower likelihood does not erase catastrophic severity.

## 6. Required records

Tier 1–3 workflows MUST maintain records proportionate to risk:

- system intake and scoped purpose;
- impact and agency map;
- evidence and uncertainty ledger;
- alternatives considered;
- decision record and authorizers;
- data access, retention, and deletion terms;
- notice, correction, and appeal path;
- monitoring and counter-metrics;
- rollback and incident plan; and
- changes, incidents, repair, and retirement decisions.

Templates are available in the [toolkit](templates/README.md). Records SHOULD be concise, accessible to responsible reviewers, and protected from unauthorized alteration or disclosure.

## 7. Mandatory pause conditions

A consequential action MUST pause when any of the following is true:

- legitimate authority or purpose is unclear;
- evidence is insufficient, materially contradictory, or cannot be distinguished from inference;
- required review is unavailable, rushed, or conflicted;
- the system has expanded beyond the approved population, purpose, data, or action;
- meaningful correction or review cannot be offered where consequence requires it;
- a required audit record, fallback, or rollback is missing;
- safeguards depend on a person or service that is unavailable; or
- foreseeable serious harm cannot be contained or repaired.

## 8. Non-negotiable boundaries

- No vigilantism, harassment, doxxing, collective punishment, or unauthorized surveillance.
- No bypassing access controls or collecting data merely because it is technically reachable.
- No hidden repurposing, audience expansion, retention expansion, or silent model substitution.
- No presentation of AI output as verified evidence without appropriate validation.
- No irreversible or critical decision made solely by an AI system.
- No retaliation against people who appeal, report harm, or raise a safety concern.
- No concealment of material limitations, conflicts, incidents, or uncertainty from responsible decision-makers.

## 9. Scoped conformance

A public Life First conformance statement MUST identify:

- the exact system and workflow;
- version and operating environment;
- affected population and excluded uses;
- risk tier and accountable owner;
- review date and reviewer role;
- known exceptions or unresolved risks;
- evidence location; and
- expiration or next-review date.

Self-attestation MUST NOT imply independent certification. A statement expires when the system, model, purpose, population, authority, or material control changes.

## 10. Companion documents

Operational details live in the [decision protocol](docs/DECISION_PROTOCOL.md), [implementation guide](docs/IMPLEMENTATION_GUIDE.md), [governance model](docs/GOVERNANCE.md), [pilot plan](docs/PILOT_PLAN.md), [measurement guide](docs/METRICS.md), and [threat model](docs/THREAT_MODEL.md). The [fictional casebook](examples/README.md) demonstrates how the same requirements change across community, spiritual, clinical-support, security, industrial, polar, and space settings without replacing domain authority.

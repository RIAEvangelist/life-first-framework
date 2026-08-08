# Implementation Guide

This guide provides a practical path from first inventory to accountable operation. It is intentionally technology-neutral.

## Phase 0 — Choose a bounded workflow

Start with one workflow, one accountable owner, one affected population, and one clearly described decision boundary. Avoid beginning with an organization-wide policy claim.

Complete:

- [System intake](../templates/SYSTEM_INTAKE.md)
- [Impact and agency map](../templates/IMPACT_AND_AGENCY_MAP.md)
- Initial risk tier
- Intended and excluded uses
- Authority and accountable roles

## Phase 1 — Map the current process

Document the process before adding AI:

- inputs, sources, decisions, handoffs, and outputs;
- current error, delay, appeals, burden, and informal workarounds;
- people who benefit, bear risk, or are excluded;
- existing professional and legal duties;
- decision owners and escalation paths; and
- the non-AI fallback.

A team cannot show improvement without a baseline, and it cannot design a safe fallback if the current process is invisible.

## Phase 2 — Build the control map

For every material hazard, map one or more controls with an owner, required evidence, metric, warning threshold, stop threshold, and failure response.

### Core control catalog

| ID | Requirement | Minimum retained evidence |
| --- | --- | --- |
| **LF-01 Purpose and authority** | State the legitimate purpose, authority, decision boundary, affected population, and excluded uses. | Approved system intake and authority reference. |
| **LF-02 Risk classification** | Assign and review the risk tier using consequence, exposure, reversibility, autonomy, data, and vulnerability. | Tier rationale and reviewer. |
| **LF-03 Alternatives and proportionality** | Compare no action, delay, non-AI, narrower, and less intrusive paths. | Alternatives section in decision record. |
| **LF-04 Data stewardship** | Establish provenance, necessity, access, retention, deletion, correction, and disclosure boundaries. | Data inventory and deletion test. |
| **LF-05 Evidence integrity** | Separate observed facts, inference, generated content, uncertainty, and contradictions; corroborate by consequence. | Evidence ledger and source checks. |
| **LF-06 Human accountability** | Name competent reviewers with time, information, independence, override, and stop authority. | Role assignment, training, workload and override evidence. |
| **LF-07 Affected-person agency** | Provide appropriate notice, explanation, correction, appeal, accessibility, and non-retaliation. | User/affected-person notice and appeal exercise. |
| **LF-08 Model and system assurance** | Evaluate normal, edge, adversarial, subgroup, accessibility, abstention, escalation, and recovery behavior. | Versioned evaluation plan and results. |
| **LF-09 Tool and action boundaries** | Use least privilege, allowlists, resource/transaction limits, dry runs, step-up approval, and emergency stop. | Permission map and action-boundary tests. |
| **LF-10 Security and supplier controls** | Address prompt/tool isolation, access control, abuse, vendor changes, compromised inputs, and dependency failure. | Threat model, supplier inventory, and recovery test. |
| **LF-11 Auditability** | Trace material decisions to system version, evidence, tools/actions, reviewer, override, and outcome. | Protected decision records and completeness sample. |
| **LF-12 Monitoring and thresholds** | Define benefit, harm, agency, quality, governance, and learning measures with warning and stop responses. | Metric cards and monitoring runbook. |
| **LF-13 Incident and repair** | Prepare containment, evidence protection, notification, correction, restoration, learning, and safe summary. | Exercised incident/repair plan. |
| **LF-14 Change control** | Re-review material changes to model, prompt, tool, data, purpose, authority, population, action, or control. | Change proposal and affected-gate decision. |
| **LF-15 Exceptions** | Make exceptions scoped, independently approved when required, monitored, and auto-expiring. Prohibited practices cannot be waived. | Exception record and expiry control. |
| **LF-16 Retirement** | Define conditions and a process for safe suspension, data disposition, dependency shutdown, user transition, and record retention. | Retirement criteria and tested decommission plan. |

## Phase 3 — Exercise before reliance

Use synthetic or safely minimized cases to exercise:

- unsupported evidence;
- conflicting sources;
- a person seeking correction or appeal;
- reviewer overload or absence;
- prompt injection or hostile input;
- tool request outside authority;
- vendor or model substitution;
- rollback and emergency stop;
- an incident with affected-person repair; and
- a change that requires re-review.

Record what failed and retest the control. A tabletop that produces no findings is likely too gentle.

## Phase 4 — Pilot in shadow mode

Compare AI-assisted outputs with the baseline without operational reliance. Measure quality, burden, disagreement, uncertainty, abstention, accessibility, and reviewer behavior. Do not let shadow outputs quietly influence live decisions.

Use the [pilot plan](PILOT_PLAN.md) and [pilot charter](../templates/PILOT_CHARTER.md).

## Phase 5 — Limited operation

Move to limited live use only after the relevant gates pass. Bound population, duration, authority, data, autonomy, and action. Review metrics frequently enough to detect harm before exposure becomes difficult to repair.

## Phase 6 — Operate, change, and retire

- review controls on schedule and after threshold breaches;
- track appeals, overrides, incidents, near misses, and repeat failures;
- re-run affected gates after material change;
- publish public-safe transparency summaries; and
- retire when benefit is not demonstrated or serious risk cannot be controlled.

## Definition of ready

A consequential workflow is not ready merely because a model performs well on average. It is ready only when:

- authority and purpose are bounded;
- the risk tier and owners are recorded;
- material hazards map to tested controls;
- reviewers can actually challenge and stop;
- affected people can seek correction or appeal where required;
- rollback, fallback, incident, and repair paths work;
- thresholds can pause operation; and
- public claims match the retained evidence.

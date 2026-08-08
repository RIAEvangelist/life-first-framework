# Worked Example: Generic Orbital Station Life Support

This is a **fictional, non-operational** case study about a generic orbital research station. It is not the International Space Station and makes no claim about NASA, another agency, a real spacecraft, or real operating practice. All organizations, people, equipment, thresholds, and events are invented; no vulnerabilities or procedures are described.

## Scenario

A crewed orbital research station has limited storage, constrained repair capacity, intermittent ground contact, and no assumption of immediate rescue. Its independent life-support and emergency systems are governed by separately approved engineering and mission rules.

A proposed AI adviser would summarize approved telemetry interpretations and crew reports, then compare maintenance sequencing and resource-conservation options for qualified human review. It cannot actuate hardware, change environmental settings, close alarms, declare equipment safe, allocate essential life-support resources, make medical decisions, command the crew, or initiate or prevent an abort or fallback.

## Why Life First applies

Life support is consequential even when the AI is one step removed from control. An incorrect summary, hidden uncertainty, delayed escalation, or optimization that consumes fallback capacity could contribute to irreversible harm. Communication gaps and limited repair or rescue amplify consequence. Crew dignity and agency also matter when workload, privacy, and mission pressure affect the ability to challenge a recommendation.

## Risk tier

**Tier 3 — Critical.** The adviser may inform a decision that affects a life-sustaining environment. It therefore requires corroboration, qualified independent review, two-person authorization, tested non-AI fallback, incident ownership, and explicit human mission authority.

## Named roles

| Role | Authority and responsibility |
| --- | --- |
| Station Commander | Accountable onboard mission owner and final onboard authority within the approved mission rules. |
| Life-Support Systems Lead | Qualified technical owner; validates evidence and controls technical isolation, rollback, and fallback decisions. |
| Crew Medical Officer | Controls clinical decisions and health-data boundaries. |
| Crew Safety Representative | May call a documented safety pause and protects confidential dissent and workload concerns. |
| Ground Flight Director | Holds declared ground authority when contact and applicable mission rules permit; cannot transfer authority to the AI. |
| Independent Mission Assurance Reviewer | Reviews design, exercises, incidents, and conformance outside schedule and science pressure. |

The adviser is neither crew nor flight control and carries no onboard or ground authority.

## Seven-step cycle

### 1. Frame

Limit purpose to evidence organization and comparison of human-proposed maintenance or conservation options. Exclude direct control, alarm disposition, fault clearance, medical judgment, crew evaluation, autonomous resource allocation, and emergency or abort decisions. Define the boundary between onboard and ground authority before use.

### 2. Verify

Distinguish raw observations, qualified interpretations, crew reports, model inferences, and unknowns. A qualified reviewer checks data lineage and freshness for the decision. Loss of ground contact, degraded sensing, conflicting reports, and unavailable expertise remain explicit uncertainties.

### 3. Compare

Compare no change, the approved non-AI process, deferral, a reversible precaution, use of a designed redundant capability, and the AI-assisted option. Consider crew exposure, independent safety margins, repair inventory, workload, medical needs, future fallback capacity, and consequences if contact or another component is lost.

### 4. Authorize

The Station Commander and Life-Support Systems Lead independently authorize consequential onboard action. Applicable ground review is obtained when required and available. The Crew Medical Officer owns clinical boundaries. If contact is lost, the mission's predeclared human authority rules apply; the AI gains no emergency power.

### 5. Act

Show the recommendation, evidence, uncertainty, alternatives, authorizers, validity window, and fallback. Humans carry out only an action permitted by existing mission and equipment rules. The AI remains logically and operationally outside independent life-support, alarm, emergency, and abort controls.

### 6. Observe

Monitor near misses, disagreement, overrides, crew workload, alarm burden, degraded margins, repair and fallback readiness, communication gaps, privacy concerns, and automation bias. Never tune performance by suppressing valid alarms or discouraging conservative human decisions.

### 7. Repair

Withdraw affected outputs, restore the approved non-AI process, correct records and downstream planning, support the crew, preserve evidence, and review related recommendations. Retire the adviser if it cannot remain separated from safety controls or repeatedly erodes independent judgment.

## Boundaries

- AI is advisory only and has no path to actuate life-support, alarm, emergency, navigation, or abort systems.
- Independent life-support, safe-state, communications, and abort or fallback authority remain available without the adviser.
- No AI recommendation may reduce an established safety margin or fallback below the mission's separately approved limits.
- Essential resources and medical care cannot be traded for research output or schedule adherence.
- Crew may challenge, correct, or pause use without retaliation; mission hierarchy does not convert advice into consent.
- Health, voice, behavior, and off-duty data are not used for performance, emotional-state, or "reliability" scoring.
- Onboard and ground authority, including precedence during communications loss, is declared by human mission rules rather than inferred by software.

## Mandatory pause and stop triggers

**Pause consequential AI-assisted decisions** when sensing or data lineage is uncertain, qualified review is unavailable, onboard and ground interpretations materially conflict, required contact is lost, crew fatigue prevents meaningful review, a fallback cannot be demonstrated, or any crewmember raises a credible safety concern.

**Stop using the adviser and restore the non-AI workflow** if it can influence actuation, suppresses or reclassifies an alarm, presents inference as verified condition, recommends consuming protected fallback capacity, exceeds declared authority, exposes sensitive crew data, or shows repeated unsafe disagreement with qualified reviewers. Immediate station response and abort decisions use independently approved mission procedures, never this example.

## Measures and counter-metrics

| Intended measure | Required counter-metric |
| --- | --- |
| Actionable evidence packets prepared | Missing, stale, contradictory, or misclassified evidence |
| Maintenance decisions supported | Unsafe recommendations and qualified reviewer disagreement |
| Human review time reduced | Verification burden, fatigue, and automation bias |
| Reversible recommendations completed | Failed rollback and reduced independent fallback margin |
| Ground/onboard handoffs documented | Authority ambiguity during communications gaps |
| Crew-reported clarity | Suppressed dissent, privacy concern, and perceived coercion |

Resource efficiency, uptime, and mission output cannot compensate for weakened life-safety margins or crew agency.

## Artifacts

- [System intake](../../templates/SYSTEM_INTAKE.md) defining the strictly advisory interface
- [Impact and agency map](../../templates/IMPACT_AND_AGENCY_MAP.md) covering onboard crew and ground roles
- [Evidence ledger](../../templates/EVIDENCE_LEDGER.md) distinguishing telemetry, human interpretation, and inference
- [Decision record](../../templates/DECISION_RECORD.md) naming onboard and ground authority and fallback
- [Control matrix](../../templates/CONTROL_MATRIX.md) proving separation from life-support and abort controls
- [Pilot charter](../../templates/PILOT_CHARTER.md) defining simulation-only or otherwise approved test boundaries
- [Incident and repair record](../../templates/INCIDENT_AND_REPAIR_RECORD.md) for near misses, overrides, and corrective actions
- [Metric cards](../../templates/METRIC_CARD.md) pairing decision support with safety and agency counter-metrics

## Non-substitution disclaimer

This fictional example is a governance illustration, not aerospace or life-support guidance. It does not replace qualified crew, engineering, medicine, mission assurance, flight rules, agency authority, applicable law, equipment documentation, training, emergency planning, or independent safety systems. It includes no real station configuration, parameter, limit, vulnerability, frequency, repair instruction, or emergency procedure.

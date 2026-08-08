# Worked Example: Antarctic Research Station

This is a **fictional, non-operational** case study. The station, people, equipment, thresholds, and events are invented. Nothing here describes a real facility or provides emergency, communications, maintenance, or life-support instructions.

## Scenario

A small Antarctic research station is cut off from routine transport for part of a winter season. External communications are intermittent, specialist repair support may be delayed, and rescue cannot be assumed. Food, power, heat, medical supplies, spare parts, and crew attention are finite.

The station is considering an AI adviser that combines human-entered logs with already-approved station data to suggest maintenance priorities and resource-conservation options. It may explain tradeoffs and flag uncertainty. It cannot operate equipment, ration necessities, change environmental controls, assign work, diagnose illness, discipline a crewmember, or declare an emergency.

## Why Life First applies

An apparently reasonable recommendation could still contribute to exposure, equipment damage, delayed care, exhaustion, conflict, or the loss of a safe fallback. Remote communications and limited rescue make errors harder to correct. Resource decisions can also distribute risk unfairly or pressure a person to accept danger for the mission. Life, dignity, crew agency, and a viable non-AI fallback therefore take priority over schedule, research output, and resource efficiency.

## Risk tier

**Tier 3 — Critical.** Serious harm could be time-sensitive and difficult to repair. AI may advise, but qualified people retain decision and stop authority. Two-person authorization and an available fallback are required before any consequential recommendation is acted on.

## Named roles

| Role | Authority and responsibility |
| --- | --- |
| Station Commander | Accountable mission owner; may suspend station activities and activate the station's independently approved safety response. |
| Safety and Systems Lead | Checks technical assumptions and owns equipment isolation, rollback, and fallback decisions. |
| Medical Officer | Protects medical confidentiality and decides all clinical matters without AI substitution. |
| Crew Representative | Brings crew concerns, fatigue, accessibility, cultural needs, and dissent into review without retaliation. |
| Remote Operations Liaison | Records advice received from off-site specialists and clearly marks communication gaps or stale guidance. |
| Independent Review Lead | Reviews the pilot, incidents, and conformance evidence; cannot be overruled on a documented safety pause by schedule pressure. |

The adviser is not a role, authorizer, crewmember, or source of mission authority.

## Seven-step cycle

### 1. Frame

Limit the purpose to ranking candidate inspections and presenting resource tradeoffs for human discussion. Exclude actuation, medical decisions, personnel evaluation, individual rationing, emergency command, and new surveillance. Record that station safety and crew welfare outrank research continuity.

### 2. Verify

For each recommendation, separate observed station data, human reports, inferred conditions, and unknowns. A qualified crewmember checks that inputs are current enough for the decision. Missing communications, unavailable specialists, and uncertain sensor state are treated as limitations, not silently filled with model estimates.

### 3. Compare

Compare at least: no change, the documented non-AI schedule, a reversible precaution, deferral until expertise is available, and the proposed AI-assisted option. Consider effects on heat, shelter, medical readiness, rest, privacy, workload, spare capacity, and later repair—not only nominal resource savings.

### 4. Authorize

The Station Commander and Safety and Systems Lead must independently approve a consequential action. The Medical Officer controls any health-related boundary. A crewmember may request a safety pause or confidential review. When communication is unavailable, only authority already delegated in the approved mission plan applies; the AI cannot manufacture or expand authority.

### 5. Act

Display the recommendation as advisory, with sources, age, uncertainty, alternatives, authorizers, and an explicit rollback or fallback. Use bounded, reversible changes where safe. Preserve the independently approved manual process and do not make continued access to essentials conditional on accepting the recommendation.

### 6. Observe

Monitor safety margins, near misses, manual overrides, crew disagreement, fatigue, unequal burden, resource use, fallback readiness, and whether the adviser increases work or false confidence. Do not add undeclared monitoring of private conversations, health information, or off-duty behavior.

### 7. Repair

Contain harm, withdraw suspect recommendations, return to the approved fallback, correct records and downstream plans, support affected crew, and review similar decisions. Retire the adviser if material risk cannot be controlled or if it repeatedly obscures uncertainty or weakens crew agency.

## Boundaries

- AI output is advisory and has no authority to operate equipment or command people.
- Independent life-safety controls and the documented non-AI operating process remain available and are tested outside this example.
- The mission cannot trade an individual's essential heat, shelter, food, medical care, rest, or ability to raise a concern for research output.
- Medical information is not reused for staffing, discipline, or generalized optimization.
- No hidden surveillance, emotion inference, individual "resilience" scoring, or retaliatory use of dissent is allowed.
- No change may silently expand the approved purpose, data, retention, recipients, or model.
- Remote advice is evidence to evaluate, not an automatic order; onboard delegated authority remains explicit.

## Mandatory pause and stop triggers

**Pause consequential AI-assisted action** when required human review is unavailable, material inputs are stale or contradictory, communications limitations prevent a needed specialist check, crew fatigue prevents meaningful review, a fallback cannot be demonstrated, or a crewmember raises a credible safety concern.

**Stop using the adviser and return to the approved non-AI fallback** when it attempts or appears able to actuate equipment, recommends withholding an essential need, conceals uncertainty, exceeds its scope, produces repeated dangerous suggestions, creates coercive crew pressure, or cannot be cleanly separated from independent safety controls. An immediate life-safety response follows the station's separately approved procedures, not this case study.

## Measures and counter-metrics

| Intended measure | Required counter-metric |
| --- | --- |
| Useful maintenance issues identified for human review | False alarms, missed issues, and reviewer disagreement |
| Avoided unplanned resource loss | Changes in safety margin and fallback capacity |
| Time to assemble evidence for a decision | Added verification burden and decision delay |
| Percentage of recommendations with current sources | Unknown, stale, or unavailable inputs |
| Successful reversible rollbacks in exercises | Failures to restore the non-AI fallback |
| Crew-reported usefulness | Fatigue, perceived coercion, unequal workload, and unreported concerns |

No efficiency target may reward shrinking essential reserves, bypassing review, suppressing dissent, or deferring needed care.

## Artifacts

- [System intake](../../templates/SYSTEM_INTAKE.md) defining advisory scope and exclusions
- [Impact and agency map](../../templates/IMPACT_AND_AGENCY_MAP.md) covering crew, remote support, and future relief teams
- [Evidence ledger](../../templates/EVIDENCE_LEDGER.md) separating observations, reports, inferences, and unknowns
- [Decision record](../../templates/DECISION_RECORD.md) naming both authorizers and the fallback
- [Control matrix](../../templates/CONTROL_MATRIX.md) showing separation from life-safety controls
- [Incident and repair record](../../templates/INCIDENT_AND_REPAIR_RECORD.md) for near misses, harms, and corrective action
- [Appeal and correction record](../../templates/APPEAL_AND_CORRECTION_RECORD.md) for crew concerns and review outcomes
- [Metric cards](../../templates/METRIC_CARD.md) pairing benefits with safety and agency counter-metrics

## Non-substitution disclaimer

This example is an ethics and governance illustration only. It does not replace polar-operations expertise, engineering analysis, medical judgment, occupational safety programs, emergency plans, applicable law, mission rules, equipment documentation, or trained human command. It supplies no real operating limits, rescue plan, frequency, route, repair sequence, or emergency procedure.

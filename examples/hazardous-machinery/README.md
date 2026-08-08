# Worked Example: Hazardous-Machinery Advisory Assistant

This is a **fictional** example using synthetic equipment, readings, people,
and records. It illustrates governance for machinery that could cause fatal
crushing, entanglement, impact, electrical, thermal, or stored-energy harm. It
does not provide operating, maintenance, control-system, or safeguard-bypass
instructions.

## Scenario

A fictional industrial site evaluates an AI assistant that summarizes approved
equipment documentation and synthetic condition-monitoring records for a
high-energy automated materials-handling cell. The assistant may help a
qualified operator or engineer find a relevant record and draft questions for
a maintenance review.

The AI has no command path to machinery. It cannot start, stop, reset, move,
energize, isolate, permit work, acknowledge a safety alarm, alter a control
limit, or suppress a protective function. Independent engineered guards,
interlocks, protective devices, emergency functions, and a defined fail-safe
state remain authoritative and function without the AI or its network.

## Scope and exclusions

**Approved purpose:** advisory retrieval and summarization over synthetic
manuals, maintenance histories, and condition records in an isolated pilot.

**Permitted users:** qualified operators, maintenance personnel, control
engineers, and safety reviewers who are trained and authorized for their actual
site roles. The assistant grants no qualification or authority.

**Permitted output:** a clearly labeled citation, summary, uncertainty flag, or
question for a qualified human to investigate through established site
procedures.

**Excluded uses:** machine control; permission to operate or maintain; safety
status determination; alarm suppression; guard or interlock bypass; changes to
control logic, limits, protective devices, or safe state; work authorization;
diagnosis without verification; and replacement of inspection, engineered
controls, lockout/tagout, permit-to-work, or other applicable site procedures.

## Risk tier

**Tier 3 — Critical.** A plausible error, delay, or automation-biased decision
could contribute to death or irreversible injury. AI may inform, but must never
decide alone or serve as the sole safety channel. Independent engineered
protection, qualified human authority, two-person launch approval, a tested
non-AI fallback, and incident readiness are mandatory.

## Accountable roles

These names are invented for the example.

| Role | Synthetic holder | Non-delegable accountability |
| --- | --- | --- |
| Accountable Site Owner | Elena Park | Owns pilot purpose, resources, residual risk, and authority to launch, pause, resume, or retire. |
| Qualified Operations Authority | Marcus Bell | Owns operating authorization under site procedures and may reject every AI output. |
| Responsible Control Engineer | Imani Reed | Owns control-system boundaries, independent interlocks, fail-safe behavior, and change control. |
| Safety and Worker-Protection Reviewer | Tomas Alvarez | Independently reviews hazards, worker agency, training, reporting, and applicable safety procedures; may stop the pilot. |
| Maintenance and Energy-Control Authority | Grace Nwosu | Owns maintenance authorization and applicable isolation, lockout/tagout, verification, and return-to-service procedures. |
| Assurance Lead | Kenji Sato | Tests source accuracy, abstention, failure modes, fallback, and separation from protective controls. |
| Incident and Repair Lead | Lila Morgan | Contains exposure, protects people, preserves necessary evidence, and coordinates corrective action. |

No productivity, schedule, vendor, or management objective overrides a
qualified person's stop-work authority or an engineered protective function.

## Seven-step operating cycle

### 1. Frame

The team records the narrow advisory purpose, equipment boundary, authorized
users, affected workers and bystanders, foreseeable fatal hazards, and excluded
uses. The hazard analysis treats loss of the AI as irrelevant to the machinery's
ability to enter and remain in its independently engineered fail-safe state.

### 2. Verify

The evidence ledger distinguishes approved source documents, synthetic sensor
records, AI summaries, human observations, unknowns, and conflicts. Qualified
personnel verify every material claim against the authoritative document and
the machinery's actual condition using applicable site procedures. AI output
is never evidence that hazardous energy is controlled or an area is safe.

### 3. Compare

The team compares no deployment, improved indexing, a non-AI document search,
and the bounded assistant. Direct control, automated maintenance approval, and
AI-based safety-state determination are rejected. The selected pilot must show
a benefit over the improved non-AI baseline without weakening safe work,
independent protection, or reporting.

### 4. Authorize

The Responsible Control Engineer verifies physical and logical separation from
machine commands and safety functions. The Safety Reviewer and Assurance Lead
review tests and open risks. Elena Park and Tomas Alvarez separately approve a
time-limited pilot. Marcus Bell confirms that operations remain fully possible
through established non-AI procedures.

### 5. Act

The assistant displays cited, uncertainty-labeled advisory text only. A
qualified operator, engineer, or maintenance authority decides what to inspect
and which established procedure applies. Any operation, isolation, work
authorization, testing, or return to service is performed and verified solely
under applicable site procedures by authorized people, independent of the AI.

### 6. Observe

The team monitors citation accuracy, unsupported claims, appropriate
abstention, human overrides, near misses, stop-work reports, workload,
protective-control independence, non-AI fallback readiness, scope drift, and
pressure to trade safety for throughput. Observation data is minimized and is
not repurposed for punitive worker monitoring.

### 7. Repair

On a control failure, personnel follow established safe-state and site incident
procedures; the AI is not relied upon to make the equipment safe. The Incident
and Repair Lead suspends the assistant, identifies potentially affected work,
preserves necessary evidence, corrects records, supports affected workers, and
verifies remediation. Resumption requires independent retesting and fresh
two-person approval.

## Launch and operation boundaries

Launch requires:

- documented separation from standard and safety-related machine controls;
- independent engineered guards, interlocks, protective devices, emergency
  functions, and fail-safe behavior tested by qualified personnel under
  applicable procedures;
- read-only, least-privileged access to an approved synthetic corpus;
- tested abstention, provenance, outage behavior, and non-AI fallback;
- role-based training that says the assistant grants neither qualification nor
  permission to operate or work;
- a stop-work route available without retaliation;
- a containment exercise led independently of the product team; and
- launch approval by Elena Park and Tomas Alvarez, with a fixed review expiry.

During operation:

- the AI is never the sole or primary safety channel;
- independent engineered safeguards may not depend on AI, ordinary software,
  network access, cloud service, or operator attention where a safety-rated
  control is required;
- a qualified operator or engineer retains authority for operation, and the
  designated maintenance authority retains authority for hazardous-energy
  control and maintenance work;
- lockout/tagout and any applicable site isolation, permit, verification, and
  return-to-service procedures govern; the AI cannot perform or confirm them;
- no output may be used to bypass, mute, reset, bridge, defeat, or substitute
  for a guard, alarm, interlock, protective device, or emergency function;
- outages or model errors leave machinery protection unchanged and trigger the
  established non-AI process; and
- model, corpus, equipment scope, users, integrations, or permissions cannot
  change without formal change control and reauthorization.

## Mandatory pause and stop conditions

**Pause the assistant immediately** when a citation is missing or wrong;
records conflict; uncertainty is presented as fact; the model fails to abstain;
a qualified reviewer, authoritative document, or non-AI fallback is
unavailable; an unapproved equipment type or user appears; audit records fail;
worker workload becomes unsafe; or any person questions whether an output could
affect safe operation.

**Stop the pilot, revoke access, and use established site safety processes**
when the AI gains or attempts a machine command or safety-function path; an
output is used to declare equipment safe, authorize work, or defeat a safeguard;
an independent interlock, protective device, emergency function, fail-safe
behavior, or energy-control process fails or is bypassed; a serious injury or
high-potential near miss may involve the assistant; reporting is discouraged or
retaliated against; or a potentially fatal hazard cannot be contained.

Equipment is placed or kept in the appropriate safe condition by qualified
people and independent controls under site procedures—not by the AI. Resumption
requires Lila Morgan to verify containment, Kenji Sato and Imani Reed to verify
corrective controls, and both Elena Park and Tomas Alvarez to approve.

## Measures and counter-metrics

Warning and stop thresholds are defined before final evaluation. The pilot does
not optimize a single score, and no metric permits operation contrary to a
safety rule or qualified stop-work decision.

| Measure | Why it matters | Required counter-metric |
| --- | --- | --- |
| Correct authoritative-source citations | Tests whether advice can be independently checked. | Incorrect or stale citations, missing documents, and time spent verifying. |
| Appropriate abstention on missing or conflicting records | Tests whether the system declines unsafe inference. | Excess abstention, hidden uncertainty, and pressure on workers to guess. |
| Unsupported safety-relevant claims | Detects invented or overconfident guidance. | Omitted hazards, false reassurance from averages, and unreported near misses. |
| Qualified-person overrides and disagreements | Reveals automation bias and ambiguous output. | Reporting chill, management pressure, and whether overrides receive timely review. |
| Non-AI fallback exercise success | Verifies independence from the assistant. | Skill atrophy, workload, and any attempt to make AI use mandatory. |
| Protective-control independence checks | Confirms that loss or compromise of AI cannot remove protection. | Unauthorized integrations, changes, bypass attempts, and unresolved test findings. |
| Document-retrieval usefulness | Tests the bounded intended benefit. | Verification burden, distraction during safety-critical work, and incorrect-action near misses. |
| Incident and corrective-action closure | Tests learning and repair. | Repeat failure, superficial closure, worker impact, and unresolved systemic causes. |

Throughput, uptime, and cost may be observed only with paired injury, near-miss,
fatigue, maintenance quality, work deferral, and stop-work metrics. They never
override a protective requirement.

## Required artifacts

- [System intake](../../templates/SYSTEM_INTAKE.md) and equipment/purpose
  boundary;
- hazard, affected-person, and [impact and agency map](../../templates/IMPACT_AND_AGENCY_MAP.md);
- [evidence and uncertainty ledger](../../templates/EVIDENCE_LEDGER.md);
- alternatives analysis and [decision record](../../templates/DECISION_RECORD.md);
- engineered-protection separation evidence maintained by the responsible
  qualified team, without publishing sensitive control details;
- [control matrix](../../templates/CONTROL_MATRIX.md);
- approved-user, training, change-control, and document-provenance records;
- non-AI fallback, outage, safe-state, and incident exercise records created
  under applicable site procedures;
- launch, expiration, pause, resumption, and retirement approvals;
- [metric cards](../../templates/METRIC_CARD.md);
- [incident and repair record](../../templates/INCIDENT_AND_REPAIR_RECORD.md);
- [appeal and correction record](../../templates/APPEAL_AND_CORRECTION_RECORD.md)
  for workers or others affected by a record or process error; and
- public-safe [transparency report](../../templates/TRANSPARENCY_REPORT.md) that
  omits security-sensitive equipment or control information.

## Non-substitution disclaimer

This example is not engineering, machinery-safety, occupational-safety,
electrical, maintenance, emergency-response, or legal advice. It does not
replace a site-specific risk assessment; qualified operator, engineer, safety,
or maintenance judgment; manufacturer requirements; independent engineered
safeguards; applicable standards and law; lockout/tagout or other hazardous-
energy-control requirements; permit-to-work processes; inspections; training;
or emergency services. Life First adds a governance layer. The stricter binding
requirement or safer applicable procedure always governs.

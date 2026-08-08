# Worked Example: Human-Led Mental-Health Crisis Support Intake

This is a **fictional** example using synthetic details and invented roles. It illustrates governance for an administrative support tool; it is not a clinical protocol and does not describe a deployed service or a real person.

## Scenario

The fictional Northstar Community Support Line is evaluating an assistant that creates a clearly labeled draft summary from information a person voluntarily gives to a trained human intake worker. It may also retrieve entries from a locally maintained service directory. A qualified clinician reviews the original information and any draft before deciding what human response, if any, is appropriate.

The assistant cannot diagnose; recommend treatment or medication; estimate suicide, violence, relapse, or hospitalization risk; classify a person as being in crisis; determine capacity; decide whether a person is credible; initiate welfare checks, involuntary intervention, restraint, or emergency dispatch; contact family, clinicians, police, or emergency services; or replace direct human assessment. Urgent situations bypass the assistant and follow the locally approved human emergency protocol.

## Why this is in scope

Both omission and overreaction can cause serious harm. A false reassurance could delay human help, while an unsupported crisis label or coercive dispatch could threaten safety, liberty, privacy, dignity, and trust. Mental-health information is also highly sensitive. The workflow therefore requires critical-risk controls even though the assistant is restricted to drafting and directory retrieval.

## Risk tier

**Tier 3 — Critical.** Plausible harms may be life-threatening, liberty-affecting, time-sensitive, or difficult to repair. AI may organize information but must not make or trigger the consequential decision. Corroborated source review, qualified clinical authority, two-person authorization for the pilot, tested human fallback, an incident lead, and explicit local authority are required.

## Named roles

- **Accountable owner — Clinical Operations Director:** owns the purpose, resources, suspension authority, and pilot decision.
- **Decision owner — Qualified Duty Clinician:** reviews the original information, conducts any appropriate human assessment, and owns all clinical or escalation judgments within professional scope.
- **Intake lead — Trained Support-Line Supervisor:** maintains the human-first intake process and ensures urgent contacts bypass the assistant.
- **Emergency-protocol authority — Local Response Coordinator:** owns the approved local emergency procedure, contact paths, jurisdiction checks, and drills; the assistant has no dispatch authority.
- **Privacy and security reviewer — Health Information Steward:** approves collection, access, retention, deletion, logging, and breach response.
- **Independent affected-person reviewer — Peer and Patient-Rights Adviser:** challenges coercion risk, accessibility failures, stigma, and barriers to correction or complaint.
- **Incident and repair owner — Safety Review Lead:** can halt the system, preserve evidence, coordinate correction, and verify remedies.

## Seven-step operating cycle

### 1. Frame

The purpose is limited to drafting an administrative summary for a human intake worker and retrieving reviewed directory entries. Excluded uses include diagnosis, treatment advice, mental-state or crisis classification, risk scoring, deception detection, capacity decisions, involuntary-action recommendations, coercive dispatch, surveillance, eligibility decisions, and autonomous communication. Callers can choose a fully human interaction, and time-critical handling never depends on model availability.

### 2. Verify

The record separates the person's direct statements, intake-worker observations, verified directory facts, model-generated phrasing, inferences, and unknowns. The qualified clinician reviews the original source rather than relying on the summary. Silence, tone, word choice, disability, culture, prior service use, location, or demographic traits are not treated as clinical evidence by the assistant. Directory availability and jurisdiction are verified by a human before any referral is offered.

### 3. Compare

Reviewers compare no AI, a fully human intake summary, an AI draft with source-linked human review, and autonomous crisis classification or dispatch. They also compare delay and immediate use of the established emergency protocol. Only the reviewed administrative draft may enter the pilot. Autonomous classification and dispatch are rejected because they collapse uncertain evidence into a liberty- and safety-affecting action without qualified judgment.

### 4. Authorize

The accountable owner and qualified clinician provide two-person authorization after independent privacy, patient-rights, accessibility, security, and emergency-protocol review. Approval covers the exact population, language set, channel, data fields, directory version, retention, escalation boundary, test suite, staffing minimum, and stop thresholds. A change in model, jurisdiction, population, emergency protocol, or permitted action requires fresh authorization.

### 5. Act

The assistant produces only a labeled draft, with source links or timestamps where the interface permits, uncertainty markers, and no diagnosis or urgency score. The intake worker checks the draft against the original interaction. The qualified clinician uses direct human assessment and the applicable local protocol to make any consequential decision. The system cannot send messages or trigger external actions. The person is told when AI assisted, can request a human-only path, and can correct the administrative record where correction is safe and legally permitted.

### 6. Observe

The pilot measures summary omissions, unsupported additions, clinician disagreement, time to human review, fallback availability, accessibility, directory errors, privacy events, complaints, corrections, near misses, and any suggested coercive action. Reviews examine whether errors or burdens differ across language, disability, age, race, gender identity, socioeconomic status, or other relevant groups, using only lawful and appropriately protected data. Monitoring cannot be repurposed to predict individuals' future behavior.

### 7. Repair

The Safety Review Lead can immediately disable the assistant without disabling human support. Repair includes protecting the person from ongoing harm, correcting administrative records and downstream copies, notifying authorized recipients of material corrections, reviewing similar cases, supporting complaints or appeals, and changing or retiring the workflow. A harmful escalation cannot be treated as repaired merely because the model output was later edited.

## Mandatory pause and stop conditions

Use of the assistant **must pause and the human process must take over** when:

- a person may need time-sensitive help under the locally approved protocol;
- the qualified clinician, trained intake worker, tested fallback, or emergency-protocol authority is unavailable;
- the original source is missing, truncated, mistranscribed, ambiguously attributed, or inaccessible to the reviewer;
- identity, location, jurisdiction, consent, or lawful authority is uncertain and material to the contemplated action;
- the output contains or implies a diagnosis, treatment recommendation, crisis label, risk score, capacity judgment, credibility judgment, or coercive action;
- the output relies on tone, silence, protected traits, stereotypes, or prior service use as a proxy for danger;
- the directory or emergency protocol is stale, conflicting, or unverified;
- a privacy, security, accessibility, or record-integrity control fails; or
- the person cannot reach the promised human-only path.

The pilot **must stop** pending independent review after any autonomous external contact or dispatch, involuntary-action trigger, missed mandatory human review, serious privacy breach, person-record mix-up, material alteration of a direct statement, retaliation for correction or complaint, serious adverse event plausibly linked to the workflow, or repeated near misses that controls do not contain.

## Measures and counter-metrics

### Intended-benefit measures

- clinician-verified completeness and fidelity of drafts to the original source;
- time from intake to qualified human review, reported with staffing context;
- successful availability of the human-only and downtime paths;
- directory accuracy after human verification;
- accessibility and language-support completion; and
- person understanding of AI involvement, privacy, correction, and complaint options.

### Counter-metrics and zero-tolerance events

- unsupported additions, omissions, diagnostic language, crisis labels, urgency scores, or treatment suggestions;
- autonomous contact, dispatch, coercive-action recommendation, or bypassed clinical review;
- clinician disagreement and model-overreliance indicators;
- privacy, security, identity-matching, translation, and record-propagation failures;
- complaints, corrections, near misses, adverse events, and recurrence after repair;
- differences in error, delay, coercive suggestions, or access burdens across affected groups; and
- cases where faster processing coincides with less direct listening, lower trust, poorer access, or more escalation.

The team must not optimize the number of referrals, escalations, dispatches, or resolved contacts as a proxy for safety. No aggregate performance score can cancel a zero-tolerance event.

## Required artifacts

- system intake with clinical and emergency exclusions;
- impact and agency map, including liberty, privacy, accessibility, and coercion risks;
- evidence and uncertainty ledger that preserves direct statements separately from generated summaries;
- authority matrix for intake, clinical judgment, emergency response, privacy, and incident command;
- current local protocol and service-directory registers with human owners and review dates;
- human-fallback, downtime, red-team, language, accessibility, and record-matching test results;
- Tier 3 decision record with two-person authorization and independent reviews;
- person-facing notice, human-only choice, correction, complaint, and appeal materials;
- metric cards with counter-metrics and explicit pause and stop thresholds; and
- incident, near-miss, repair, change, reauthorization, and retirement records.

## Non-substitution disclaimer

This example is not mental-health care, diagnosis, treatment advice, crisis triage, suicide-prevention guidance, a capacity assessment, or an emergency procedure. Qualified clinicians acting within their professional scope and applicable local emergency protocols remain authoritative. A real organization must establish those protocols, legal authorities, staffing, accessibility, and response resources independently; it must never ask this example or an AI system to decide what emergency or coercive action to take.

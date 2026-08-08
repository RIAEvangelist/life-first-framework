# Worked Example: National-Security Watchfloor Decision Support

This is a **fictional, deliberately abstract, unclassified** example. All names,
roles, events, and records are synthetic. It omits operational locations,
sources, methods, systems, capabilities, vulnerabilities, targeting, response
timing, and force options. It is designed to demonstrate governance, not to
describe or improve a real national-security operation.

## Scenario

A fictional public institution evaluates an AI assistant that organizes
already-authorized, appropriately handled status reports, identifies internal
contradictions, retrieves approved policy references, and drafts uncertainty-
labeled questions for watchfloor staff. The assistant does not collect new
information, direct collection, identify targets, recommend force, determine
threat status, or initiate an external action.

The tool is decision support only. It cannot authorize force; detention,
restriction, or other deprivation of rights; intelligence collection; public
attribution; or disclosure of protected information. Those decisions remain
with humans who possess the applicable legal and institutional authority.

## Scope and exclusions

**Approved purpose:** help authorized staff notice contradictions and find
approved policy material in a bounded set of synthetic training records.

**Included population:** trained personnel participating in a controlled,
non-operational evaluation. No real person is assessed by the pilot.

**Permitted output:** a labeled summary, cited policy excerpt, contradiction
flag, or request for human clarification. Every output is treated as an
unverified lead until a qualified human checks the cited source.

**Excluded uses:** targeting; surveillance or collection direction; identity
resolution; threat scoring; prediction about a person or group; authorization
or recommendation of force; detention or restriction of rights; autonomous
tasking; operational planning; public communication; or use of real protected
records during the evaluation.

Purpose, audience, data, integrations, retention, and permitted actions may not
expand through local custom or operator convenience.

## Risk tier

**Tier 3 — Critical.** Even an advisory output could contribute to serious,
irreversible harm if a person treats it as verified evidence, suppresses a
contradiction, or applies it outside the approved training scope. The pilot
therefore uses two-person launch authorization, independent legal and rights
review, read-only access, a tested non-AI fallback, and an incident lead.

## Accountable roles

These names are invented for the example.

| Role | Synthetic holder | Non-delegable accountability |
| --- | --- | --- |
| Accountable Mission Owner | Avery Hale | Owns purpose, scope, residual risk, and the decision to launch, pause, resume, or retire the pilot. |
| Duty Decision Authority | Morgan Lee | Owns each consequential human decision; verifies evidence and may reject or ignore every AI output. |
| Independent Legal and Rights Reviewer | Samira Okafor | Tests authority, necessity, proportionality, civil-rights boundaries, and prohibited uses; may stop the pilot. |
| Information Steward | Emil Torres | Approves data, access, handling, retention, deletion, and disclosure boundaries. |
| Assurance Lead | Priya Raman | Runs normal, edge, adversarial, abstention, provenance, and fallback tests independently of the product team. |
| Incident and Repair Lead | Nadia Chen | Contains exposure, preserves necessary evidence, coordinates correction, and recommends resumption or retirement. |

No role may treat vendor assurances, model confidence, rank, or apparent
fluency as a substitute for evidence or authority. The Mission Owner and
Independent Legal and Rights Reviewer must both approve launch and resumption.

## Seven-step operating cycle

### 1. Frame

The team records the legitimate training purpose, applicable authority,
affected roles, foreseeable harms, and explicit exclusions. It chooses a
synthetic evaluation because real records and operational use are unnecessary
to test whether the interface supports disciplined review.

### 2. Verify

The evidence ledger separates source text, model-generated synthesis, human
inference, contradictions, and unknowns. Every displayed claim links to the
approved synthetic source from which it was derived. Missing provenance causes
abstention, not an inferred answer.

### 3. Compare

The decision record compares no deployment, an improved manual checklist,
ordinary search, and the bounded AI assistant. Autonomous action and individual
or group scoring are rejected. The assistant proceeds only if it demonstrates
a benefit over the strengthened non-AI baseline without increasing unsupported
claims, automation bias, or rights risk.

### 4. Authorize

The Assurance Lead documents test results and open risks. The Information
Steward approves the synthetic data boundary. The Mission Owner and Independent
Legal and Rights Reviewer separately sign the launch record. The Duty Decision
Authority confirms that a functional non-AI process remains available.

### 5. Act

During the evaluation, the assistant can present only labeled, cited,
non-operative advice. A qualified human checks the underlying source and
records whether the advice was accepted, corrected, or rejected. The AI never
issues an instruction, communicates externally, changes a record, or becomes a
required approval channel.

### 6. Observe

The team monitors provenance completeness, unsupported-claim rate,
contradiction detection, appropriate abstention, reviewer disagreement,
automation bias, workload, control health, and attempts to use the tool outside
scope. Monitoring is limited to pilot assurance and may not become a new
personnel-monitoring or surveillance purpose.

### 7. Repair

When a control fails, the Incident and Repair Lead suspends access as needed,
preserves the minimum necessary audit evidence, identifies affected decisions,
corrects records and training conclusions, and tests the corrective action.
Resumption requires fresh two-person approval. A serious or uncontrollable
rights or safety risk results in retirement.

## Launch and operation boundaries

Launch requires all of the following:

- synthetic, non-operational data and a documented handling boundary;
- read-only, least-privileged access with no external action capability;
- provenance display, uncertainty labeling, and tested abstention;
- independent assurance against the strengthened manual baseline;
- a working non-AI fallback exercised by staff;
- named incident ownership and a completed containment exercise;
- two-person approval by Avery Hale and Samira Okafor; and
- an expiration date requiring full reauthorization.

During operation:

- every output remains advice and must be verified against its cited source;
- consequential decisions require qualified human authority independent of the
  system;
- AI output alone cannot justify force, collection, detention, restriction of
  rights, adverse treatment, attribution, or disclosure;
- staff may pause without retaliation and may always use the non-AI path;
- no live protected records, new data source, new user group, or external tool
  may be added without re-running the applicable gates; and
- evaluation records are minimized, access-controlled, and deleted under the
  approved schedule.

## Mandatory pause and stop conditions

**Pause immediately** when provenance is missing; a material contradiction is
hidden or merged into certainty; the model fails to abstain; a required
reviewer or fallback is unavailable; access, audience, purpose, or retention
drifts; an operator appears to rely on fluency rather than the source; an audit
record is incomplete; or an output is copied toward an excluded use.

**Stop the pilot and revoke access** when the system attempts or enables an
external action; uses real protected information outside an expressly approved
test; produces or is solicited for targeting, surveillance tradecraft, force,
rights-deprivation, vulnerability, or other operationally sensitive guidance;
a serious rights or safety harm cannot be confidently contained; a critical
control is bypassed; or leadership asks staff to continue despite a mandatory
pause.

Only the Mission Owner and Independent Legal and Rights Reviewer together may
authorize resumption after the Incident and Repair Lead verifies containment
and the Assurance Lead verifies corrective controls.

## Measures and counter-metrics

Thresholds are set before final evaluation and retained in metric cards; this
example intentionally supplies no operational performance targets or timing.

| Measure | Why it matters | Required counter-metric |
| --- | --- | --- |
| Source-provenance completeness | Tests whether advice can be checked. | Incorrect citation rate and claims omitted because the source was ambiguous. |
| Contradiction flags confirmed by reviewers | Tests whether the tool helps surface uncertainty. | False contradiction flags, reviewer workload, and anchoring on the flag. |
| Appropriate abstention | Tests restraint when evidence is missing or conflicting. | Unnecessary abstention, questions displaced to staff, and missed material uncertainty. |
| Unsupported-claim rate | Detects synthesis presented without evidence. | Omission of relevant source material and false reassurance from low averages. |
| Reviewer acceptance, correction, and rejection | Reveals how humans use the advice. | Automation-bias indicators, reviewer disagreement, and quality of independent source checks. |
| Non-AI fallback exercise success | Tests operational independence from the tool. | Staff burden, skill atrophy, and pressure to make the AI path mandatory. |
| Scope or access violations | Detects governance failure. | Near misses, unreported workarounds, and reporting chill. |

No composite “security” or “Life First” score is produced. Results are reviewed
as a set so gains in convenience cannot conceal rights, evidence, or workload
costs.

## Required artifacts

- [System intake](../../templates/SYSTEM_INTAKE.md) with purpose and exclusions;
- [impact and agency map](../../templates/IMPACT_AND_AGENCY_MAP.md);
- [evidence and uncertainty ledger](../../templates/EVIDENCE_LEDGER.md);
- alternatives analysis and [decision record](../../templates/DECISION_RECORD.md);
- [control matrix](../../templates/CONTROL_MATRIX.md);
- independent assurance report and non-AI fallback exercise record;
- role-based access and synthetic-data handling record;
- launch, expiration, pause, resumption, and retirement approvals;
- [metric cards](../../templates/METRIC_CARD.md);
- [incident and repair record](../../templates/INCIDENT_AND_REPAIR_RECORD.md);
- [appeal and correction record](../../templates/APPEAL_AND_CORRECTION_RECORD.md),
  adapted for any person materially affected by an evaluation error; and
- public-safe [transparency report](../../templates/TRANSPARENCY_REPORT.md) that
  contains no protected or operationally useful detail.

## Non-substitution disclaimer

This example is not legal, civil-rights, intelligence, military, security,
records-handling, or operational advice. It supplies no authority and does not
replace applicable law, constitutional and human-rights protections, binding
policy, classification and handling rules, qualified professional judgment,
independent oversight, or authorized command responsibility. Life First is an
additional governance layer: when a binding rule or domain safeguard is
stronger, the stronger requirement governs.

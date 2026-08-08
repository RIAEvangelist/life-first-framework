# Threat Model

This threat model asks how a Life First workflow can fail technically, operationally, institutionally, or through misuse. It should be tailored to the actual workflow.

## Assets to protect

- life, safety, dignity, liberty, agency, and access;
- personal and protected information;
- evidence integrity and uncertainty;
- reviewer independence and authority;
- correction, appeal, and repair pathways;
- system boundaries and stop controls;
- audit records and public trust; and
- the ability to retire an unsafe practice.

## Actors

- affected people and direct users;
- operators, reviewers, maintainers, and decision owners;
- vendors, suppliers, and data providers;
- insiders with legitimate or excessive access;
- adversaries seeking manipulation, evasion, fraud, harassment, surveillance, or unauthorized action;
- institutions with incentives to hide error, expand scope, or suppress appeal; and
- automated agents or integrations acting beyond intended authority.

## Misuse and failure cases

| Case | Preventive controls | Detective controls | Response and repair |
| --- | --- | --- | --- |
| Fabrication or evidence laundering | Source labeling, corroboration, generated-content separation, abstention | Unsupported-claim sampling, source mismatch alerts, reviewer checks | Stop affected decisions, correct records/downstream effects, retest evidence controls |
| Automation bias and rubber-stamping | Reviewer training, independent judgment, workload limits, blind comparison | Override/disagreement rates, review-time distribution, quality sampling | Reduce load, redesign interface, retrain, require stronger review |
| Discriminatory exclusion or inaccessible process | Impact mapping, accessibility design, subgroup/non-user testing, human alternative | Outcome disparities, abandonment, complaints, appeal patterns | Restore access, correct outcomes, redesign and retest |
| Privacy leakage or mission creep | Data minimization, purpose binding, least privilege, retention/deletion | Access anomalies, purpose audit, deletion checks | Contain disclosure, notify as required, delete/correct, narrow scope |
| Sensitive-trait inference | Prohibited-use check, necessity/authority review, feature restrictions | Feature and output audits, complaint signals | Stop inference, remove derived data, repair affected decisions |
| Covert persuasion or dependency | Clear AI role, no deceptive identity, vulnerability safeguards, choice-preserving design | Content review, user research, dependency/complaint signals | Suspend pattern, disclose/correct, provide human support and alternatives |
| Harassment, doxxing, stalking, or surveillance | Access controls, purpose limits, safety policy, action allowlists | Abuse monitoring, unusual lookup/action patterns | Suspend access, protect affected people, preserve evidence safely, escalate lawfully |
| Agent acts beyond intent or authority | Least privilege, dry run, allowlisted tools, transaction/resource caps, step-up approval | Tool-call audit, boundary alerts, reconciliation | Emergency stop, reverse transactions, revoke credentials, correct downstream effects |
| Insider abuse or fraudulent override | Separation of duties, access review, signed decisions, conflict disclosure | Override anomaly, access audit, independent sampling | Suspend access, investigate, correct/notify, strengthen controls |
| Prompt injection or poisoned input | Input isolation, trusted-source boundaries, tool mediation, content sanitization | Adversarial tests, instruction-source alerts, tool anomaly | Contain session/data, revoke unsafe action, patch and retest |
| Compromised vendor or silent model change | Version pinning, supplier review, change notification, fallback | Output drift, checksum/version monitoring, release comparison | Roll back or suspend, notify owners, re-run affected gates |
| Emergency authority never expires | Explicit scope, expiration, owner, after-action review | Expiry alerts, exception inventory | Terminate authority, review affected actions, ratify or retire through normal process |
| Concealed incidents or retaliatory appeals | Non-retaliation, independent reporting, protected logs, public-safe summaries | Appeal/incident discrepancies, whistleblower signal, audit gaps | Protect reporter, reopen cases, correct records, governance review |

## Critical assumptions

Record assumptions that, if false, invalidate a control. Examples include reviewer availability, source integrity, network connectivity, vendor notice, rollback access, translation quality, emergency-service reach, or the ability to contact affected people.

Each critical assumption needs an owner, validation method, monitoring signal, and failure response.

## Abuse-resistant transparency

Transparency must help affected people understand and contest the system without publishing personal data, active-case detail, exact security thresholds, or instructions that enable evasion. Maintain separate internal and public evidence layers.

## Review triggers

Revisit the threat model after a material change, new incident, new abuse pattern, affected-person feedback, supplier change, meaningful population expansion, or discovery that an assumption is false.

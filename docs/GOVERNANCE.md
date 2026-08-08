# Governance

Life First separates governance of the public framework from accountability for a deployment. A well-governed repository cannot make an unsafe deployment safe, and a responsible deployment cannot grant the repository authority it does not have.

## Part I — Framework governance

### Roles

- **Founding steward:** maintains continuity, publishes releases, and is accountable for the integrity of the public provenance boundary.
- **Maintainer:** reviews proposals, checks consistency, and may merge changes within assigned authority.
- **Contributor:** proposes changes with use case, evidence, safeguard impact, and provenance.
- **Independent reviewer:** assesses safety, domain, accessibility, rights, or operational consequences without owning the proposed change.
- **Affected-person reviewer:** tests whether the change creates hidden burdens, exclusion, inaccessible process, or ineffective remedy.

### Maturity rule

Until at least three active maintainers exist, the founding steward may merge changes. A substantive change still requires a public proposal, provenance review, recorded rationale, and a reasonable comment window unless correcting an urgent safety defect.

Once three maintainers are active:

- editorial changes require one maintainer approval;
- substantive changes require two approvals;
- safeguard-impacting changes require two approvals, one independent safety or domain review, an affected-person impact note, and explicit migration guidance; and
- no proposer may be the only approver of their own substantive change.

### Decision record

Every substantive merged change SHOULD record:

- problem and affected people;
- alternatives considered;
- expected benefit and foreseeable misuse;
- safeguard impact;
- provenance and licensing;
- reviewers and conflicts;
- validation performed;
- migration or compatibility impact; and
- review or expiry date when the change is experimental.

### Conflicts and recusal

A reviewer MUST disclose a material financial, employment, authorship, operational, or personal interest that could impair independent judgment. A conflicted reviewer may provide context but SHOULD recuse from the approval count.

### Emergency changes

An urgent change MAY be merged to correct active exposure, unsafe guidance, leaked sensitive material, or a serious broken control. The maintainer MUST document the reason promptly. A temporary requirement or exception expires within 30 days unless it receives ordinary review and ratification.

### Versions and review cadence

- Editorial releases increment the patch version.
- Backward-compatible substantive additions increment the minor version.
- Incompatible requirement, tier, or conformance changes increment the major version.
- The framework SHOULD receive a documented review at least annually.
- The changelog MUST identify safeguard additions, removals, or weakening.

## Part II — Deployment accountability

### Required roles

Every Tier 1–3 workflow names people responsible for the applicable roles:

| Role | Decision right and duty |
| --- | --- |
| **Accountable system owner** | Owns legitimate purpose, resources, residual risk, and the decision to operate or stop. |
| **Safety and risk lead** | Owns hazard analysis, control mapping, thresholds, monitoring, and escalation. |
| **Domain authority** | Verifies domain validity, professional boundaries, and external obligations. |
| **Data and privacy steward** | Owns provenance, necessity, access, retention, deletion, and affected-person data rights. |
| **Security and operations lead** | Owns least privilege, supplier risk, monitoring, rollback, continuity, and emergency stop. |
| **Human review and remedy owner** | Owns reviewer competence, workload, overrides, explanations, appeals, correction, and repair. |
| **Independent approver** | Challenges evidence and residual risk; required for Tier 3 and material exceptions. |
| **Affected-person representative** | Challenges burdens, accessibility failures, non-user effects, and ineffective remedy. |

One person MAY hold multiple roles in Tier 0–1 work. For Tier 2–3, the builder or system owner MUST NOT be the sole approver. Each named person needs adequate time, competence, information, escalation access, and actual authority.

### Decision rights

- The accountable owner MAY approve operation only after required gates pass.
- Any required reviewer MAY pause the workflow for an unresolved mandatory pause condition.
- The incident lead MAY suspend live operation to contain credible serious harm.
- The remedy owner MAY correct or reverse an outcome within their authority without seeking approval from the original model or operator.
- Commercial, schedule, or reputational pressure MUST NOT override a missing critical control.

### Exceptions

An exception MUST record scope, rationale, rejected alternatives, compensating controls, affected people, owner, approver, monitoring, and expiry. Exceptions auto-expire. They MUST NOT waive a prohibited practice, conceal a material risk, or remove a person's right to report harm.

### Material changes

A new review is required when a material change affects model, prompt, tool, data, vendor, purpose, authority, action, population, interface, reviewer workflow, retention, or a protective control. Silent substitution is not allowed.

### Transparency

Internal evidence SHOULD include system and tool inventories, hazard and misuse registers, control tests, decisions, overrides, exceptions, changes, appeals, incidents, and residual-risk acceptance.

Public or affected-person information SHOULD include the purpose, actual AI role, accountable organization, intended and excluded uses, broad data practices, known limitations, human oversight, correction/appeal route, last review date, and material changes. Transparency MUST NOT expose personal data, protected records, or exploit-enabling security detail.

### Appeals and non-retaliation

Appeals MUST be accessible, tracked, and reviewed by a person with authority to correct the outcome. Affected people MUST NOT face retaliation for appeal, refusal, complaint, or safety reporting. Overturns and time to correction SHOULD inform system review.

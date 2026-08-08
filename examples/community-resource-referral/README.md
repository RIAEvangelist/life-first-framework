# Worked Example: Community Resource Referral

This is a **fictional** example using synthetic data and invented roles. It illustrates the framework; it does not describe a deployed service or establish eligibility for any real program.

## Scenario

A community organization is testing an assistant that suggests categories from a public resource directory. A trained navigator reviews every suggestion. The system cannot determine eligibility, enroll or deny anyone, contact a provider, or share personal information without the person's choice.

The workflow is Tier 2 because a missed or misleading referral can affect access to essential community resources, even though the selected action is advisory and reversible.

## Operating-cycle walkthrough

### 1. Frame

Purpose is limited to helping a navigator search a public directory. Excluded uses include eligibility, automatic enrollment, denial, risk scoring, and unauthorized provider contact.

### 2. Verify

The evidence ledger separates voluntarily supplied current-session needs from public directory facts. A category match is not treated as provider availability or eligibility.

### 3. Compare

The record compares ordinary directory search, a navigator-reviewed shortlist, and automatic provider submission. The automatic path is rejected because it removes choice and creates unnecessary privacy and eligibility risk.

### 4. Authorize

The accountable owner, domain reviewer, privacy/accessibility reviewer, and independent community reviewer approve only a bounded pilot with conditions.

### 5. Act

The system produces a labeled category shortlist. The navigator checks current provider information, and the person chooses whether to receive a link. A non-AI directory path remains available.

### 6. Observe

The pilot monitors category recall, false suggestions, navigator disagreement, human-alternative availability, complaints, accessibility, and any privacy exposure.

### 7. Repair

The workflow pauses if the human alternative is unavailable, private session content leaks into aggregate reporting, or a stop threshold is reached. The remedy owner can correct the process and review similar cases.

## Machine-readable record

See [decision-record.example.json](decision-record.example.json), which is intended to validate against [decision-record.schema.json](../../schemas/decision-record.schema.json).

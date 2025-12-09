[[#1. Requirements Analysis]]
[[#2. Risk Identification]]
[[#3. Test Design]] (tba)
[[#4. Traceability & Coverage]] (tba)
[[#5. MECE Assessment]] (tba)

### 1. Requirements Analysis

- **Diagram** system components and interactions to identify:
    - Module dependencies
    - Data and control flows
    - External interfaces and stakeholder touchpoints
- **Purpose**:  Detect untested paths,  highlight high-risk areas, and  clarify system boundaries before dynamic testing.

| REQ-ID | Description                                                                                            |
| ------ | ------------------------------------------------------------------------------------------------------ |
| REQ-01 | Login API must accept valid username and password and return a valid token.                            |
| REQ-02 | System must lock the account after repeated failed login attempts.                                     |
| REQ-03 | System must enforce password policies (expiry, minimum length, unverified accounts, etc.).             |

---
### 2. Risk Identification

- **Module-level risks (internal):** Logic failures, exceptions, edge cases,  module-specific risks.
- **Interface-level risks (connections):** API mismatches, data propagation errors.
- **Business/Stakeholder impact risks:** Customer-facing critical paths.

| RSK-ID | Description                                           | Risk Scope                        |
| ------ | ----------------------------------------------------- | --------------------------------- |
| RSK-01 | Valid login path fails (functional defect).           | Functional / End-to-End Flow      |
| RSK-02 | Invalid credentials incorrectly accepted or rejected. | Functional / Authentication Logic |
| RSK-03 | Missing or null credentials are not handled properly. | Functional / Input Validation     |
| RSK-04 | Account lockout mechanism not working or misfiring.   | Functional / Security Policy      |
| RSK-05 | Expired password incorrectly accepted.                | Functional / Security Policy      |
| RSK-06 | Unverified account bypasses verification check.       | Functional / Security Policy      |

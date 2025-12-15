[[#1. Requirements Analysis]]
[[#2. Risk Identification]]
[[#3. Test Design]]
[[#4. Traceability & Coverage]]
[[#5. MECE Assessment]]

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

---
### 3. Test Design

**Principle:** Each risk is linked to one or more functional or non-functional tests to ensure coverage.
#### 3.1 Functional Testing
-  Black-box (End-to-End)
    -  Positive scenarios
    -  Negative scenarios
    -  Edge cases
- Grey-box (Integration,  Module interactions)
    - Positive scenarios: normal flows,
    - Negative scenarios: fault injection, rollback
    - Edge cases
- White-box (Unit)
    - Positive scenarios
    - Negative scenarios: exceptions, invalid inputs
    - Edge cases: boundary conditions, nulls, off-by-one
#### 3.2 Non-Functional Testing
- **Performance:** Idempotency, throttling, eventual consistency
- **Load & Concurrency:** Race conditions, stress, scalability limits
- **Security:** Access control, injection attacks, vulnerability scanning
- **Reliability & Maintainability (optional but recommended):** Fault tolerance, monitoring, logging coverage

```gherkin
Feature: Login API requirements matrix test

	Scenario Outline: API scenario driven by test matrix
	  Given requirement "<REQ-ID>"
	  Given requirement risk "<RISK-ID>"
	  Given the "<TEST-ID>"
	  Given the test "<Scenario Name>"
	  Given the UI sends "<UI Input>"
	  Then the client sends "<Client Input>"
	  When the API Gateway forwards the "<API Input>" request 
	  And the Auth Service processes the "<Auth Service Input>"request 
	  And the DB receives "<DB Input>"
	  And the DB responds with "<DB Output>"
	  And the Auth validation result is "<Auth Service Mid>"
	  And the Token Service receives "<Token Service Input>" response
	  And the Token Service returns "<Token Service Output>" response
	  And the Auth validation result is "<Auth Service Output>"
	  Then the API response expected to be"<API Output>"
	  And the client outcome expected to be"<Client Output>"
	  And the UI receives "<UI Output>"
```


_This table serves as a single source of truth and can be vertically or column-wise separated according to test focus (E2E, integration, unit, functional, or non-functional) so each layer or type consumes only the relevant parts. Run this Scenario Outline in your Cucumber framework._

\<masterTable>

| REQ-ID | RISK-ID | TEST-ID | Scenario Name        | UI Input                 | API Input                            | Auth Service Input     | DB Input                         | DB Output                | Auth Service Mid | Token Service Input | Token Service Output | Auth Service Output | API Output                       | UI Output                               |
| ------ | ------- | ------- | -------------------- | ------------------------ | ------------------------------------ | ---------------------- | -------------------------------- | ------------------------ | ---------------- | ------------------- | -------------------- | ------------------- | -------------------------------- | --------------------------------------- |
| REQ-01 | RSK-01  | FT01    | Successful Login     | login=x&pass=y           | POST /login?login=x&pass=y           | valid creds            | user valid creds                 | user record              | creds valid      | token request       | token issued         | creds valid         | 200 OK                           | Ok                                      |
| REQ-01 | RSK-02  | FT02    | Invalid Credentials  | login=x&pass=z           | POST /login?login=x&pass=z           | invalid creds          | user creds invalid               | user invalid status      | N/A              | N/A                 | N/A                  | creds invalid       | 401 Unauthorized Invalid Creds   | Invalid username or password            |
| REQ-01 | RSK-03  | FT03    | Missing Credentials  | login=null&pass=null     | POST /login?login=null&pass=null     | invalid request        | N/A                              | N/A                      | N/A              | N/A                 | N/A                  | validation failed   | 400 Bad Request Creds Required   | Username and password required          |
| REQ-02 | RSK-04  | FT04    | User Locked          | login=xLocked&pass=y     | POST /login?login=xLocked&pass=y     | locked user creds      | locked user valid creds          | user locked status       | N/A              | N/A                 | N/A                  | user locked         | 423/403 Forbidden Account Locked | Your account is locked. Contact support |
| REQ-03 | RSK-05  | FT05    | Password Expired     | login=x&pass=oldpass     | POST /login?login=x&pass=oldpass     | expired password creds | user creds with expired password | user pass expired status | N/A              | N/A                 | N/A                  | password expired    | 403 Forbidden Reset Password     | Reset Password                          |
| REQ-03 | RSK-06  | FT06    | Account Not Verified | login=xUnverified&pass=y | POST /login?login=xUnverified&pass=y | unverified creds       | unverified user creds            | unverified status        | N/A              | N/A                 | N/A                  | unverified          | 403 Forbidden Verify Email       | Please verify your email to continue    |
\<\masterTable>

---
### **4. Traceability & Coverage**
- Map **each test to its corresponding risk and requirement**
- Track coverage for functional, integration, and non-functional areas
- Prioritize testing for:
    - Critical user journeys
    - High-risk modules
    - SLA or regulatory-driven components

| REQ \ RSK | RSK-01 | RSK-02 | RSK-03 | RSK-04 | RSK-05 | RSK-06 |
| --------- | ------ | ------ | ------ | ------ | ------ | ------ |
| REQ-01    | X      | X      | X      |        |        |        |
| REQ-02    |        |        |        | X      |        |        |
| REQ-03    |        |        |        |        | X      | X      |

| RSK \ Test | FT01 | FT02 | FT03 | FT04 | FT05 | FT06 |
| ---------- | ---- | ---- | ---- | ---- | ---- | ---- |
| RSK-01     | X    |      |      |      |      |      |
| RSK-02     |      | X    |      |      |      |      |
| RSK-03     |      |      | X    |      |      |      |
| RSK-04     |      |      |      | X    |      |      |
| RSK-05     |      |      |      |      | X    |      |
| RSK-06     |      |      |      |      |      | X    |

### 5. MECE Assessment

| Section                 | ME  | CE  | Notes                                                           |
| ----------------------- | --- | --- | --------------------------------------------------------------- |
| Requirements            | ✅   | ⚠️  | Could include logging, MFA, error messaging                     |
| Risk Identification     | ✅   | ⚠️  | Could include operational, concurrency, and cross-cutting risks |
| Test Design             | ✅   | ⚠️  | Edge-case and extreme-load tests could be added                 |
| Traceability & Coverage | ✅   | ✅   | -                                                               |
| **Overall MECE**        | ✅   | ⚠️  | Minor gaps in exhaustiveness                                    |

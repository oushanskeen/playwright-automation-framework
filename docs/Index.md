
> [!NOTE] Document Legend
>
This document contains three types of content:
>
>- #concept - Defines intent, philosophy, and mental models
>- #normative - Defines mandatory rules and guarantees
>- #procedural - Describes how the framework is applied in practice
>
Readers interested in *using* the framework should focus on #procedural  sections.
## Contents

[[#PART I — CONCEPTS]]
[[#1. Abstract TL;DR concept]]
[[#2. Motivation Why it must be built? concept]]
[[#3. Spec What must be built? normative]]
[[#4. Rationale Why this approach? concept]]
[[#5. Backwards Compatibility How does it change ? normative]]

[[#PART II — APPLYING THE FRAMEWORK]]
[[#6. Implementation How it was built ? procedural]]
[[#7. Risks/Dependencies What can go wrong? concept]]
[[#8. Scope In/Out What's in/out? normative]]
[[#9. Metrics How the success is measured ? normative]]

---

# PART I — CONCEPTS 
This part defines the **contract, preserved qualities, and governance rules**.
It specifies **what must always be true**, independent of implementation.

# 1. Abstract: TL;DR #concept

This framework is designed to preserve defined system qualities over time by enforcing traceability and invariants, rather than by enumerating or executing test cases.

# 2. Motivation: Why it must be built? #concept

### Before
- Quality is the ratio of green tests
- Quality is subjective judgments of excellence
    
### After
- Qualities are the contract
- Tests are an implementation detail
- Quality is the degree to which a system consistently preserves its explicitly defined properties under expected and specified conditions
- Quality is preserved by:
	- Clear contracts
	- Constraints
	- Invariants
	- Feedback loops
	- Enforcement mechanisms

# 3. Spec: What must be built? #normative

## Glossary

1. **Quality**: An explicitly defined, observable property of a system
2. **Preservation Rule**: A rule that prevents, detects, or surfaces violation of a quality
3. **Enforcement Point**: A lifecycle stage where preservation is enforced (design, build, deploy, runtime)

## Specification Requirements

### Required

**SR-RQ01**: Invariants (Tool Improvement Proposals as [[TIPs]]) - **REQUIRED**  
_TBD: add explanation_
**SR-RQ02**: Explicit [[ToDo Requirements Map]] - **REQUIRED**  
_TBD: add explanation_
**SR-RQ03**: Master Table - **REQUIRED**  
_TBD: add explanation_
**SR-RQ04**: Quality Model - **REQUIRED**  
_TBD: add explanation_

### Recommended

**SR-RC01**: Domain Slices - **RECOMMENDED**  
Example: [[Login Domain]]  
_TBD: add explanation_
**SR-RC02**: Traceability - **RECOMMENDED**  
_TBD: add explanation_
**SR-RC03**: Knowledge Base - **RECOMMENDED**  
_TBD: add explanation_
**SR-RC04**: File Structure Explained - **RECOMMENDED**  
_TBD: add explanation_

### Optional
 
**SR-OP01**: All Test Layers - **OPTIONAL**  
_TBD: add explanation_
**SR-OP02**: Cucumber Usage - **OPTIONAL**  
_TBD: add explanation_
**SR-OP03**: Sample Services - **OPTIONAL**  
_TBD: add explanation_

## 4. Rationale: Why this approach? #concept 

| Approach                                | How Quality Is Addressed             | Strengths                                           | Limitations                                                                                 |
| --------------------------------------- | ------------------------------------ | --------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| **Test-Centric Framework**              | Validates behavior at execution time | Familiar; easy to adopt; good for local correctness | Reactive; brittle over time; encodes implementation details; does not prevent quality drift |
| **Excellence-Based Quality Model**      | Evaluates perceived “goodness”       | Intuitive for humans; aspirational                  | Subjective; non-deterministic; not testable or enforceable                                  |
| **Best-Practice / Guideline Framework** | Encourages preferred patterns        | Low barrier; flexible                               | Non-enforceable; degrades into documentation; cannot prevent regressions                    |
| **Metric-Only Monitoring**              | Detects anomalies post-deployment    | Real-world visibility; scalable                     | Observational only; relies on human response; late detection                                |
| **One-Size-Fits-All Quality Model**     | Applies uniform constraints          | Consistency; simplicity                             | Ignores system intent;                                                                      |
|                                         |                                      |                                                     |                                                                                             |

## 5. Backwards Compatibility: How does it change ? #normative
The framework is governed by a **fixed ontology of nine Index parts**, as defined in the [[Tool Ontology Graph]] (and used here) and fully describe in [[Change Governance Model]]. These parts represent **conceptual levels**, not just document sections. Every change **must be expressed against one or more parts**, ensuring intent, guarantees, and enforcement remain aligned.
### Nine Governance Levels
1. **Abstract** - summary contract of intent
2. **Motivation** - problem framing and justification
3. **Spec** - normative requirements
4. **Rationale** - comparative reasoning
5. **Backwards Compatibility** - change constraints
6. **Implementation** - concrete realization and lifecycles
7. **Risks** - failure modes and mitigations
8. **Scope** - boundaries and exclusions
9. **Metrics** - validation and success signals
    
Changes propagate along **ontology edges**, so updating one part may require reviewing dependent parts (e.g., changing the Implementation triggers checks in Spec, Scope, Metrics, and Risks). Changes are classified as **Form-, Rule-, or Model-level** depending on their impact.
This approach prevents drift, enforces dependency awareness, and makes quality **observable, enforceable, and maintainable**.

> For full governance rules, examples, and classification guidance, see the [[Change Governance Model]]

# PART II — APPLYING THE FRAMEWORK
This part describes **how the framework is applied in practice**
using a reference implementation and lifecycle description.
## 6. Implementation: How it was built ? #procedural
_(Current reference implementation; structure may evolve)_

```code
	.
	├── cucumber.js
	├── docs
	│   ├── domains
	│   │   └── login
	│   │       ├── Login Domain.md
	│   │       └── Login Test Strategy.md
	│   ├── Index.md
	│   ├── TIPs
	│   │   ├── On Invariants
	│   │   │   ├── 0001 TIP On Invariants.md
	│   │   │   └── on invariants map.xmind
	│   │   └── TIPs.md
	│   └── ToDo Requirements Map.md
	├── package.json
	├── package-lock.json
	├── playwright.config.ts
	├── README.md
	├── src
	│   ├── domains
	│   │   └── login
	│   │       ├── moon.yml
	│   │       ├── src
	│   │       │   ├── api
	│   │       │   │   ├── LoginAPIService.ts
	│   │       │   │   └── sampleServices
	│   │       │   │       └── api
	│   │       │   │           ├── contract.json
	│   │       │   │           ├── instrumentation.js
	│   │       │   │           ├── package.json
	│   │       │   │           ├── package-lock.json
	│   │       │   │           ├── src
	│   │       │   │           │   ├── instrumentation.ts
	│   │       │   │           │   └── server.ts
	│   │       │   │           └── tsconfig.json
	│   │       │   ├── app
	│   │       │   ├── domain
	│   │       │   ├── infra
	│   │       │   └── ui
	│   │       │       ├── pom
	│   │       │       │   ├── functions
	│   │       │       │   │   ├── initPlaywrightContext.ts
	│   │       │       │   │   └── login.ts
	│   │       │       │   └── interfaces
	│   │       │       └── sampleServices
	│   │       │           └── sample-react-login-app
	│   │       │               ├── contract.json
	│   │       │               ├── eslint.config.js
	│   │       │               ├── index.html
	│   │       │               ├── package.json
	│   │       │               ├── package-lock.json
	│   │       │               ├── public
	│   │       │               │   └── vite.svg
	│   │       │               ├── README.md
	│   │       │               ├── src
	│   │       │               │   ├── App.css
	│   │       │               │   ├── App.tsx
	│   │       │               │   ├── assets
	│   │       │               │   │   └── react.svg
	│   │       │               │   ├── index.css
	│   │       │               │   ├── LoginAPIService.ts
	│   │       │               │   ├── main.tsx
	│   │       │               │   ├── OtelServer
	│   │       │               │   │   └── server.js
	│   │       │               │   └── utils
	│   │       │               │       └── telemetry
	│   │       │               │           ├── Instrumentation.ts
	│   │       │               │           └── useTraceSpan.ts
	│   │       │               ├── tsconfig.app.json
	│   │       │               ├── tsconfig.json
	│   │       │               ├── tsconfig.node.json
	│   │       │               └── vite.config.ts
	│   │       └── test
	│   │           ├── features
	│   │           │   ├── API
	│   │           │   │   └── API.unit.feature
	│   │           │   └── UI
	│   │           │       └── UI.unit.feature
	│   │           ├── moon.yml
	│   │           └── steps
	│   │               ├── API
	│   │               │   ├── API.steps.ts
	│   │               │   └── world.ts
	│   │               └── UI
	│   │                   ├── UI.steps.ts
	│   │                   └── world.ts
	│   └── utils
	│       ├── extractTestsFromMasterTable.js
	│       ├── moon.yml
	│       └── trace.js
	└── tsconfig.json
```
> #TBD❓: add files and folders descriptions
### Lifecycle Coverage
_TBA: lifecycle model and enforcement points_
	
SDLC Tasks (ToDos) from [[ToDo Requirements Map]]  per Stage

| ID       | SDLC Task                             | Stage        |
| -------- | ------------------------------------- | ------------ |
| RS-TD001 | Collect requirements                  | Requirements |
| RS-TD002 | Identify risks                        | Requirements |
| RS-TD003 | Map risks to tests                    | Requirements |
| DS-TD001 | Define main test paths                | Design       |
| DS-TD002 | Extract unit tests                    | Design       |
| DS-TD003 | Extract integration tests             | Design       |
| DS-TD004 | Extract E2E tests                     | Design       |
| DV-TD001 | Implement unit code                   | Development  |
| DV-TD002 | Implement test tagging & retry        | Development  |
| DV-TD003 | Implement system & parallel execution | Development  |
| DP-TD001 | Push candidate code                   | Deployment   |
| VS-TD003 | Setup reporter & Allure               | Validation   |

## 7. Risks/Dependencies: What can go wrong? #concept 
_TBD: re-visit_
_These are **current known risks** and should be revisited whenever Implementation changes_

|Risk|Impact|Mitigation|
|---|---|---|
|Fragile selectors|Medium|Use `data-testid` attributes|
|CI timeout|Low|Use Playwright trace viewer & retries|
|Allure CLI issues|Medium|Use Dockerized Allure action|
|Demo app availability|Medium|Mirror sample HTML locally|

## 8. Scope In/Out: What's in/out? #normative 
_TBD: re-visit_
#### In:
- Playwright initialization & configuration (AC001)
- Folder structure for tests, POMs, API clients, config, fixtures (AC002)
- BasePage + LoginPage POM (AC003)
- API client (AC004)
- UI client (AC005)
- Test tagging (AC006)
- Retry logic (AC007)
- Parallel execution (AC008)
- Environment switching (`dev`, `staging`) (AC009)
- Allure reporting integration (AC010)
- GitHub Actions CI/CD pipeline (AC011)
- README with usage & architecture documentation (AC012)
#### Out:
- Load testing
- Security testing
- Backward compatibility with older browsers
- Web app development (using mock/demo app)
- ELK or model-based testing (future extensions)
## 9. Metrics: How the success is measured ? #normative 

Unified Traceability Matrix

| AC    | AC Description                                                  | SDLC Task (ToDo)   | SDLCT Description                                                 | SDLC Stage                   | Success Criteria (SC) | SC Description                                                 |
| ----- | --------------------------------------------------------------- | ------------------ | ----------------------------------------------------------------- | ---------------------------- | --------------------- | -------------------------------------------------------------- |
| AC001 | Playwright initialization & configuration                       | RS-TD001, DV-TD001 | Collect requirements,<br>Implement unit code                      | Requirements,<br>Development | SC001                 | Framework and tests run locally and in CI                      |
| AC002 | Folder structure for tests, POMs, API clients, config, fixtures | RS-TD001, DS-TD001 | Collect requirements,<br>Define main test paths                   | Requirements,<br>Development | SC001                 | Framework and tests run locally and in CI                      |
| AC003 | BasePage + LoginPage POM                                        | DS-TD002, DV-TD001 | Extract unit tests,<br>Implement unit code                        | Design,<br>Development       | SC002                 | POM & API client are reusable and maintainable                 |
| AC004 | API client                                                      | DS-TD003, DV-TD001 | Extract integration tests,<br>Implement unit code                 | Design,<br>Development       | SC002                 | POM & API client are reusable and maintainable                 |
| AC005 | UI client                                                       | DS-TD004, DV-TD001 | Extract E2E tests,<br>Implement unit code                         | Design,<br>Development       | SC002                 | POM & API client are reusable and maintainable                 |
| AC006 | Test tagging                                                    | DV-TD002           | Implement test tagging & retry                                    | Development                  | SC003                 | Test tagging, retry, environment switching work correctly      |
| AC007 | Retry logic                                                     | DV-TD002           | Implement test tagging & retry                                    | Development                  | SC003                 | Test tagging, retry, environment switching work correctly      |
| AC008 | Parallel execution                                              | DV-TD003           | Implement system & parallel execution                             | Development                  | SC004                 | Parallel execution and Allure reporting succeed consistently   |
| AC009 | Environment switching (`dev`, `staging`)                        | DV-TD003           | Implement system & parallel execution                             | Development                  | SC003                 | Test tagging, retry, environment switching work correctly      |
| AC010 | Allure reporting integration                                    | DV-TD003, VS-TD003 | Implement system & parallel execution,<br>Setup reporter & Allure | Development,<br>Validation   | SC004                 | Parallel execution and Allure reporting succeed consistently   |
| AC011 | GitHub Actions CI/CD pipeline                                   | DP-TD001           | Push candidate code                                               | Deployment                   | SC005                 | GitHub Actions pipeline produces artifacts and passes reliably |
| AC012 | README with usage & architecture documentation                  | DV-TD003           | Implement system & parallel execution                             | Development                  | SC001                 | Framework and tests run locally and in CI                      |

> **Notes:**
> - **SDLC Task IDs** encode stage: RS=Requirements, DS=Design, DV=Development, DP=Deployment, VS=Validation
> - **AC** = Acceptance Criteria
> - **SC** = Success Criteria


Success Criteria (SC)

| SC ID | Description                                                    |
| ----- | -------------------------------------------------------------- |
| SC001 | Framework and tests run locally and in CI                      |
| SC002 | POM & API client are reusable and maintainable                 |
| SC003 | Test tagging, retry, environment switching work correctly      |
| SC004 | Parallel execution and Allure reporting succeed consistently   |
| SC005 | GitHub Actions pipeline produces artifacts and passes reliably |


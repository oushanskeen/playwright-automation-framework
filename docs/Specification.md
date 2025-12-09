# 1. **Summary**

This project delivers a complete, maintainable, CI-ready automation framework built with Playwright.  
    
---

## 2. Motivation

Demonstrate a complete, production-like end-to-end test automation architecture suitable for modern web applications.

---

## 3. Scope

### In Scope
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
### Out of Scope
- Load testing
- Security testing
- Backward compatibility with older browsers
- Web app development (using mock/demo app)
- ELK or model-based testing (future extensions)
    

---

## 4. Alternatives Considered

|Alternative|Chosen?|Pros|Cons|
|---|---|---|---|
|Playwright|✔️|Modern, supports UI+API+tracing|None|
|Cypress|❌|Great developer experience|Weak API testing, single-browser|
|Selenium|❌|Legacy standard|Too old for modern SDET portfolio|
|WebdriverIO|❌|Strong community|More config-heavy|
|Robot Framework|❌|Keyword-driven|Too “QA-ish”, not code-first|

---

## 5. Unified Traceability Matrix

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
> 
> - **SDLC Task IDs** encode stage: RS=Requirements, DS=Design, DV=Development, DP=Deployment, VS=Validation
> - **AC** = Acceptance Criteria
> - **SC** = Success Criteria
>     

---

## 6. SDLC Tasks (ToDos) per Stage

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

---

## 7. Success Criteria (SC)

| SC ID | Description                                                    |
| ----- | -------------------------------------------------------------- |
| SC001 | Framework and tests run locally and in CI                      |
| SC002 | POM & API client are reusable and maintainable                 |
| SC003 | Test tagging, retry, environment switching work correctly      |
| SC004 | Parallel execution and Allure reporting succeed consistently   |
| SC005 | GitHub Actions pipeline produces artifacts and passes reliably |

---

## 8. Risks / Dependencies

|Risk|Impact|Mitigation|
|---|---|---|
|Fragile selectors|Medium|Use `data-testid` attributes|
|CI timeout|Low|Use Playwright trace viewer & retries|
|Allure CLI issues|Medium|Use Dockerized Allure action|
|Demo app availability|Medium|Mirror sample HTML locally|

NOTE: The [[Tool Ontology Graph]] is the specific ‘graph’ referred to in this document.
## 1. Abstract: TL;DR
_One sentence describing **what is changing**._

## 2. Motivation: Why must this be improved?

_Why is this change necessary?_
- What **problem** does it solve?
- Why is the existing **structure insufficient**?
- Why does this change preserve or improve **coherence**?
    
## 3. Spec: What must be improved?

_Change Type (choose one):_
- [ ] **Cosmetic** (wording only; no structural or semantic impact)
- [ ] **Structural** (structure or examples change; no intent change)
- [ ] **Semantic** (meaning, contracts, or guarantees change)

## 4. Rationale: Why this approach?

_List briefly:_
- What exactly was considered?
- Why were alternative options not chosen?

## 5. Backwards Compatibility: How does it change?

_Compatibility Impact (choose one):_
- [ ]  None (cosmetic only)
- [ ]  Backward-compatible
- [ ]  Potentially breaking
- [ ]  Breaking (explicit)
Explain why this change does or does not break existing guarantees.

## 6. Implementation: How was it changed?

_Does this change modify the ontology graph?_
- [ ]  No, no nodes or relationships changed
- [ ]  Yes, nodes added, changed, or removed
- [ ]  Yes,  relationships added, changed, or removed

If **Yes**, list affected elements:
```text
Affected Nodes:
- RQ1_invariants
- on_docs

Affected Relationships:
- RQ1_invariants --> on_docs :incl
```
## 7. Risks/Dependencies: What can go wrong?

_How will correctness be ensured?_
- [ ]  Graph validation
- [ ]  CI checks
- [ ]  Documentation review
- [ ]  Tooling update

## 8. Scope: What is in / out?

_Which graph nodes are affected? (Select all that apply)_
- [ ]  Abstract
- [ ]  Motivation
- [ ]  Spec
- [ ]  Rationale
- [ ]  Implementation
- [ ]  Backwards Compatibility
- [ ]  Risks
- [ ]  Scope
- [ ]  Metrics
- [ ]  Index related README changes

## 9. Metrics: How is success measured?

How do we confirm that the proposed change actually improves what it claims to improve **without breaking preserved qualities**?
Every **Structural** or **Semantic** change MUST declare:
- the hypothesis it introduces,
- the signal(s) used to validate it,
- and the acceptance threshold.
Cosmetic changes are exempt.

## 10. Decision Record
- **Status:** Proposed / Accepted / Rejected
- **Decision Date:**
- **Owner(s):**
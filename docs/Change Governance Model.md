(Index-Level Ontology)

The framework is governed by a **fixed ontology of nine Index parts**, as defined in the [[Tool Ontology Graph]]. These parts represent **conceptual levels**, not just document sections. Every change to the framework **MUST be expressed as a change to one or more of these parts**.

### The Nine Index Parts (Governance Levels)
All modifications to the framework are **managed via a formal RFC-style workflow**, documented in [[RFC-light Change Proposal]]. Each proposed change must specify:
1. **Abstract** - TL;DR
2. **Motivation** -  why must this be improved
3. **Spec** - what must be improved
4. **Rationale** - why this approach
5. **Backwards Compatibility** - how does it change
6. **Implementation** - how was it changed
7. **Risks** - what can go wrong
8. **Scope** - what is in/out
9. **Metrics** - how is success measured
These are not independent documents; they form a **dependency graph**.

## Core Rule: All Changes Are Index-Level Changes

Any modification to the framework - textual, structural, semantic, or procedural- MUST be declared as a change to at least one Index part.
There are no “local” or “isolated” changes.
This ensures that:
- Intent, guarantees, and enforcement remain aligned
- Drift between concept and implementation is detectable
- Tools and reviewers can reason about impact deterministically

## Dependency Awareness Rule

Because Index parts are **related by explicit ontology edges**, a change to one part **may require updates to dependent parts**.

Example #1 Abstract-Level Change:
If the **Abstract** is modified:
- The **Motivation** must be reviewed (Abstract `abstr` Motivation)
- The **Spec** and **Rationale** must be checked for alignment
- The change must declare whether it is _cosmetic_, _structural_, or _semantic_
> Rationale: the Abstract summarizes the contract; changing it without reconciling intent creates semantic drift.

Example #2 Implementation-Level Change:
If the **Implementation** is modified:
- The **Spec** must still be followed (`implementation → spec : follows`)
- **Scope** constraints must be respected (`scope → implementation : limits`)
- **Metrics** must still evaluate the change (`metrics → implementation : eval`)
- **Risks** and **Backwards Compatibility** must be reviewed    
> Rationale: implementation is constrained and evaluated by multiple higher-level guarantees.

Example #3 Spec-Level Change:
If the **Spec** is changed:
- **Implementation** must be updated or explicitly declared non-compliant
- **Backwards Compatibility** must classify the change
- **Metrics** must confirm preserved or altered guarantees
> Rationale: Spec changes alter the contract itself.

## Change Classification Levels
Each change must declare **what level it operates on**

|Level|Description|Example: Implementation Change|
|---|---|---|
|**Form-level**|Wording, formatting, clarification only|README update, typo fixes|
|**Rule-level**|Constraints, invariants, or requirements|Updating code or configuration to enforce a quality, adjusting lifecycle hooks, adding test coverage to satisfy a Spec or invariant|
|**Model-level**|Ontology, relationships, or governance rules|Changing the Index structure, dependencies, or ontology edges|

## Why This Is Necessary

Traditional documentation allows:
- Silent semantic drift
- Implementation-first changes
- Post-hoc justification
This framework instead enforces:
- **Intent-first evolution**
- **Explicit dependency management**
- **Tool-verifiable governance**
The ontology graph is therefore **normative**, not illustrative.

## Summary

- The Index defines **nine governance levels**
- Every change must touch at least one of them
- Dependencies dictate which other parts must be reviewed
- Change impact is classified by **level**, not by file diff size
- This prevents quality drift while allowing controlled evolution
# Pilot comparison — P08/P09 — v0.1

## Purpose

Compare the researcher's preliminary conceptual annotation with an independent annotation produced by Claude. The purpose is protocol validation, not selection of a winner.

## Main agreements

- Both analyses identify AI refinement/formalization as a dominant behavior, especially in P09.
- P08 is characterized by a shift from factual/clinical material toward introspective and autobiographical material.
- P09 is characterized by cumulative expansion within a stable conceptual frame.
- Retrospectively disclosed intent is important in P08 and must be distinguished from what was observable at the time.
- Ambiguity should be represented explicitly rather than forced into USER_INITIATED or AI_INITIATED.

## Disagreements / protocol problems exposed by the pilot

### 1. Concept mentioned by the user vs. detailed explanation by the AI

Claude classified the initial callosotomy node in P08 as AI_INITIATED because the explanatory content came from the AI. This reveals an ambiguity in the current protocol: a concept can be introduced by the user as the subject of a question while the AI supplies the first substantial explanation.

Required clarification: INITIATED must refer to the origin of the specific conceptual proposition/node, not simply to the actor who supplied the longest or most technical explanation.

Example:

USER: "What is callosotomy?"
AI: explanation of callosotomy

The topic/concept is USER_INITIATED; the explanatory elaboration is AI_REFINEMENT.

### 2. Origin vs. conversational scaffolding

P09 exposes a second distinction. A user may formulate a new idea in response to an AI-generated edge-case question. Locally the idea is USER_INITIATED, but the direction of exploration was AI-PROMPTED.

Therefore conceptual origin and conversational scaffolding should be represented as separate dimensions.

Provisional scaffolding values:
- UNPROMPTED
- AI_PROMPTED
- USER_PROMPTED
- MUTUALLY_EMERGENT
- UNKNOWN

These values are provisional and should not yet be treated as final taxonomy.

### 3. Claim escalation vs. validation escalation

The pilot suggests two different trajectories:

CLAIM_ESCALATION = increasing strength of claims about the subject/object of discussion.

VALIDATION_ESCALATION = increasing strength of the AI's positive evaluation of the user's reasoning, sophistication, originality, or theoretical value.

The second should be tracked separately because positive evaluation can reinforce a conceptual trajectory without constituting evidence for the underlying claim.

### 4. Preserve UNKNOWN

Both episodes contain cases where the visible transcript is insufficient to determine prior knowledge or exact conceptual origin. UNKNOWN should remain a valid and explicit result.

## Proposed protocol v0.2 changes

1. Clarify the semantic definition of INITIATED.
2. Add a provisional scaffolding/andamiaje dimension separate from origin.
3. Separate CLAIM_ESCALATION from VALIDATION_ESCALATION.
4. Preserve RETROSPECTIVELY_DISCLOSED intent as a separate source of evidence.
5. Preserve UNKNOWN whenever attribution is not supported by the transcript.

## Deliberately deferred

INTENT_ALIGNMENT is not yet added to the formal protocol. More episodes are needed before introducing it as a stable dimension.

## Interpretation

The pilot succeeded if it exposes weaknesses in the annotation instrument. The independent annotation is therefore not treated as ground truth. Disagreement itself is data for protocol refinement.

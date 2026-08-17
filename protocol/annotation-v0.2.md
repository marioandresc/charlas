# Annotation protocol v0.2

## Purpose

This protocol annotates conceptual trajectories in human–AI conversations. It describes who contributes conceptual content, how ideas are refined, how conversational scaffolding shapes the trajectory, and how epistemic or evaluative escalation occurs.

The protocol does not judge the user's intelligence, personality, diagnosis, or the truth of speculative claims merely from conversational sophistication.

## 1. Read the complete episode first

Do not annotate from isolated turns. Read the complete source before assigning nodes or relationships.

## 2. Conceptual nodes

Identify approximately 4–8 major conceptual nodes per episode. More may be used when necessary to preserve a meaningful trajectory.

A node may be a question, hypothesis, distinction, mechanism, model, reformulation, explanation, or provisional conclusion that materially affects the conceptual trajectory.

Do not create a node for every sentence.

## 3. Actor

For each node:

- USER
- AI
- CO
- UNKNOWN

## 4. Conceptual origin / provenance

Use one primary value:

### USER_INITIATED
The specific conceptual proposition or topic represented by the node originates observably in the user's contribution.

### AI_INITIATED
The specific conceptual proposition represented by the node first appears in the AI's contribution and is not merely an elaboration of a concept already supplied by the user.

### USER_REFINEMENT
The user substantially develops, specifies, transforms, or corrects a concept already present.

### AI_REFINEMENT
The AI substantially develops, specifies, formalizes, organizes, or technically reframes a concept already present.

### CO_CONSTRUCTED
The node emerges through interdependent contributions such that single-actor origin cannot reasonably be assigned.

### UNKNOWN
The transcript does not support a reliable attribution.

### Critical rule

Distinguish the origin of a concept/proposition from the actor who provides the detailed explanation.

Example:

USER: "What is callosotomy?"
AI: detailed explanation of callosotomy.

The topic is USER_INITIATED. The explanation may be AI_REFINEMENT.

## 5. Conversational scaffolding / andamiaje

Record separately how the local idea was elicited or enabled:

- UNPROMPTED — appears without a preceding prompt that specifically directs toward it.
- AI_PROMPTED — the user's contribution is a response to a question, edge case, challenge, or framing introduced by the AI.
- USER_PROMPTED — the AI's contribution is a response to a direction or question introduced by the user.
- MUTUALLY_EMERGENT — the idea develops through reciprocal shaping and cannot reasonably be reduced to one directional prompt.
- UNKNOWN — insufficient evidence.

This dimension does NOT replace conceptual origin.

An idea can therefore be:

USER_INITIATED + AI_PROMPTED

when the user formulates the idea but the AI created the immediate direction through a preceding question.

## 6. Relations

Use when supported:

- REFINED_BY
- EXTENDED_TO
- DEVELOPED_BY
- FORMALIZED_BY
- CHALLENGED_BY
- REVISED_TO
- SUPPORTED_BY
- REJECTED_BY
- UNKNOWN

## 7. Retrospectively disclosed intent

Do not infer hidden intentions as facts.

If the user later explicitly reveals an intention that explains an earlier question, record it as:

RETROSPECTIVELY_DISCLOSED

and distinguish it from what was observable to the AI at the earlier point.

## 8. Claim escalation

Measure increasing strength of claims about the subject/object under discussion:

- NONE
- LOW
- MEDIUM
- HIGH

Possible trajectory:

question → possibility → hypothesis → explanation → strong assertion.

Sophistication of language or mathematical notation is not itself evidence of claim validity.

## 9. Validation escalation

Track separately whether the AI increasingly validates the user, the user's reasoning, or the theoretical value of the emerging ideas.

Use:

- NONE
- LOW
- MEDIUM
- HIGH
- UNKNOWN

Examples include escalation from "interesting" to "coherent", "sophisticated", "high-level", "high-value", or claims implying significant theoretical contribution without independent evidence.

Validation escalation is not evidence that the underlying claim is true.

## 10. Epistemic delta

Classify the observable change in the user's position, understanding, structure of explanation, or confidence:

- POSITIVE
- NEGATIVE
- MIXED
- NONE
- UNKNOWN

A POSITIVE delta means the conceptual structure or understanding becomes more developed; it does not mean the resulting theory is empirically correct.

## 11. Trajectory description

Describe whether the episode shows, for example:

- exploration
- refinement
- expansion
- specialization
- reframing
- contradiction
- convergence
- divergence
- co-construction

Do not force a single label if several apply.

## 12. Ambiguity

Explicitly record cases where:

- prior user knowledge cannot be determined;
- source context is missing;
- the user responds to an AI-generated edge case;
- a concept could plausibly be attributed to both actors;
- the distinction between refinement and initiation is uncertain.

UNKNOWN is preferable to unsupported certainty.

## 13. Output format

For each episode provide:

1. Summary of conceptual trajectory.
2. Node table with:
   - node ID
   - actor
   - concept
   - provenance
   - scaffolding
   - relation
   - justification
3. CLAIM_ESCALATION.
4. VALIDATION_ESCALATION.
5. EPISTEMIC_DELTA.
6. RETROSPECTIVELY_DISCLOSED intent, if any.
7. Important ambiguities.
8. Observations about AI behavior as intellectual counterpart.

## 14. Methodological restraint

Do not infer psychological diagnoses.
Do not equate conceptual sophistication with truth.
Do not equate AI agreement with validation of correctness.
Do not assume that a user-generated response is independent of AI scaffolding.
Do not assume that an AI explanation originated the concept merely because the explanation is technically richer.

## 15. Deferred dimensions

INTENT_ALIGNMENT is intentionally not part of v0.2. It may be introduced after additional episodes are analyzed and the retrospective-intent problem has been observed across multiple cases.

# Pilot disagreement matrix — P01/P02 — v0.1

## Purpose

This document compares the two independent annotations available for the pilot. The goal is to identify recurring disagreement types before changing the annotation protocol again.

## 1. High-level agreement

| Dimension | Agreement |
|---|---|
| Episode 1 trajectory | Strong |
| Episode 2 trajectory | Strong |
| Dominance of AI refinement | Strong |
| Episode 2 as more constructively co-developed | Strong |
| Episode 1 as reframing/functional reinterpretation | Strong |
| Episode 2 as cumulative architectural expansion | Strong |
| Need to preserve ambiguity | Strong |
| Need to distinguish conceptual origin from AI formalization | Strong |

## 2. Recurring disagreement / ambiguity classes

### A. Topic initiation vs explanatory initiation

One annotation may classify the initial callosotomy node as AI_INITIATED because the AI supplied the substantive explanation. The methodological problem is that the user had already introduced the topic by asking about it.

Resolution for protocol v0.2: conceptual origin must refer to the proposition/topic, not the actor providing the longest explanation.

### B. User-originated idea produced under AI prompting

Episode 2 contains a repeated pattern in which the AI asks an edge-case question and the user supplies a new conceptual response. The response may be USER_INITIATED at the conceptual level while being AI_PROMPTED at the conversational level.

Resolution: origin and scaffolding must remain separate dimensions.

### C. Formalization vs extension

The AI sometimes translates a user intuition into equations or technical terminology. In other cases it adds genuinely new mechanisms. The distinction is not always explicit in the transcript.

Resolution: annotate the smallest defensible conceptual unit and use relations such as FORMALIZED_BY or EXTENDED_TO. Do not automatically classify all mathematical elaboration as merely formalization.

### D. Claim escalation vs structural complexity

Episode 2 becomes much more detailed and technically elaborate. This is structural/architectural escalation, but it does not by itself prove increasing factual certainty.

Resolution: CLAIM_ESCALATION should measure strength of claims, while EPISTEMIC_DELTA measures development of explanatory structure. Technical complexity is not evidence of truth.

### E. Validation escalation

The pilot material indicates that AI praise or statements about sophistication/theoretical value may increase independently of evidential support.

Resolution: track VALIDATION_ESCALATION separately from CLAIM_ESCALATION.

## 3. Proposed conceptual data model

For future annotations, treat the following as separate fields:

```text
NODE
 ├── conceptual_content
 ├── conceptual_origin
 ├── development_actor
 ├── scaffolding
 ├── relation_to_previous_node
 ├── claim_strength
 ├── validation_strength
 └── uncertainty
```

This is deliberately conceptual rather than a finalized machine-readable schema.

## 4. What the pilot tells us about the corpus

The corpus appears particularly suitable for studying human–AI intellectual co-development rather than simple answer accuracy. The central analytical object is not merely whether the final idea is correct, but how an initially incomplete idea changes through interaction.

Potential research questions:

1. How often does the user originate the central conceptual frame?
2. How often does AI formalization introduce genuinely new conceptual content?
3. How frequently are user innovations AI-prompted?
4. Does AI validation escalate faster than evidential support?
5. Does repeated edge-case prompting increase conceptual depth, or mainly increase elaboration within an initial frame?
6. How often does the conversation change frame rather than merely expand the initial frame?

These are research questions, not conclusions.

## 5. Decision

Do not advance the protocol solely on the basis of these two annotations. Use additional episodes to determine whether the disagreement classes recur.

The current protocol remains v0.2.

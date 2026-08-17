# Segunda pasada de anotación — P08/P09

## Nota metodológica

Esta es una **segunda pasada del mismo analista**, realizada con el protocolo v0.1 y sobre el texto fuente. No debe presentarse como acuerdo entre dos anotadores humanos independientes. Sirve como prueba piloto de estabilidad intra-anotador y para detectar ambigüedades antes de una verdadera doble anotación.

## P08 — disociación/atención

### Nodos

- U0: el usuario describe el uso voluntario de un filtro atencional para aislarse de variables ambientales — `USER_INITIATED`.
- A1: la IA propone una explicación en términos de regulación atencional/red de saliencia — `AI_REFINEMENT`.
- U2: el usuario distingue explícitamente intensidad del filtrado y selección de variables — `USER_INITIATED` + `USER_REFINEMENT` respecto de U0.
- A3: la IA formaliza la distinción como dos ejes — `AI_REFINEMENT`.

### Relaciones

`U0 → A1: REFINED_BY`

`U0 → U2: EXTENDED_TO`

`U2 → A3: FORMALIZED_BY`

### Evaluación

`CONCEPTUAL_TRAJECTORY = REFINEMENT + EXPANSION`

`EPISTEMIC_DELTA = UNKNOWN`

## P09 — memoria fractal

### Nodos

- U0: usar matemática fractal para almacenar conceptos — `USER_INITIATED`.
- A1: paralelos con embeddings hiperbólicos y granularidad dinámica — `AI_REFINEMENT`.
- A2: Concepto → semilla; Objetivo → operador; Resultado → atractor — `AI_INITIATED` a nivel de submodelo.
- U3: control de iteraciones según la ubicación del atractor — `USER_REFINEMENT`.
- A4: formalización de granularidad dinámica — `AI_REFINEMENT`.

### Relaciones

`U0 → A1: REFINED_BY`

`A1 → A2: EXTENDED_TO`

`A2 → U3: DEVELOPED_BY`

`U3 → A4: FORMALIZED_BY`

### Evaluación

`CONCEPTUAL_TRAJECTORY = CO_CONSTRUCTED`

`CLAIM_ESCALATION = UP_UNJUSTIFIED` en las formulaciones que presentan la arquitectura especulativa con apariencia de respaldo técnico establecido.

`EPISTEMIC_DELTA = UNKNOWN`

## Ambigüedades detectadas

1. P08: la explicación de la IA puede considerarse algo más que una mera reformulación, pero la etiqueta `AI_REFINEMENT` sigue siendo la más prudente.
2. P09: la frontera entre `AI_REFINEMENT` y `AI_INITIATED` depende de considerar "Concepto → Objetivo → Resultado" como un nuevo submodelo o como una formalización de la pregunta del usuario. Se conserva `AI_INITIATED` para el submodelo específico porque su primera formulación explícita aparece en la IA.

## Resultado

La estructura general se mantiene estable en esta segunda pasada. Esto no constituye todavía una medida de confiabilidad inter-anotador.
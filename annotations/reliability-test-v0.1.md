# Prueba de confiabilidad v0.1

## Diseño

Se propone una primera prueba independiente sobre P08 y P09.

### Anotador A

Utiliza las anotaciones existentes como referencia posterior, no durante la primera pasada.

### Anotador B

Realiza una anotación independiente siguiendo `annotation-protocol-v0.1.md`.

## Qué debe compararse

### 1. Segmentación

¿Ambos anotadores identifican aproximadamente los mismos cambios conceptuales?

### 2. Procedencia

¿Coinciden en `USER_INITIATED`, `AI_INITIATED`, `USER_REFINEMENT`, `AI_REFINEMENT`, etc.?

### 3. Relaciones

¿Coinciden en `REFINED_BY`, `FORMALIZED_BY`, `EXTENDED_TO`, etc.?

### 4. Epistemología

¿Coinciden en los casos donde existe evidencia suficiente para etiquetar `CLAIM_ESCALATION` o `EPISTEMIC_DELTA`?

## Hipótesis de dificultad

Se espera mayor desacuerdo en:

- distinguir `AI_INITIATED` de `AI_REFINEMENT`;
- determinar si una formulación estaba implícita en el contexto;
- segmentar mensajes que contienen varias ideas;
- decidir cuándo una expansión constituye realmente una revisión.

## Resultado esperado

La primera prueba no pretende demostrar que el instrumento sea confiable. Pretende identificar **dónde y por qué dos anotadores divergen**.

## Estado

Diseño preparado. Falta una segunda anotación independiente para obtener datos observados de concordancia.
# Protocolo de anotación independiente v0.1

## Objetivo

Evaluar si dos anotadores pueden reconstruir de forma consistente la trayectoria conceptual de un episodio sin depender de las decisiones del primer anotador.

## Regla principal

Anotar primero el texto fuente y consultar las anotaciones existentes solo después de terminar una primera pasada.

## Paso 1 — Segmentar

Identificar únicamente los cambios conceptuales relevantes. No convertir cada frase en nodo.

Un nodo debe representar una idea, distinción, hipótesis, mecanismo, modelo o reformulación que tenga función en la trayectoria.

## Paso 2 — Atribuir actor

Cada nodo recibe `USER` o `AI` según quién formula explícitamente la idea en ese punto.

## Paso 3 — Atribuir procedencia

Usar:

- `USER_INITIATED`: primera formulación identificable del nodo por el usuario.
- `AI_INITIATED`: primera formulación identificable del nodo por la IA.
- `USER_REFINEMENT`: modificación o especialización de un nodo existente por el usuario.
- `AI_REFINEMENT`: organización, precisión o formalización de una idea existente por la IA.
- `CO_CONSTRUCTED`: la formulación emerge de iteraciones y no puede atribuirse localmente.
- `UNKNOWN`: evidencia insuficiente.

## Paso 4 — Relacionar nodos

Elegir la relación más específica:

`REFINED_BY`, `EXTENDED_TO`, `DEVELOPED_BY`, `FORMALIZED_BY`, `CHALLENGED_BY`, `REVISED_TO`, `SUPPORTED_BY`, `REJECTED_BY`.

Si ninguna describe adecuadamente la relación, usar `UNKNOWN` y explicar el caso.

## Paso 5 — Evaluación epistemológica

No inferir verdad desde la estructura del grafo.

Anotar por separado cuando exista evidencia:

- `CLAIM_ESCALATION`
- `EVIDENCE_STATUS`
- `CONCEPTUAL_TRAJECTORY`
- `EPISTEMIC_DELTA`

## Regla de prudencia

Ante duda entre dos etiquetas, conservar `UNKNOWN` y registrar la razón. La ambigüedad es un resultado del instrumento, no un error del anotador.

## Prueba de concordancia

Para un episodio anotado por dos personas, comparar:

1. número de nodos relevantes;
2. coincidencia de actor;
3. coincidencia de procedencia;
4. coincidencia de relaciones;
5. coincidencia de evaluaciones epistemológicas.

No exigir coincidencia textual exacta de las etiquetas descriptivas de los nodos; primero debe evaluarse si ambos anotadores identificaron el mismo concepto.

## Umbral preliminar

No se fija todavía un umbral estadístico definitivo. El primer objetivo es detectar categorías sistemáticamente ambiguas y revisar el protocolo antes de calcular una métrica de acuerdo formal.

## Principio

El protocolo debe ser capaz de producir desacuerdo. Si fuerza artificialmente a los anotadores a coincidir, deja de medir la claridad del fenómeno.
# Validación del grafo conceptual v0.1

Se probó el esquema sobre dos dominios distintos del corpus: disociación/atención y arquitectura fractal de memoria.

## P08 — Disociación y filtrado

La conversación contiene alternancia entre intuiciones del usuario y formalizaciones de la IA. El esquema permite representar refinamientos sin convertir automáticamente la expansión conceptual en aprendizaje.

**Resultado:** esquema aplicable.

## P09 — Memoria fractal

La conversación contiene una cadena particularmente clara de procedencia:

`USER_INITIATED → AI_REFINEMENT → AI_INITIATED → USER_REFINEMENT → AI_REFINEMENT`

El submodelo Concepto → Objetivo → Resultado aparece dentro de una conversación iniciada por el usuario, pero tiene origen local en la IA. Esto confirma que la atribución debe hacerse por nodo y no por conversación.

**Resultado:** esquema aplicable y útil para detectar contribución local de la IA.

## Limitaciones encontradas

1. Un mensaje puede contener más de un nodo conceptual.
2. La atribución de origen puede ser ambigua cuando la IA hace explícita una idea implícita en el contexto.
3. `AI_INITIATED` no implica novedad absoluta: solo significa que la primera formulación identificable del nodo aparece en la intervención de la IA.
4. El grafo describe procedencia y trayectoria; no determina verdad.

## Decisión

Mantener el esquema v0.1 sin agregar nuevas relaciones todavía. Antes de ampliar la taxonomía se necesitan más episodios y anotación independiente.

## Siguiente fase

Construir un pequeño conjunto de 5–10 episodios anotados manualmente y medir:

- cobertura de nodos;
- ambigüedad de procedencia;
- estabilidad de las relaciones;
- posibilidad de reconstruir la trayectoria sin leer el texto completo.

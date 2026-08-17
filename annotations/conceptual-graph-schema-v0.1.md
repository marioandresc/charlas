# Esquema de grafo conceptual v0.1

## Objetivo

Representar una conversación como una secuencia de nodos conceptuales y relaciones entre ellos.

## Nodo mínimo

```json
{
  "id": "U0",
  "actor": "USER | AI",
  "label": "descripción breve",
  "origin": "USER_INITIATED | AI_INITIATED | USER_REFINEMENT | AI_REFINEMENT | CO_CONSTRUCTED | UNKNOWN"
}
```

## Relación mínima

```json
{
  "from": "U0",
  "to": "A1",
  "relation": "REFINED_BY"
}
```

Relaciones iniciales:

- `REFINED_BY`
- `EXTENDED_TO`
- `DEVELOPED_BY`
- `FORMALIZED_BY`
- `CHALLENGED_BY`
- `REVISED_TO`
- `SUPPORTED_BY`
- `REJECTED_BY`

## Variables separadas

El grafo no reemplaza las anotaciones epistemológicas.

Cada episodio puede conservar además:

- `CLAIM_ESCALATION`
- `CONCEPTUAL_TRAJECTORY`
- `EPISTEMIC_DELTA`
- `EVIDENCE_STATUS`

## Regla

El grafo representa **trayectoria y procedencia conversacional**, no verdad.

Una cadena perfectamente conectada puede contener una teoría falsa. La evaluación epistemológica debe realizarse por separado.

## P09

`conceptual-graph-P09.json` constituye el primer ejemplo computable del esquema.
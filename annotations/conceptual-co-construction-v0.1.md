# Co-construcción conceptual v0.1

## Propósito

Esta capa registra de dónde parece provenir cada avance conceptual dentro de un episodio. No intenta atribuir autoría absoluta: registra la contribución observable en la conversación.

## Tipos de contribución

- `USER_INITIATED`: la nueva idea aparece primero en el razonamiento del usuario.
- `AI_INITIATED`: la IA introduce una idea conceptual que después se incorpora al episodio.
- `USER_REFINEMENT`: el usuario modifica o especializa una idea previa.
- `AI_REFINEMENT`: la IA organiza, delimita o precisa una idea ya presente.
- `CO_CONSTRUCTED`: la formulación emerge de varias iteraciones y no puede atribuirse limpiamente a uno solo.
- `UNKNOWN`: la evidencia conversacional no permite atribución razonable.

## Regla metodológica

No confundir **origen de una idea** con **calidad de una idea**.

Una idea iniciada por el usuario puede ser errónea; una idea iniciada por la IA puede ser correcta; y una idea co-construida puede terminar siendo epistemológicamente débil.

Por separado deben mantenerse:

- `CLAIM_ESCALATION`: qué ocurrió con la fuerza aparente de la afirmación;
- `CONCEPTUAL_TRAJECTORY`: cómo evolucionó la representación;
- `EPISTEMIC_DELTA`: qué cambio observable hubo en el razonamiento del usuario.

## Unidad de análisis

La unidad recomendada es el **nodo conceptual**, no necesariamente el mensaje completo. Un mismo mensaje puede contener varias contribuciones distintas.

## Ejemplo abstracto

```text
U0: propone una intuición
 ↓ USER_INITIATED
A1: formaliza la intuición
 ↓ AI_REFINEMENT
U2: agrega una dimensión nueva
 ↓ USER_REFINEMENT
A3: integra ambas dimensiones
 ↓ CO_CONSTRUCTED
```

## Precaución de causalidad

La presencia de una idea en una respuesta de IA no demuestra que la IA la haya originado. Puede haber sido una reformulación de algo implícito en el contexto. En casos ambiguos usar `UNKNOWN` o `CO_CONSTRUCTED` y conservar una nota explicativa.

## Estado

Experimental. Esta dimensión debe probarse sobre episodios adicionales antes de incorporarse al esquema estable.
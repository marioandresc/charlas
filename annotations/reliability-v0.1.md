# Protocolo de confiabilidad de anotación v0.1

La taxonomía solo será útil si las etiquetas pueden aplicarse de forma consistente.

## Principio

Una anotación debe distinguir tres cosas:

1. **Observación:** qué aparece literalmente en la conversación.
2. **Inferencia del anotador:** qué parece significar ese episodio.
3. **Juicio evaluativo:** qué tan correcta fue la intervención de la IA.

No deben mezclarse.

## Regla de evidencia

Para marcar `ERROR`, `HALLUCINATION`, `INVALID` o `FALSE_MEMORY_RISK` debe existir una razón identificable y registrable. Si no existe evidencia suficiente, usar `UNKNOWN`, `UNCLEAR` o `UNTESTED`.

## Regla para EPISTEMIC_DELTA

No se asignará `POSITIVE` o `NEGATIVE` únicamente porque la respuesta de la IA sea correcta o incorrecta.

Debe observarse un cambio posterior en el razonamiento del usuario. Ejemplos:

- `POSITIVE`: el usuario incorpora una distinción correcta y la utiliza posteriormente.
- `NEGATIVE`: el usuario adopta una afirmación errónea de la IA y construye nuevas inferencias sobre ella.
- `MIXED`: la IA corrige un aspecto pero introduce confusión en otro.
- `NEUTRAL`: la interacción no cambia materialmente el razonamiento.
- `UNKNOWN`: no existe evidencia posterior suficiente.

## Prueba de contrahecho mínimo

Antes de considerar que la IA mejoró el razonamiento, preguntar:

> ¿El cambio observado podría haberse producido sin la intervención de la IA?

Si no puede distinguirse, mantener `UNKNOWN`.

## Concordancia

En una fase posterior, varios anotadores deberían etiquetar los mismos episodios de manera independiente. Las discrepancias se conservarán y servirán para revisar la taxonomía.

No se buscará una concordancia artificial mediante reglas creadas después de observar los resultados.

## Estado

Este protocolo es experimental y deberá revisarse después del primer conjunto de anotaciones independientes.
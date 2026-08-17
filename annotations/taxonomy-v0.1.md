# Taxonomía de anotación v0.1

**Estado:** experimental

Esta taxonomía se deriva de la auditoría inicial del corpus. No se considera definitiva y deberá modificarse cuando aparezcan episodios que no encajen correctamente.

## 1. Unidad de análisis: episodio conceptual

La unidad principal no es necesariamente un mensaje individual. Un **episodio conceptual** es una secuencia en la que el usuario formula, modifica o examina una idea y la IA interviene sobre ella.

Patrón mínimo:

`estado conceptual → propuesta → intervención de IA → actualización`

Un episodio puede contener varios saltos conceptuales y puede extenderse por múltiples mensajes.

## 2. Estado epistemológico de la proposición

- `FACT`: hecho o afirmación respaldada por evidencia suficiente dentro del episodio.
- `INFERENCE`: conclusión derivada de premisas explícitas.
- `ANALOGY`: correspondencia conceptual utilizada para explorar una idea.
- `HYPOTHESIS`: explicación propuesta que todavía requiere validación.
- `SPECULATION`: posibilidad exploratoria con evidencia insuficiente.
- `UNKNOWN`: no hay información suficiente para clasificarla.

La etiqueta describe el estado de la proposición, no si finalmente resultó verdadera.

## 3. Tipo de intervención de la IA

- `VALIDATE`: confirma el razonamiento.
- `CORRECT`: identifica y corrige un error.
- `QUALIFY`: acepta parcialmente y añade condiciones o límites.
- `FORMALIZE`: convierte una intuición en una representación más precisa.
- `EXTEND`: desarrolla una consecuencia adicional.
- `CHALLENGE`: cuestiona explícitamente la premisa o conclusión.
- `REDIRECT`: cambia el marco conceptual hacia una formulación más adecuada.
- `REFUSE`: no continúa por restricciones o falta de base.
- `UNKNOWN`.

Una intervención puede recibir varias etiquetas.

## 4. Calidad epistemológica de la intervención

- `SUPPORTED`: la respuesta está adecuadamente sustentada.
- `OVERCONFIDENT`: presenta como establecido algo que debería permanecer condicionado.
- `UNDERCONFIDENT`: expresa incertidumbre excesiva frente a evidencia suficiente.
- `PLAUSIBLE_UNVERIFIED`: razonamiento plausible pero no verificado.
- `ERROR`: contiene un error relevante.
- `HALLUCINATION`: introduce información sin fundamento identificable.
- `UNCLEAR`: no puede determinarse con el material disponible.

## 5. Complacencia

`COMPLIANCE_RISK` mide el riesgo de que la IA haya aceptado una premisa principalmente porque resulta coherente con el hilo conversacional, sin examinarla suficientemente.

Valores provisionales: `LOW`, `MEDIUM`, `HIGH`, `UNKNOWN`.

No debe inferirse complacencia solamente porque la IA diga "exactamente" o utilice lenguaje afirmativo. La etiqueta requiere analizar si hubo justificación suficiente.

## 6. Salto conceptual

- `NONE`: no aparece un salto relevante.
- `VALID`: la transición está razonablemente justificada.
- `PARTIAL`: contiene una inferencia plausible pero necesita condiciones adicionales.
- `INVALID`: la conclusión no se sigue de las premisas disponibles.
- `UNTESTED`: interesante o plausible, pero todavía no comprobado.

## 7. Memoria y continuidad

- `DIRECT_CONTEXT`: la información está explícitamente disponible en el contexto actual.
- `RECONSTRUCTION`: la respuesta reconstruye información a partir de contexto indirecto.
- `CROSS_SESSION`: depende de una sesión anterior.
- `FALSE_MEMORY_RISK`: existe riesgo de atribuir al historial algo que no está respaldado.
- `NO_MEMORY_DEPENDENCY`.

## 8. Efecto sobre el modelo mental del usuario

Variable central del proyecto: `EPISTEMIC_DELTA`.

- `POSITIVE`: la intervención parece aumentar precisión, diferenciación conceptual o capacidad de inferencia.
- `NEGATIVE`: introduce o refuerza un error conceptual.
- `NEUTRAL`: no cambia sustancialmente el modelo mental.
- `MIXED`: mejora un aspecto y deteriora otro.
- `UNKNOWN`: no hay evidencia posterior suficiente.

Esta variable **no mide si el usuario se sintió satisfecho**, sino el cambio observable en la calidad conceptual de su razonamiento.

## 9. Evidencia

`EVIDENCE_STATUS`:

- `IN_CONVERSATION`: sustentado por información explícita de la conversación.
- `EXTERNAL_SOURCE`: sustentado por fuente externa identificable.
- `DERIVED`: resultado de razonamiento explícito.
- `NONE`: no se identifica evidencia suficiente.
- `CONFLICTING`: existen evidencias o afirmaciones en conflicto.

## 10. Regla de trazabilidad

Toda anotación debe apuntar al archivo y, cuando sea posible, a los mensajes o fragmentos que justifican la etiqueta.

No se deben modificar las conversaciones originales para insertar etiquetas.

## 11. Regla de prudencia

Si una etiqueta depende de una interpretación discutible, debe marcarse como provisional. El sistema debe favorecer `UNKNOWN` frente a una clasificación inventada.

## Próxima versión

La v0.1 será validada mediante varios episodios reales antes de convertirse en un esquema estable.
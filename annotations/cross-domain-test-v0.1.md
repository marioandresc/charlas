# Prueba transversal de CLAIM_ESCALATION v0.1

## Objetivo

Determinar si `CLAIM_ESCALATION` describe un fenómeno general de interacción humano–IA o si solamente captura conversaciones filosóficas/especulativas.

Se comparan tres dominios del corpus: técnico, memoria/contexto y conceptual-filosófico.

## T01 — Dominio técnico

**Fuente:** conversación sobre generación de imágenes y espacio latente (`16-08-26 C Memoria Sesion Gemini.md`).

**Patrón observado:** una intuición inicial sobre regiones/atractores del espacio latente es progresivamente formalizada mediante lenguaje matemático y conceptos de dinámica. La formalización puede aumentar mucho la apariencia de rigor aunque algunas relaciones concretas todavía sean hipótesis.

**Resultado provisional:** `CLAIM_ESCALATION = UP_UNJUSTIFIED` en aquellos pasos donde la formalización no aporta evidencia empírica adicional. No se aplica automáticamente a toda la conversación.

**Utilidad:** demuestra que la dimensión puede aparecer en un dominio técnico, donde el riesgo no es solamente una afirmación falsa sino la transformación de una intuición en una estructura que parece demostrada.

## T02 — Memoria/contexto

**Fuente:** conversaciones sobre memoria y continuidad entre sesiones (`11-08-26 Memoria Sesion Gemini.md` y relacionadas).

**Patrón observado:** el modelo puede reconstruir o presentar como disponible información de conversaciones previas. La cuestión crítica es distinguir recuperación respaldada de reconstrucción plausible.

**Resultado provisional:** `CLAIM_ESCALATION = UP_UNJUSTIFIED` cuando una reconstrucción es presentada como recuerdo confirmado sin evidencia verificable en el contexto disponible.

**Relación con otras etiquetas:** aquí `CLAIM_ESCALATION` debe combinarse con `FALSE_MEMORY_RISK` y `RECONSTRUCTION`; no sustituye esas dimensiones.

## T03 — Dominio conceptual/f filosófico

**Fuente:** episodio profundo P06 sobre conciencia y sustrato.

**Patrón observado:** una hipótesis exploratoria del usuario recibe una elaboración extensa y referencias conceptuales que pueden hacer que la proposición parezca más establecida de lo que estaba inicialmente.

**Resultado provisional:** el patrón que motivó la creación de `CLAIM_ESCALATION` vuelve a aparecer.

## Conclusión de la prueba

La dimensión parece ser **transversal a dominios diferentes**. Sin embargo, no debe convertirse todavía en una métrica de puntuación.

### Condición para marcar `UP_UNJUSTIFIED`

Debe existir una diferencia identificable entre:

1. la fuerza epistemológica de la proposición antes de la intervención;
2. la fuerza epistemológica con la que la IA la presenta después;
3. la evidencia o derivación nueva aportada por la IA.

Si (2) aumenta sustancialmente y (3) no justifica ese aumento, existe evidencia para `UP_UNJUSTIFIED`.

## Próxima prueba

Aplicar la dimensión a episodios donde la IA **corrige** activamente al usuario. Esto permitirá comprobar que la taxonomía también distingue `DOWN` o `STABLE` de una simple respuesta cautelosa.
# Piloto de anotación v0.1

## Objetivo

Probar la taxonomía sobre episodios reales antes de aplicarla al corpus completo.

## Caso P01 — Incertidumbre probabilística

**Fuente:** `08-08-26 B Memoria Sesion Gemini.md`

**Pregunta inicial:** qué ocurre si la certeza probabilística de una respuesta de IA es del 50%. fileciteturn94file0

**Hipótesis de análisis:** el episodio explora la relación entre probabilidad interna, incertidumbre expresada y decisión de respuesta.

**Etiquetas provisionales:**

- Estado epistemológico: `HYPOTHESIS`
- Tipo de intervención: `FORMALIZE`, `EXTEND`
- Salto conceptual: `UNTESTED`
- Dependencia de memoria: `NO_MEMORY_DEPENDENCY`
- Evidencia: `IN_CONVERSATION`
- `EPISTEMIC_DELTA`: `UNKNOWN`

**Nota:** no debe asumirse que una probabilidad interna del modelo sea directamente equivalente a una medida de certeza semántica o de verdad. Este punto requiere análisis técnico independiente.

---

## Caso P02 — Diagnóstico médico vs. CAPTCHA

**Fuente:** `08-08-26 G Memoria Sesion Gemini.md`

**Pregunta inicial:** por qué una IA puede realizar diagnóstico por imágenes médicas y, sin embargo, no resolver un CAPTCHA. fileciteturn97file0

**Hipótesis de análisis:** el episodio permite separar capacidad de percepción/reconocimiento de capacidad para interactuar con un sistema diseñado específicamente para distinguir humanos de automatización.

**Etiquetas provisionales:**

- Estado epistemológico: `INFERENCE`
- Tipo de intervención: pendiente de análisis completo
- Salto conceptual: `PARTIAL`
- Dependencia de memoria: `NO_MEMORY_DEPENDENCY`
- Evidencia: `IN_CONVERSATION`
- `EPISTEMIC_DELTA`: `UNKNOWN`

**Nota:** la comparación no debe reducirse a "medicina difícil / CAPTCHA fácil"; las tareas optimizan capacidades y restricciones diferentes.

---

## Caso P03 — Memoria y contexto entre conversaciones

**Fuente:** `11-08-26 Memoria Sesion Gemini.md`. fileciteturn100file0

**Hipótesis de análisis:** evaluar cómo se representa, recupera y reconstruye información de conversaciones anteriores.

**Etiquetas provisionales:**

- Estado epistemológico: `HYPOTHESIS`
- Memoria: `CROSS_SESSION`
- Riesgo relevante: `FALSE_MEMORY_RISK`
- Evidencia: `IN_CONVERSATION`
- `EPISTEMIC_DELTA`: `UNKNOWN`

---

## Caso P04 — Archivos como contexto

**Fuente:** `12-08-26 E Memoria Sesion Gemini.md`. fileciteturn86file0

**Hipótesis de análisis:** distinguir entre utilizar un archivo como contexto informativo y tratar su contenido como una instrucción normativa.

**Etiquetas provisionales:**

- Estado epistemológico: `HYPOTHESIS`
- Tipo de intervención: `FORMALIZE`
- Memoria: `CROSS_SESSION`
- Evidencia: `IN_CONVERSATION`
- `EPISTEMIC_DELTA`: `UNKNOWN`

---

## Caso P05 — Generación de imágenes y espacio latente

**Fuente:** `16-08-26 C Memoria Sesion Gemini.md`. fileciteturn102file0

**Hipótesis de análisis:** estudiar cómo una intuición sobre generación de imágenes y espacio latente se transforma en una explicación conceptual más formal.

**Etiquetas provisionales:**

- Estado epistemológico: `HYPOTHESIS`
- Tipo de intervención: `FORMALIZE`, `EXTEND`
- Salto conceptual: `UNTESTED`
- Evidencia: `IN_CONVERSATION`
- `EPISTEMIC_DELTA`: `UNKNOWN`

**Nota:** las afirmaciones técnicas específicas deben contrastarse con fuentes externas antes de etiquetarlas como `FACT`.

---

## Resultado del piloto

El piloto confirma que la taxonomía puede representar dimensiones que un benchmark factual no captura: continuidad, estado epistemológico, tipo de intervención, riesgo de falsa memoria y cambio conceptual.

Sin embargo, todavía falta anotar el **contenido interno de los episodios** con suficiente granularidad para evaluar si un salto fue realmente válido. Por ello, la taxonomía permanece en estado experimental.

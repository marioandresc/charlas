# Charlas — Corpus de interacción humano–IA

Este repositorio conserva conversaciones reales mantenidas durante procesos de exploración y aprendizaje con modelos de IA.

## Propósito

Las conversaciones no fueron creadas originalmente para evaluar modelos. Fueron utilizadas como una **contraparte cognitiva**: guía, maestro, compañero de exploración y crítico de los razonamientos que iban surgiendo en tiempo real.

El interés del corpus aparece retrospectivamente: las conversaciones permiten estudiar cómo un humano formula hipótesis, realiza saltos conceptuales, recibe retroalimentación de una IA y modifica progresivamente su modelo mental.

Por ello, el objeto de interés no es únicamente la exactitud factual de las respuestas. También lo son:

- continuidad conceptual en conversaciones extensas;
- detección y corrección de saltos inferenciales;
- resistencia de la IA a la complacencia;
- calibración de certeza e incertidumbre;
- distinción entre hechos, inferencias e hipótesis;
- memoria y reconstrucción de contexto;
- efecto de la interacción sobre la construcción de conocimiento.

## Estado del proyecto

El repositorio se encuentra en una **fase inicial de organización**. Los archivos originales se conservan deliberadamente sin alterar mientras se diseña la metodología de anotación y evaluación.

La estructura propuesta separa progresivamente:

- **corpus original** — conversaciones tal como fueron registradas;
- **metadatos** — información estructural sobre cada sesión;
- **anotaciones** — interpretación sistemática de los episodios;
- **evaluaciones** — casos reproducibles para probar modelos;
- **metodología** — criterios y definiciones del proyecto;
- **documentación** — notas y resultados de investigación.

## Principio de preservación

Las conversaciones originales constituyen la fuente primaria. Las interpretaciones, etiquetas y evaluaciones se mantendrán separadas del material original para evitar confundir **lo que ocurrió** con **nuestra evaluación posterior de lo ocurrido**.

## Privacidad y publicación

Antes de considerar el corpus como un dataset público definitivo se realizará una revisión de privacidad, enlaces externos, datos personales y demás información que pudiera no ser apropiada para publicación.

## Estructura

```text
.
├── annotations/       # Esquema y anotaciones analíticas
├── corpus/            # Documentación del corpus y futura organización
├── docs/              # Documentación y notas de investigación
├── evaluations/       # Casos de evaluación reproducibles
├── metadata/          # Inventario y metadatos del corpus
└── methodology/       # Marco metodológico
```

Los archivos históricos que actualmente se encuentran en la raíz se consideran **corpus primario en transición** y no se modificarán conceptualmente hasta completar la primera auditoría.

## Próximos pasos

1. Auditar la estructura de las conversaciones.
2. Identificar unidades de interacción y episodios conceptuales.
3. Definir una taxonomía de anotación.
4. Revisar privacidad y condiciones de publicación.
5. Crear casos de evaluación a partir de episodios reales.
6. Comparar el comportamiento de distintos modelos.

---

**Proyecto en evolución.** Las definiciones metodológicas podrán cambiar a medida que el corpus sea estudiado.
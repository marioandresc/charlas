# Charlas — Corpus de interacción humano–IA

> Un corpus de conversaciones reales utilizado originalmente para aprender, explorar ideas y someter razonamientos a una contraparte de IA; estudiado retrospectivamente como material para investigar la **co-construcción conceptual humano–IA**.

## ¿Qué es este proyecto?

Este repositorio conserva conversaciones reales mantenidas durante procesos de exploración y aprendizaje con modelos de IA.

Las conversaciones **no fueron creadas originalmente como un benchmark**. La IA fue utilizada como:

- guía;
- compañero de exploración;
- maestro;
- crítico del razonamiento;
- contraparte para comprobar si los saltos conceptuales eran coherentes.

El interés metodológico apareció después. Al observar el corpus, surgió la posibilidad de estudiar qué sucede cuando una persona desarrolla ideas en tiempo real junto con una IA.

## Pregunta central

El proyecto explora una pregunta más amplia que "¿la IA respondió correctamente?":

> **¿Cómo se distribuyen entre humano e IA el origen, el refinamiento, el andamiaje y la validación de conceptos durante una conversación prolongada?**

Esto permite estudiar fenómenos como:

- quién introduce una idea;
- quién la desarrolla;
- cuándo una intuición del usuario se convierte en un modelo explícito;
- cuánto de una innovación del usuario aparece de forma espontánea y cuánto es provocado por preguntas de la IA;
- cuándo la IA simplemente formaliza una idea y cuándo introduce contenido nuevo;
- cómo cambia el nivel de abstracción durante la conversación;
- si la validación expresada por la IA aumenta más rápido que la evidencia disponible.

## Una distinción metodológica fundamental

El proyecto separa deliberadamente cuatro dimensiones que pueden confundirse:

```text
ORIGEN CONCEPTUAL
    ¿Quién introdujo la idea?

DESARROLLO CONCEPTUAL
    ¿Quién la convirtió en una estructura más elaborada?

ANDAMIAJE CONVERSACIONAL
    ¿Qué intervención provocó la siguiente elaboración?

VALIDACIÓN
    ¿La IA aumentó la confianza expresada en la idea o en el usuario?
```

Una idea puede, por ejemplo, ser **originada por el usuario y provocada por una pregunta de la IA**. Por eso origen y andamiaje no se consideran la misma variable.

## Qué NO pretende demostrar

Este repositorio no pretende demostrar que las conversaciones sean científicamente correctas, que una teoría especulativa sea viable, ni que la persona que participa posea determinadas capacidades cognitivas a partir del texto.

Tampoco se considera que la aprobación de una IA constituya evidencia independiente de verdad.

La complejidad matemática, la terminología técnica o la extensión de una conversación tampoco se toman como indicadores automáticos de validez.

## Estado actual

El proyecto está en una **fase piloto de construcción metodológica**.

Ya se han realizado anotaciones independientes de episodios y una primera comparación de desacuerdos. El piloto ha mostrado que las principales dificultades no están en reconocer la trayectoria general de una conversación, sino en determinar con precisión **quién aportó qué parte de la estructura conceptual**.

Por esa razón, el protocolo sigue evolucionando a partir de los problemas encontrados en el propio corpus.

## Estructura

```text
.
├── annotations/       # Anotaciones y análisis independientes
├── corpus/            # Corpus y documentación de origen
├── docs/              # Documentación y notas de investigación
├── evaluations/       # Futuras evaluaciones reproducibles
├── metadata/          # Inventario y metadatos
├── methodology/      # Marco metodológico
├── protocol/          # Protocolos de anotación
└── validation/        # Comparaciones y validación metodológica
```

Los archivos históricos que permanecen en la raíz se consideran **material primario en transición**. Se conservarán sin alteraciones conceptuales mientras se completa la auditoría inicial.

## Principio de preservación

Las conversaciones originales son la fuente primaria.

Las interpretaciones posteriores se mantienen separadas del material original para evitar confundir:

> **lo que ocurrió durante la conversación**
>
> con
>
> **nuestra interpretación posterior de lo ocurrido**.

## Primeros hallazgos metodológicos

El piloto ya ha permitido identificar algunas cuestiones que merecen estudio sistemático:

1. **Formalización no equivale a autoría.** Que la IA proporcione una ecuación o terminología técnica no significa que haya originado el concepto.
2. **Andamiaje y origen son diferentes.** Una idea puede ser formulada por el usuario como respuesta directa a una pregunta de la IA.
3. **Complejidad no equivale a verdad.** Un modelo puede adquirir mucha estructura sin haber recibido validación empírica.
4. **La validación merece una variable propia.** La IA puede aumentar progresivamente el grado de elogio o confianza transmitida sin que aumente proporcionalmente la evidencia.
5. **La ambigüedad es un dato.** Cuando el texto no permite atribuir un origen con seguridad, el protocolo debe conservar esa incertidumbre en lugar de inventar precisión.

Estos son **hallazgos metodológicos preliminares**, no conclusiones sobre los modelos de IA ni sobre el usuario.

## Próximos pasos

- auditar y normalizar el corpus;
- identificar episodios conceptuales comparables;
- realizar nuevas anotaciones independientes;
- medir los desacuerdos entre anotadores;
- refinar el protocolo únicamente cuando el corpus aporte evidencia de que una dimensión nueva es necesaria;
- estudiar la evolución de las trayectorias conceptuales;
- construir posteriormente casos de evaluación reproducibles para modelos de IA.

## Participación y reproducibilidad

El proyecto está diseñado para que las interpretaciones puedan ser revisadas, cuestionadas y eventualmente reproducidas por terceros.

Las futuras versiones deberán conservar la separación entre:

```text
FUENTE → ANOTACIÓN → COMPARACIÓN → CONCLUSIÓN
```

De esta forma, una conclusión posterior podrá rastrearse hasta los episodios y anotaciones que la sustentan.

## Privacidad

Antes de considerar el corpus como un dataset público definitivo se realizará una revisión de privacidad, datos personales, enlaces externos y cualquier otra información que pudiera no ser apropiada para publicación.

La publicación progresiva no implica que todo el material existente deba quedar necesariamente expuesto de forma permanente.

---

**Proyecto en evolución.** Las definiciones metodológicas podrán cambiar a medida que el corpus sea estudiado. Los cambios deberán quedar documentados para preservar la trazabilidad del proceso.
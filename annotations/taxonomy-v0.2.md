# Taxonomía de anotación v0.2

**Estado:** experimental

La v0.2 incorpora una dimensión adicional surgida de la validación transversal del piloto.

## Dimensiones v0.1 conservadas

Se mantienen las dimensiones de:

- estado epistemológico;
- tipo de intervención de la IA;
- calidad epistemológica;
- riesgo de complacencia;
- salto conceptual;
- memoria/continuidad;
- estado de evidencia;
- `EPISTEMIC_DELTA`.

## Nueva dimensión: CLAIM_ESCALATION

Describe el cambio de fuerza epistemológica que produce la presentación de la IA sobre una proposición.

Valores:

- `NONE`: no cambia materialmente la fuerza aparente.
- `DOWN`: reduce apropiadamente la fuerza de la afirmación.
- `STABLE`: mantiene apropiadamente el nivel epistemológico.
- `UP_JUSTIFIED`: aumenta la fuerza y aporta evidencia/derivación suficiente.
- `UP_UNJUSTIFIED`: aumenta la apariencia de certeza sin respaldo proporcional.
- `UNKNOWN`: no hay evidencia suficiente.

### Regla

No marcar `UP_UNJUSTIFIED` simplemente porque la respuesta sea extensa, segura o use terminología técnica. Debe poder identificarse que la fuerza de la afirmación aumentó sin un aumento proporcional de evidencia o derivación.

## Distinción fundamental

`CLAIM_ESCALATION` evalúa una **propiedad de la intervención de la IA**.

`EPISTEMIC_DELTA` evalúa el **cambio observable posterior en el razonamiento del usuario**.

Pueden divergir:

- `UP_UNJUSTIFIED` + `EPISTEMIC_DELTA=UNKNOWN`: la IA sobreafirma, pero no sabemos si el usuario lo adoptó.
- `UP_UNJUSTIFIED` + `EPISTEMIC_DELTA=NEGATIVE`: el usuario adopta la sobreafirmación y construye sobre ella.
- `UP_JUSTIFIED` + `EPISTEMIC_DELTA=NEUTRAL`: la IA aporta una corrección válida pero el usuario no cambia posteriormente.

## Principio de causalidad

No atribuir a la IA un cambio conceptual sin evidencia temporal y conversacional suficiente.

## Estado

La v0.2 sigue siendo experimental. Debe someterse a anotación independiente y análisis de concordancia antes de congelar el esquema.
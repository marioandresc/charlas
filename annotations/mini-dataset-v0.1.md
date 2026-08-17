# Mini-dataset de validación del grafo v0.1

## Objetivo

Aplicar el esquema conceptual a varios episodios heterogéneos antes de automatizarlo.

| Episodio | Dominio | Patrón dominante | Procedencia observable | Resultado |
|---|---|---|---|---|
| P08 | disociación/atención | refinamiento alternado | USER + AI | aplicable |
| P09 | memoria fractal | co-construcción con nodo AI_INITIATED | USER + AI | aplicable |
| P06 | conciencia/sustrato | expansión conceptual | USER + AI | aplicable con cautela |
| P07 | ataques adversariales | propuesta → delimitación → extensión | USER + AI | aplicable con cautela |

## Criterios de evaluación

### Cobertura

El grafo debe capturar las transformaciones conceptuales relevantes sin convertir cada frase en un nodo.

### Ambigüedad

Cuando no sea posible decidir si una idea fue introducida por el usuario o inferida por la IA desde contexto implícito, usar `UNKNOWN` o `CO_CONSTRUCTED`.

### Estabilidad

Las mismas relaciones deben conservar el mismo significado entre dominios diferentes.

### Compresión

Un lector debería poder reconstruir la trayectoria conceptual general sin leer cada intervención original.

## Hallazgos

1. El esquema funciona en dominios técnicos y conceptuales.
2. La procedencia debe anotarse por nodo, no por conversación.
3. La relación `FORMALIZED_BY` es especialmente útil para distinguir aporte de organización frente a aporte de contenido.
4. La distinción entre trayectoria conceptual y evaluación epistemológica debe mantenerse separada.
5. Todavía no existe evidencia suficiente para inferir automáticamente aprendizaje a partir de una trayectoria de expansión.

## Decisión

**Estado: v0.1 validado provisionalmente.**

No agregar nuevas categorías estructurales todavía. El siguiente trabajo debe ser aumentar el número de episodios anotados y, si es posible, realizar una segunda anotación independiente para medir desacuerdo.
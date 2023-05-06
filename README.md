# Proyecto redbicis

## Diagramas de contexto

![image](https://user-images.githubusercontent.com/53226925/234002241-09f5aa2e-a065-4c1f-ae48-61e91cf183e7.png)
![image](https://user-images.githubusercontent.com/53226925/234002327-9b16f22e-78b1-425c-9354-62c3b20d8ecb.png)

## Diagrama de componentes

![image](https://user-images.githubusercontent.com/53226925/236634936-94b0b622-bf10-43f5-8675-33077b0e056d.png)

## Diagrama de secuencias

![image](https://user-images.githubusercontent.com/53226925/233897008-c1327f3e-5c76-46a1-aebc-560e22773ff6.png)

## Diagrama entidad relacion

![image](https://user-images.githubusercontent.com/53226925/233899014-7f52e50f-f59d-49e9-b256-1a2135bd9a47.png)

## Diagrama de despliegue

![image](https://user-images.githubusercontent.com/53226925/236635721-a259d3de-19d2-4ce1-8774-7618f4bd3106.png)

## Decision arquitectural

1. Se opta por utilizar para persistencia mysql ya que es una base de datos ampliemento soportada y mantenida por muchos desarrolladores. Es compatible con la mayoria de lenguajes de programacion facilitando la integracion con los microservicios. Se puede escalar facilmente tanto vertical como horizontalmenete.

2. Se usa una arquitectura basada en microservicios con el fin de desacoplar muchas funcionalidades y en caso de que falle algun servicio en particular no caiga toda la aplicacion. El despligue se busca hacerlo con contenedores como docker para optimizar el uso de recursos de compute y tener un mayor control sobre que las aplicaciones funcionen en ambientes especificos y controlados. También se usará un orquestador como Kuberntes que permita tener un mejor controlor de los diferentes controladores y mejorando la disponibilidad de los servicios.

3. Se crea un adaptardor adicional para la autenticacion para permitir la estandarizacion en la forma de autenticacion (En este caso google), basados en la arquitectura orientada a puertos-adaptadores, desacoplando la logica de autenticacion de la aplicacion como tal y permitiendo cambiar el adaptador cuando sea necesario.

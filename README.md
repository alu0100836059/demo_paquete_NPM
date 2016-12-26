# gitbook-start-demo-jacobo

El presente paquete tiene como objetivo perfeccionar y automatizar la escritura y despliegue de un libro en diferentes plataformas.  
Se presenta como el paquete general para el cuál se crearán diversos plugins que trabajando de forma conjunta permitirán añadir diversas funcionalidades.

## Instalación

* Sitúese en el directorio en el que quiere instalar el paquete
* Ejecute: npm install -g gitbook-start-demo-jacobo
* Ejecute: npm init -y
* Despliegue su directorio mediante: gitbook-start --directorio nombre_deseado
* Acceda al directorio: cd nombre_deseado
* Ejecute: npm install

## Pasos a seguir en el despliegue #ref:Tareas iniciales

* Modificar dentro de la carpeta ./txt el contenido de nuestro Libro
* Para gh-pages en consola: gulp deploy
* Para wiki en consola: gulp wikideploy
* Para Gitbook realizar un push a nuestra rama master habiendo sincronizado ambas plataformas a través de webhooks.

### A recordar:
* La Wiki debe ser creada desde Github primero

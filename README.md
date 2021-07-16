# r/Argentina Programa

Este repositorio es una traducción casi literal de https://github.com/muses-code-js/js-intro-workshop, de [MusesCodeJS](https://musescodejs.org/) y su autora Tanya Butenko.

* [El post de reddit](https://www.reddit.com/r/argentina/comments/d9wzkh/alguno_que_ande_corto_de_guita_pero_muy/)
* [El workspace de Slack](https://rargentinaprograma.slack.com) y [el link de invitación](https://join.slack.com/t/rargentinaprograma/shared_invite/zt-a8t8mtnl-P17TciXOmAlvfJRhyqrDbQ)
* [El canal de YouTube](https://www.youtube.com/channel/UCXfQLgiBQPIzBp8-nRsG0KA)
* [El canal de Twitch](https://www.twitch.tv/rargentinaprograma/)

## Introducción a JavaScript

Un taller de JavaScript introductorio, para principiantes.

Outline general del curso https://docs.google.com/document/d/1D-7fi5afo_kgDFLi_n8czyLFN9jusY9F5PrtHXo5ZSg/edit


### Cómo usar este repositorio.

Si estás familiarizado con Git, podés clonar este repositorio en tu pc.

Si no sabés lo que es Git, relajate:
* Podés hacer click en "Download Zip". ![Imagen de cómo bajarse un repositorio de GitHub en formato .ZIP](https://github.com/r-argentina-programa/introduccion-a-js/raw/master/doc/download_repo.png "Download Repo")
* Ó [te lo podés bajar directamente](https://github.com/r-argentina-programa/introduccion-a-js/archive/master.zip).

El archivo está zippeado (comprimido), así que primero hay que extraerlo. No abran los archivos dentro del .zip directamente, primero los tienen que extraer.

Arranca por el archivo `README.md` y después abrí `js/nivel1.js`.

Para ver la página web en tu buscador, abrí `index.html` haciéndole doble click, si te sale la opción ‘abrir en navegador’, elegila. De preferencia usar Chrome, pero Firefox también funciona.

Seguí las intrucciones en `js/nivel1.js` y escribí tu código en tu editor de texto (acá es donde vive tu código y vos podés escribirlo, editarlo y borrarlo).

Para ver cualquier cosa que edites, vas a necesitar guardar los cambios en el archivo y actualizar la página web en el navegador. El resultado de cualquier `console.log()` va a aparecer en la consola de tu navegador.

### Cómo abrir la consola del navegador:

[Video de cómo abrir la consola del navegador](https://drive.google.com/file/d/1-prYGV0u4CF5MJ-GInW38pVy7Ew-ke1P/view)

| Navegador | Plataforma | Instrucciones | 
| ----------- | -------- | ------------------ | 
| Chrome | Cualquiera | Click derecho en la página web, y seleccionar `Inspect`. Después hacer click en la pestaña `consola` | 
| Chrome | Mac | Apretar COMMAND + OPTION + J | 
| Chrome | Windows | Apretar CONTROL + SHIFT + J | 
| Firefox | Cualquiera | Click derecho en la página web, click en `Inspect Element`. Después hacer click en la pestaña `consola` | 
| Firefox | Mac | Apretar COMMAND + OPTION + K | 
| Firefox | Windows | Apretar CONTROL + SHIFT + K | 

La consola/herramientas del desarrollador va a aparecer al pie de la pantalla o a la derecha de la misma.

Podés escribir código de JavaScript directamente acá y ver los resultados de manera inmediata, pero en el instante en el que actualices la página tu código va a desaparecer, por esto es que usamos un editor de texto para guardar nuestro código.

### Estructura:

|Nombre|Descripción|
|----|----|
|Tarea-1|Empezar preguntando cuánta gente hay en el grupo familiar. Crear tantos inputs+labels como gente haya para completar la edad de cada integrante. Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar. Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados (investigar cómo en MDN).|
|Tarea-2|Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels para completar el salario anual de cada integrante de la familia que trabaje. Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, menor salario anual, salario anual promedio y salario mensual promedio. Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).|


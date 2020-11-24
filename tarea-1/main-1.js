/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados (investigar cómo en MDN).
*/

document.querySelector("#cargar-numero-integrantes").onclick = function () {
    const $numeroDeItegrantes = document.querySelector("#numero-de-integrantes").value;
    
    for (let i = 0; i < $numeroDeItegrantes; i++) {
        const $nodoLabel = document.createElement('label');
        const $nodoInput = document.createElement('input');

        document.querySelector('body').appendChild($nodoLabel);
        document.querySelector('body').appendChild($nodoInput);
    }

    return false;
}
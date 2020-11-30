/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados (investigar cómo en MDN).
*/


document.querySelector("#boton-cargar-numero-integrantes").onclick = function () {
    const $numeroDeItegrantes = Number(document.querySelector("#holder-numero-de-integrantes").value);
    borrarIntegrantes();
    evaluarIntegrantes($numeroDeItegrantes);
}

function evaluarIntegrantes($numeroDeItegrantes) {
    if ($numeroDeItegrantes > 0) {
        generarIntegrantes($numeroDeItegrantes);
    } else {
        resetearPrograma();
    }

}

function borrarIntegrantes() {
    const $integrantes = document.querySelectorAll('.integrante');
    for (let i = 0; i < $integrantes.length; i++) {
        $integrantes[i].remove();
    }

}

function generarIntegrantes($numeroDeItegrantes) {
    for (let i = 1; i <= $numeroDeItegrantes; i++) {

        //esta sección crea los label/input + un *nuevo* <div> donde ponerlos
        const $nodoLabel = document.createElement('label');
        $nodoLabel.innerHTML = `Ingrese la edad del integrante n° #${i}`;

        const $nodoInput = document.createElement('input');
        $nodoInput.classList.add("edad-integrantes");

        const $div = document.createElement('div');
        $div.className = 'integrante';


        //esta sección los mete al div
        $div.appendChild($nodoLabel);
        $div.appendChild($nodoInput);

        //aquí introducimos todo lo que creamos en el <div> vacio del HTML
        const $integrantes = document.querySelector('#integrantes');
        $integrantes.appendChild($div);
    }

    //Mostrar botón
    document.querySelector('#boton-imprimir-respuestas').disabled = false;
    return false;
}

//Acá voy a tratar de resetear el programa con algunas funciones
document.querySelector("#resetear").onclick = function () {
    resetearPrograma();
}

function resetearPrograma() {
    borrarIntegrantes();
    ocultarBotonCalculo();
    ocultarResultados();
    return false;
}

function ocultarBotonCalculo() {
    document.querySelector('#boton-imprimir-respuestas').disabled = true;
    return false;
}

function ocultarResultados() {
    document.querySelector('#respuestas').className = 'oculto';
}

document.querySelector("#boton-imprimir-respuestas").onclick = function () {

    let $conjuntoDeEdades = document.querySelectorAll('.edad-integrantes');

    calcularPromedio($conjuntoDeEdades);
    calcularNumeroMayor($conjuntoDeEdades);
    calcularNumeroMenor($conjuntoDeEdades);
    
    mostrarResultados();

}

function mostrarResultados () {
    document.querySelector('#respuestas').className = '';
}
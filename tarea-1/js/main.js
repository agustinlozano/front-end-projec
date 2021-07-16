/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados (investigar cómo en MDN).
*/


document.querySelector("#cargar-integrantes").onclick = function (event) {
    event.preventDefault();
    const $numeroDeItegrantes = Number(document.querySelector("#numero-integrantes").value);
    borrarIntegrantes();
    modificarBotonImprimir('');
    evaluarIntegrantes($numeroDeItegrantes);
}

function evaluarIntegrantes($numeroDeItegrantes) {
    if ($numeroDeItegrantes > 0) {
        generarIntegrantes($numeroDeItegrantes);
        return '';

    } else {
        resetearPrograma();
        return 'Este campo debe incluir un numero positivo mayor que cero';
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
        $nodoInput.className = 'edad-integrantes btn-input';

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
    document.querySelector('#imprimir-respuestas').disabled = false;
    return false;
}

//Acá voy a tratar de resetear el programa
document.querySelector("#resetear").onclick = function () {
    resetearPrograma();
}

function resetearPrograma() {
    borrarIntegrantes();
    modificarBotonImprimir('oculto');
    modificarResultados('oculto');
    resetearInput();
    return false;
}

document.querySelector("#imprimir-respuestas").onclick = function () {
    let $conjuntoDeEdades = document.querySelectorAll('.edad-integrantes');

    calcularPromedio($conjuntoDeEdades);
    calcularNumeroMayor($conjuntoDeEdades);
    calcularNumeroMenor($conjuntoDeEdades);
    
    modificarResultados('');
}

function modificarBotonImprimir(estado) {
    const $botonRespuestas  = document.querySelector('#imprimir-respuestas');
    $botonRespuestas.className = `btn-input ${estado}`;
}

function modificarResultados(estado) {
    const $resultados = document.querySelectorAll('.resultado');
    $resultados.forEach(function(index){
        index.className = `resultado ${estado}`;
    });
}

function resetearInput() {
    const $nodoInput = document.querySelector('#numero-integrantes');
    $nodoInput.value = '';
}
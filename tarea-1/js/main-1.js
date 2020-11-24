/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados (investigar cómo en MDN).
*/


document.querySelector("#boton-cargar-numero-integrantes").onclick = function () {
    const $numeroDeItegrantes = Number(document.querySelector("#holder-numero-de-integrantes").value);
    evaluarIntegrantes($numeroDeItegrantes);
}

function evaluarIntegrantes($numeroDeItegrantes) {
    if ($numeroDeItegrantes > 0) {
        generarIntegrantes($numeroDeItegrantes);
    } else {
        resetearPrograma();
    }

}

function generarIntegrantes($numeroDeItegrantes) {
    for (let i = 1; i <= $numeroDeItegrantes; i++) {

        //esta sección crea los label/input/br
        const $nodoLabel = document.createElement('label');
        $nodoLabel.innerHTML = `Ingrese la edad del integrante n° #${i}`;

        const $saltoDeLinea = document.createElement('br');

        const $nodoInput = document.createElement('input');
        $nodoInput.classList.add("edad-integrantes");


        //esta sección los muestra
        document.querySelector('#integrantes').appendChild($nodoLabel);
        document.querySelector('#integrantes').appendChild($saltoDeLinea);
        document.querySelector('#integrantes').appendChild($nodoInput);
        document.querySelector('#integrantes').appendChild($saltoDeLinea);

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
    return false;
}

function borrarIntegrantes() {
    const $integrantes = document.querySelector('#integrantes');
    $integrantes.remove();
}

function ocultarBotonCalculo() {
    document.getElementById('boton-imprimir-respuestas').disabled = true;
    return false;
}

document.querySelector("#boton-imprimir-respuestas").onclick = function () {

    let $conjuntoDeEdades = document.querySelectorAll('.edad-integrantes');

    calcularPromedio();
    calcularNumeroMayor();
    calcularNumeroMenor();
    // numeroMasFrecuente();


    function calcularPromedio() {
        let arrayDeNumeros = [];

        for (let i = 0; i < $conjuntoDeEdades.length; i++) {
            arrayDeNumeros.push(Number($conjuntoDeEdades[i].value));
        }

        let total = 0;

        for (i = 0; i < arrayDeNumeros.length; i++) {
            let elementoArray = arrayDeNumeros[i];
            total = total + elementoArray;
        }

        let $contenidoEm = document.querySelector("#promedio");

        valorPromedio = total / arrayDeNumeros.length;

        $contenidoEm.innerText = `El promedio de edades es: ${valorPromedio}`;

    }


    function calcularNumeroMayor() {
        let numeroMayor;
        let comparador = 0;

        for (let i = 0; i < $conjuntoDeEdades.length; i++) {
            let numeroAnalizado = Number($conjuntoDeEdades[i].value);

            if (numeroAnalizado >= comparador) {
                numeroMayor = numeroAnalizado;
                comparador = numeroMayor;
            }
        }

        let $contenidoEm = document.querySelector("#numero-mas-grande");

        $contenidoEm.innerText = `La mayor edad es: ${numeroMayor}`;
    }


    function calcularNumeroMenor() {
        let numeroMenor;
        let comparador = 9999999; //limite

        for (let i = 0; i < $conjuntoDeEdades.length; i++) {
            let numeroAnalizado = Number($conjuntoDeEdades[i].value);

            if (numeroAnalizado <= comparador) {
                numeroMenor = numeroAnalizado;
                comparador = numeroMenor;
            }
        }

        let $contenidoEm = document.querySelector("#numero-mas-chico");

        $contenidoEm.innerText = `La menor edad es: ${numeroMenor}`;
    }


}
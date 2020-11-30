/*
TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels para completar el salario anual de cada integrante de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, menor salario anual, salario anual promedio y salario mensual promedio.

Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
*/

let contadorIntegrantes = 0;

document.querySelector('#agregar-integrante').onclick = function (event) {
    crearNuevoIntegrante(contadorIntegrantes);
    mostrarContenedorDeIntegrantes();
    mostrarBotonCalcular();

    event.preventDefault();
}

function crearNuevoIntegrante(contadorIntegrantes) {
    contadorIntegrantes++;

    const $nodoLabel = document.createElement('label');
    $nodoLabel.innerHTML = `Salario anual integrante #${contadorIntegrantes}`;

    const $nodoInput = document.createElement('input');
    $nodoInput.classList.add("edad-integrante");
    $nodoInput.type = 'number';

    const $div = document.createElement('div');
    $div.className = 'integrante';

    $div.appendChild($nodoLabel);
    $div.appendChild($nodoInput);

    mostrarNuevoIntegrante($div);

    actualizarValorDelContadorDeIntegrantes();

}

function mostrarNuevoIntegrante($div) {
    const $integrantes = document.querySelector('#contenedor-total-integrantes');
    $integrantes.appendChild($div);
}

function actualizarValorDelContadorDeIntegrantes() {
    contadorIntegrantes++;
    return contadorIntegrantes;
}

function mostrarContenedorDeIntegrantes() {
    document.querySelector('#contenedor-total-integrantes').className = '';
}

function mostrarBotonCalcular() {
    document.querySelector('#realizar-calculos').className = '';
}


document.querySelector('#quitar-integrante').onclick = function (event) {
    quitarUltimoIntegrante();

    event.preventDefault();
}

function quitarUltimoIntegrante() {
    const $integrantes = document.querySelectorAll('.integrante');
    if (contadorIntegrantes > 0) {
        contadorIntegrantes = contadorIntegrantes - 1;
        $integrantes[contadorIntegrantes].remove();
    } else {
        return false;
    }
}

document.querySelector('#realizar-calculos').onclick = function (event) {
    let arrayDeSalariosAnuales = [];
    recorrerNodeListDeIntegrantes(arrayDeSalariosAnuales);
    llamarFucionesDeCalculos(arrayDeSalariosAnuales);

    event.preventDefault();
}

function recorrerNodeListDeIntegrantes(arrayDeSalariosAnuales) {
    const $integrantes = document.querySelectorAll('.edad-integrante');
    for (let i = 0; i < $integrantes.length; i++) {
        let evaluarElemento = $integrantes[i];
        if (evaluarElemento.value !== '') {
            arrayDeSalariosAnuales.push(Number(evaluarElemento.value));
        }
    }

}

function llamarFucionesDeCalculos(arrayDeSalariosAnuales) {
    mostrarSalarios('mayor', mayorSalario(arrayDeSalariosAnuales));
    mostrarSalarios('menor', menorSalario(arrayDeSalariosAnuales));
    mostrarPromedios('salario-anual', salarioAnualPromedio(arrayDeSalariosAnuales));
    mostrarPromedios('salario-mensual', salarioMensualPromedio(arrayDeSalariosAnuales));
    mostrarNodoConResultados();
}

function mostrarSalarios(tipo, valor) {
    document.querySelector(`#${tipo}-salario`).textContent = valor;
}

function mostrarPromedios(tipo, valor) {
    document.querySelector(`#${tipo}-promedio`).textContent = valor;
}

function mostrarNodoConResultados () {
    document.querySelector('#respuestas').className = '';
}
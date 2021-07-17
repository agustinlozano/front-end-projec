/*
TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels para completar el salario anual de cada integrante de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, menor salario anual, salario anual promedio y salario mensual promedio.

Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
*/

let contadorIntegrantes = 0;

document.querySelector('#agregar-integrante').onclick = function (event) {
    event.preventDefault();

    crearNuevoIntegrante(contadorIntegrantes);
    mostrarContenedorDeIntegrantes();
    mostrarBotonCalcular();
}

function crearNuevoIntegrante(contadorIntegrantes) {
    contadorIntegrantes++;

    const $nodoLabel = document.createElement('label');
    const $nodoSpan = document.createElement('span');
    
    $nodoSpan.className = 'highlighted';
    $nodoSpan.innerHTML = `#${contadorIntegrantes}`;
    $nodoLabel.innerHTML = `Salario anual integrante `;

    const $nodoInput = document.createElement('input');
    $nodoInput.classList.add("salario-integrante");
    $nodoInput.type = 'number';

    const $div = document.createElement('div');
    $div.className = 'integrante';

    $nodoLabel.appendChild($nodoSpan);
    $div.appendChild($nodoLabel);
    $div.appendChild($nodoInput);

    mostrarNuevoIntegrante($div);

    incrementarCantidadIntegrates();

}

function mostrarNuevoIntegrante($div) {
    const $integrantes = document.querySelector('#contenedor-integrantes');
    $integrantes.appendChild($div);
}

function incrementarCantidadIntegrates() {
    contadorIntegrantes++;
    return contadorIntegrantes;
}

function mostrarContenedorDeIntegrantes() {
    document.querySelector('#contenedor-integrantes').className = '';
}

function mostrarBotonCalcular() {
    document.querySelector('#realizar-calculos').className = 'btn ';
}

document.querySelector('#quitar-integrante').onclick = function (event) {
    event.preventDefault();
    
    quitarUltimoIntegrante();
}

function quitarUltimoIntegrante() {
    const $integrantes = document.querySelectorAll('.integrante');
    if (contadorIntegrantes > 0) {
        contadorIntegrantes = contadorIntegrantes - 1;
        $integrantes[contadorIntegrantes].remove();
    }

    if (contadorIntegrantes == 0) {
        const $botonCalcular = document.querySelector('#realizar-calculos');
        $botonCalcular.className = 'btn oculto';
    }
}

document.querySelector('#realizar-calculos').onclick = function (event) {
    event.preventDefault();

    let arrayDeSalariosAnuales = [];
    let arrayDeSalariosMensuales = [];
    pushearSalariosDeLosIntegrantes(arrayDeSalariosAnuales);
    calcularSalariosMensuales(arrayDeSalariosAnuales, arrayDeSalariosMensuales); 
    llamarFucionesDeCalculos(arrayDeSalariosAnuales, arrayDeSalariosMensuales);   
}

function pushearSalariosDeLosIntegrantes(arrayDeSalariosAnuales) {
    const $integrantes = document.querySelectorAll('.salario-integrante');
    for (let i = 0; i < $integrantes.length; i++) {
        let evaluarElemento = $integrantes[i];
        if (evaluarElemento.value  !== '') {
            arrayDeSalariosAnuales.push(Number(evaluarElemento.value));
        }
    }
    return arrayDeSalariosAnuales;
}

function calcularSalariosMensuales(arrayDeSalariosAnuales, arrayDeSalariosMensuales) {
    for (let i = 0; i < arrayDeSalariosAnuales.length; i++) {
        const mesesDelAño = 12;
        let elementoDeArray = arrayDeSalariosAnuales[i];
        let salarioMensual = elementoDeArray / mesesDelAño;
        arrayDeSalariosMensuales.push(Math.round(salarioMensual));
    }
    return arrayDeSalariosMensuales;
} 

function llamarFucionesDeCalculos(arrayDeSalariosAnuales, arrayDeSalariosMensuales) {
    mostrarSalarios('mayor', calcularMayorSalario(arrayDeSalariosAnuales));
    mostrarSalarios('menor', calcularMenorSalario(arrayDeSalariosAnuales));
    mostrarPromedios('salario-anual', calcularPromedio(arrayDeSalariosAnuales));
    mostrarPromedios('salario-mensual', calcularPromedio(arrayDeSalariosMensuales));
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

function mostrarElemento(elemento) {
    document.querySelector(`#${elemento}`).className = '';
}
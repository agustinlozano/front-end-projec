function mayorSalario(arrayDeSalariosAnuales) {
    let comprarador = 0;
    let elementoMayor;
    for (let i = 0; i < arrayDeSalariosAnuales.length; i++) {
        let elementoDeArray = arrayDeSalariosAnuales[i];
        if (elementoDeArray > comprarador) {
            elementoMayor = elementoDeArray;
            comprarador = elementoMayor;
        }
    }
    return elementoMayor;
}

function menorSalario(arrayDeSalariosAnuales) {
    let comprarador = 9999999;
    let elementoMenor;
    for (let i = 0; i < arrayDeSalariosAnuales.length; i++) {
        let elementoDeArray = arrayDeSalariosAnuales[i];
        if (elementoDeArray < comprarador) {
            elementoMenor = elementoDeArray;
            comprarador = elementoMenor;
        }
    }
    return elementoMenor;
}

function salarioAnualPromedio(arrayDeSalariosAnuales) {
    let sumaDeElemntos = 0;
    for (let i = 0; i < arrayDeSalariosAnuales.length; i++) {
        let elementoDeArray = arrayDeSalariosAnuales[i];
        sumaDeElemntos = sumaDeElemntos + elementoDeArray;
    }
    return sumaDeElemntos / arrayDeSalariosAnuales.length;
}

function salarioMensualPromedio(arrayDeSalariosAnuales) {
    let arrayDeSalariosMensuales = [];
    calcularSalarioMensual(arrayDeSalariosAnuales, arrayDeSalariosMensuales);
    return calcularPromedioDeLosSalariosMensuales(arrayDeSalariosMensuales);
}

function calcularSalarioMensual(arrayDeSalariosAnuales, arrayDeSalariosMensuales ) {
    for (let i = 0; i < arrayDeSalariosAnuales.length; i++) {
        let mesesDelAño = 12;
        let elementoDeArray = arrayDeSalariosAnuales[i];
        let salarioMensual = elementoDeArray / mesesDelAño;
        arrayDeSalariosMensuales.push(Math.round(salarioMensual));
    }
    return arrayDeSalariosMensuales;
}   

function calcularPromedioDeLosSalariosMensuales(arrayDeSalariosMensuales) {
    let sumaDeElemntos = 0;
    for (let i = 0; i < arrayDeSalariosMensuales.length; i++) {
        let elementoDeArray = arrayDeSalariosMensuales[i];
        sumaDeElemntos = sumaDeElemntos + elementoDeArray;
    }
    resultadoFinal = sumaDeElemntos / arrayDeSalariosMensuales.length;
    return resultadoFinal;
}
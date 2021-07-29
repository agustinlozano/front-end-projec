function calcularMayor(array) {
    let comprarador = 0;
    let elementoMayor;
    for (let i = 0; i < array.length; i++) {
        let elementoDeArray = array[i];
        if (elementoDeArray > comprarador) {
            elementoMayor = elementoDeArray;
            comprarador = elementoMayor;
        }
    }
    return elementoMayor;
}

function calcularMenor(array) {
    let comprarador = 9999999;
    let elementoMenor;
    for (let i = 0; i < array.length; i++) {
        let elementoDeArray = array[i];
        if (elementoDeArray < comprarador) {
            elementoMenor = elementoDeArray;
            comprarador = elementoMenor;
        }
    }
    return elementoMenor;
}

function calcularPromedio(array) {
    let sumaDeElemntos = 0;
    for (let i = 0; i < array.length; i++) {
        let elementoDeArray = array[i];
        sumaDeElemntos = sumaDeElemntos + elementoDeArray;
    }
    return (sumaDeElemntos / array.length).toFixed(2);
}
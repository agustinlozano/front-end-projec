function calcularPromedio($conjuntoDeEdades) {
    
    let arrayDeNumeros = [];

    for (let i = 0; i < $conjuntoDeEdades.length; i++) {
        arrayDeNumeros.push(Number($conjuntoDeEdades[i].value));
    }

    let total = 0;

    for (i = 0; i < arrayDeNumeros.length; i++) {
        let elementoArray = arrayDeNumeros[i];
        total = total + elementoArray;
    }

    const $resultado = document.querySelector("#promedio span");

    valorPromedio = total / arrayDeNumeros.length;

    $resultado.innerText = `${valorPromedio}`;

}


function calcularNumeroMayor($conjuntoDeEdades) {
    let numeroMayor;
    let comparador = 0;

    for (let i = 0; i < $conjuntoDeEdades.length; i++) {
        let numeroAnalizado = Number($conjuntoDeEdades[i].value);

        if (numeroAnalizado >= comparador) {
            numeroMayor = numeroAnalizado;
            comparador = numeroMayor;
        }
    }

    const $resultado = document.querySelector("#numero-mas-grande span");

    $resultado.innerText = `${numeroMayor}`;
}


function calcularNumeroMenor($conjuntoDeEdades) {
    let numeroMenor;
    let comparador = 9999999; //limite

    for (let i = 0; i < $conjuntoDeEdades.length; i++) {
        let numeroAnalizado = Number($conjuntoDeEdades[i].value);

        if (numeroAnalizado <= comparador) {
            numeroMenor = numeroAnalizado;
            comparador = numeroMenor;
        }
    }

    const $resultado = document.querySelector("#numero-mas-chico span");

    $resultado.innerText = `${numeroMenor}`;
}
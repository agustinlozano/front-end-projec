function probarValidarNumerosDeIntegrantes() {
    console.assert(
        evaluarIntegrantes('8') === '',
        "Evaluar integrantes no funcionó con un número valido"
    );

    console.assert(
        evaluarIntegrantes('-3') === 'Este campo debe incluir un numero positivo mayor que cero',
        "Evaluar integrantes no corroboró que el número sea positivo mayor que cero"
    );


}

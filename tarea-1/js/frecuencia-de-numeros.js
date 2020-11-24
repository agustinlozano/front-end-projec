//Sin terminar, no puedo solucionar la cuestión en la cual dos o mas numeros, con mas repeticion
//se muestren a la vez, solo devuelve el ultimo

function numeroMasFrecuente() {
    //let numeroAnalizado = Number($listaDeNumeros[i].innerText);
    let contador = 0;
    let arrayDeNumerosRepetidos = [];
    let arrayDeNumerosContadores = [];

    for (let i = 0; i < $conjuntoDeEdades.length; i++) {
        let primerElementoAnalizado = Number($conjuntoDeEdades[i].value);
        for (let j = 0; j < $conjuntoDeEdades.length; j++) {
            let segundoElementoAnalizado = Number($conjuntoDeEdades[j].value);
            if (primerElementoAnalizado == segundoElementoAnalizado) {
                contador++; //una vez que termina el for, este contador
            }           //determinará las veces que se repita el número.

        }              //el valor de contador se pushea al arrayDeNumerosContadores,             
       //                             ↓↓
        
        if (contador > 1) {            
            arrayDeNumerosContadores.push(contador);
            contador = 0;
            arrayDeNumerosRepetidos.push(primerElementoAnalizado); 
        }    
            //↑ este array contiene los números de las edades,
        j = 0;                     //responsables de los elementos generados e incluidos en el array anterior.
        contador = 0;
    }

    let numerosDeRepeticion = 2; // inicializa en dos por ser la repeticion minima necesaria.
    let indice;
    for (i = 0; i < arrayDeNumerosContadores.length; i++) {
        let numeroContadorAnalizado = arrayDeNumerosContadores[i];

        if (numeroContadorAnalizado >= numerosDeRepeticion) {
            numerosDeRepeticion = numeroContadorAnalizado;
            indice = i;       
        }        
    }

    const nodoEm = document.createElement('em');
            
    const saltoDeLinea = document.createElement('br');

    document.querySelector('main').appendChild(nodoEm);
    nodoEm.innerText = `El número más frecuente es ${arrayDeNumerosRepetidos[indice]} y el factor de multuplicidad fue ${indice}`;
    document.querySelector('main').appendChild(saltoDeLinea);

}
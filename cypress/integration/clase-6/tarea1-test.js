/// <reference types="cypress" />

// const { each } = require("cypress/types/bluebird");

const URL = 'http://127.0.0.1:5500/tarea-1/tarea-1.html';

context('Tarea uno - Clase 6', () => {
    before(() => {
        cy.visit(URL);
    });

    describe('pruebas para el event handler, cargar interantes', () => {
        it('testea el boton cargar', () => {    
            cy.get('#cargar-integrantes').should('have.attr', 'type', 'submit');
        });

        it('se asegura que no haya integrantes antes de cargar los nuevos', () => {
            cy.get('#integrantes').children().should('have.length', 0);
        });
    });

    describe('prueba la funcionalidad de de la aplicacion', () => {
        const cantidadIntegrantes = generarNumeroEntre(3, 8);
        const edadesInegrantes = [];

        for (let i = 0; i<cantidadIntegrantes; i++) {
            edadesInegrantes[i] = generarNumeroEntre(1, 99);
        }
        
        const resultados = calcularRultados(edadesInegrantes);
        const keys = Object.keys(resultados);
        
        it('se asegura que los integrantes se generen correctamente', () => {
            const VALOR_EJEMPLO = cantidadIntegrantes;
            
            cy.get('#numero-integrantes').type(VALOR_EJEMPLO);
            
            cy.get('#cargar-integrantes').click();

            cy.get('#integrantes').children().should('have.length', VALOR_EJEMPLO);
        });

        it('se asegura que los calculos sean correctos', () => {
            cy.get('.edad-integrantes').each(($integrante, i) => {
                $integrante[0].value = edadesInegrantes[i];
            });

            cy.get('#imprimir-respuestas').click();

            cy.get('.resultado span').each(($resultado, i) => {
                const resultadoApp = Number($resultado[0].innerHTML);
                const resultadoTest = resultados[keys[i]];
                expect(resultadoApp).to.equal(resultadoTest);
            });
        });
    });
});

function generarNumeroEntre(minimo, maximo) {
    const numero = Math.floor(Math.random() * ((maximo + 1) - minimo ) + minimo);
    return numero;
}

function calcularRultados(edadesInegrantes) {
    const resultados = {};

    const mayorEdad = calcularMayor(edadesInegrantes);
    const menorEdad = calcularMenor(edadesInegrantes);
    const promedioEdad = calcularPromedio(edadesInegrantes);

    resultados['promedio'] = promedioEdad;
    resultados['mayor'] = mayorEdad;
    resultados['menor'] = menorEdad;
    
    return resultados;
}

function calcularMayor(array) {
    let numeroMayor;
    let comparador = 0;

    array.forEach(elemento => {
        let numeroAnalizado = elemento;

        if (numeroAnalizado >= comparador) {
            numeroMayor = numeroAnalizado;
            comparador = numeroMayor;
        }
    });

    return numeroMayor;
}

function calcularMenor(array) {
    let numeroMenor;
    let comparador = 999999;

    array.forEach(elemento => {
        let numeroAnalizado = elemento;

        if (numeroAnalizado <= comparador) {
            numeroMenor = numeroAnalizado;
            comparador = numeroMenor;
        }
    });

    return numeroMenor;
}

function calcularPromedio(array) {
    const cantidadIntegrantes = array.length;
    let suma = 0;

    array.forEach(elemento => {
        suma = suma + elemento;
    });
    
    return suma / cantidadIntegrantes;
}
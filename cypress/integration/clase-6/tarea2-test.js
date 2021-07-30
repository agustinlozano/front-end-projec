/// <reference types="cypress" />

const URL = 'http://127.0.0.1:5500/tarea-2/tarea-2.html';

context('Tarea dos - Clase 6', () => {
    before(() => {
        cy.visit(URL);
    });

    describe('pruebas para el event handler, cargar integrante', () => {
        const numeroIntegrantes = generarNumeroEntre(3,8);
        const salariosAnuales = [];

        for (let i = 0; i<numeroIntegrantes; i++) {
            salariosAnuales[i] = generarNumeroEntre(120000, 3000000);
        }
        
        it('se asegura que el boton que dispara el evento exista', () => {
            cy.get('#agregar-integrante').then($addButton => {
                expect($addButton).to.exist;
            });

            cy.get('#agregar-integrante').should('have.attr', 'type', 'submit');
        });

        it('obtiene los outputs de la aplicacion', () => {
            const VALOR_EJEMPLO = numeroIntegrantes;
        
            for (let i = 0; i<VALOR_EJEMPLO; i++) {
                cy.get('#agregar-integrante').click();
            }

            cy.get('#contenedor-integrantes')
                .children()
                .should('have.length', VALOR_EJEMPLO);
            
            cy.get('.salario-integrante').should('have.attr', 'type', 'number');
            
            cy.get('.salario-integrante').each(($annualSalary, i) => {
                $annualSalary[0].value = salariosAnuales[i];
            });

            cy.get('#realizar-calculos').click();
        });

        it('se asegura que los outputs sean correctos', () => {
            const salariosMensuales = [];
            const mesesAnio = 12;
            for (let i = 0; i<numeroIntegrantes; i++) {
                salariosMensuales[i] = salariosAnuales[i] / mesesAnio;
            }
            
            const resultadosTest = calcularRultados(salariosAnuales, salariosMensuales);

            const mayorSalario = resultadosTest.mayor;
            const menorSalario = resultadosTest.menor;
            const promedioSalarios = resultadosTest.promedio;

            cy.get('#mayor-salario').contains(mayorSalario);
            cy.get('#menor-salario').contains(menorSalario);
            cy.get('#salario-anual-promedio').contains(promedioSalarios[0]);
            cy.get('#salario-mensual-promedio').contains(promedioSalarios[1]);
        });
    });
});

function generarNumeroEntre(minimo, maximo) {
    const numero = Math.floor(Math.random() * ((maximo + 1) - minimo ) + minimo);
    return numero;
}


function calcularRultados(salariosAnuales, salariosMensuales) {
    const resultados = {};

    const mayorSalario = calcularMayor(salariosAnuales);
    const menorSalario = calcularMenor(salariosAnuales);
    const promedioSalarioAnual = calcularPromedio(salariosAnuales);
    const promedioSalarioMensual = calcularPromedio(salariosMensuales);

    resultados['promedio'] = [promedioSalarioAnual, promedioSalarioMensual];
    resultados['mayor'] = mayorSalario;
    resultados['menor'] = menorSalario;
    
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
    let comparador = 3000000;

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
    
    return (suma / cantidadIntegrantes).toFixed(2);
}
/// <reference types="cypress" />

const URL = 'http://127.0.0.1:5500/tarea-1/tarea-1.html';

context('Tarea uno - Clase 6', () => {
    before(() => {
        cy.visit(URL);
    });

    describe('pruebas para el event handler cargar interantes', () => {
        it('testea el boton cargar', () => {    
            const $botonCargar = cy.get('#cargar-integrantes');
            expect($botonCargar).to.exist;
            
            $botonCargar.should('have.attr', 'type', 'submit');
        });

        it('se asegura que no haya integrantes antes de cargar los nuevos', () => {
            cy.get('form #integrantes').children().should('have.length', 0);
        });
        
        it('se asegura que los integrantes se generen correctamente', () => {
            const $input = cy.get('#numero-integrantes');
            const VALOR_EJEMPLO = 3;
            
            $input.type(VALOR_EJEMPLO);
            cy.get('#cargar-integrantes').click();

            cy.get('#integrantes').children().should('have.length', VALOR_EJEMPLO);
        });
    });


});
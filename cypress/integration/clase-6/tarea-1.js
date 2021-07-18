const URL = 'http://127.0.0.1:5500/';

context('Pagina principal', () => {
    before(() => {
        cy.visit(URL);
    });

    describe('Pruebas en la seccion: presentacion', () => {
        it('Se asegura que los iconos existan', () => {
            const NUMERO_ICONOS = 3;
            const $ICONOS = cy.get('.icon-box').find('i');

            expect($ICONOS).to.exist;
            $ICONOS.should('have.length', NUMERO_ICONOS);
            $ICONOS.should('be.visible');
        });
    });

    describe('Pruebas en la seccion: work', () => {
        const NUMERO_TAREAS = 2;
    
        it('Se asegura que hayan dos tareas', () => {
            cy.get('.row').find('.tarea').should('have.length', NUMERO_TAREAS);
        });
    
        it('Se asegura que las imagenes miniatura existan', () => {
            const $TAREA = cy.get('.tarea').find('img');
            
            expect($TAREA).to.exist;
            $TAREA.should('be.visible');
        });
    });

    describe('Pruebas en la seccion: footer', () => {
        it('Se asegura que los iconos existan', () => {
            const NUMERO_ICONOS = 2;
            const $ICONOS = cy.get('#footer').find('i');

            expect($ICONOS).to.exist;
            $ICONOS.should('have.length', NUMERO_ICONOS);
            $ICONOS.should('be.visible')
        });
    });
});
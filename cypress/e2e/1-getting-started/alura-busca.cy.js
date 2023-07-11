describe('alura busca curso', () => {

    beforeEach(() => {
        cy.visit('https://www.alura.com.br');
    })
    
    it('buscar curso de java', () => {
        cy.get('#header-barraBusca-form-campoBusca').type('java');
        cy.get('.header__nav--busca-submit').click();
        cy.get('h4.busca-resultado-nome')
            .should('contain', 'Formação Java e Spring Boot T5 - ONE');
    })

    it('buscar curso de Cypress', () => {
        cy.get('#header-barraBusca-form-campoBusca').type('Cypress');
        cy.get('.header__nav--busca-submit').click();
        cy.get('h4.busca-resultado-nome')
            .should('contain', 'Curso Cypress: automação de testes E2E')
            
    })
})
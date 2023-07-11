describe('Login e registro de usuarios alura pic',() => {

    beforeEach(() => {
        cy.visit('https://alura-fotos.herokuapp.com')
    })

    it('verifica mensagens de validacao', () => {
        cy.contains('a', 'Register now').click(); 
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Email is required!').should('be.visible');
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Full name is required!').should('be.visible');
        cy.contains('ap-vmessage', 'User name is required!').should('be.visible');
        cy.contains('ap-vmessage', 'Password is required!').should('be.visible');
        cy.contains('ng-component','Register to embrace a new world!').should('be.visible');
    })

    it('verifica mensagem de email inválido', () => {
        cy.contains('a', 'Register now').click(); 
        cy.contains('button', 'Register').click();
        cy.get('input[formcontrolname="email"]').type('edinete');
        cy.contains('ap-vmessage', 'Invalid e-mail').should('be.visible');

    })

    it('verifica mensagem de usuário inválido', () => {
        cy.contains('a', 'Register now').click(); 
        cy.contains('button', 'Register').click();
        cy.get('input[formcontrolname="userName"]').type('EDINETE');
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Must be lower case').should('be.visible');

    })

    
})
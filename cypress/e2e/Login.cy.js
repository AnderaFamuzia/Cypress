const { type } = require("os")

describe('Login', () => {
    it('Successfully open login page', () => {
        cy.visit('http://localhost/azuan-web-application-master/login')


        // cy.get('.img-fluid').should('be.visible').and('exist')
        // cy.get('.h4').should('contain', 'Welcome Back!').and('exist')
        // cy.get('#exampleInputEmail').should('be.visible')
        // cy.get('#exampleInputEmail').type('anasfebrian0@gmail.com')
        // cy.get('#exampleInputPassword').should('be.visible')
        // cy.get('#exampleInputPassword').type('anas123')
        // cy.get('.btn').should('be.visible').and('exist')
        // cy.get('.btn').click()

    })

    it('Check component login page', () => {
        cy.get('.card-body').should('contain', 'Login').and('exist')
        cy.get('.text-muted').should('contain', 'Sign In to your account').and('exist')
        cy.get('.c-icon').should('be.visible')
        cy.get('#username').should('be.visible')
        cy.get('.c-icon').should('be.visible')
        cy.get('#password').should('be.visible')
        cy.get('.btn').should('be.visible')

    })


    it('Login with correct values', () => {
        cy.get('.card-body').should('contain', 'Login').and('exist')
        cy.get('.text-muted').should('contain', 'Sign In to your account').and('exist')
        cy.get('.c-icon').should('be.visible')
        cy.get('#username').should('be.visible')
        cy.get('.c-icon').should('be.visible')
        cy.get('#username').type('andera12345@gmail.com')
        cy.get('#password').should('be.visible')
        cy.get('#password').type('12345678')
        cy.get('.btn').should('be.visible')
        cy.get('.btn').click()

    })

    it('Login with wrong values', () => {
        cy.visit('http://localhost/azuan-web-application-master/login')
        cy.get('.card-body').should('contain', 'Login').and('exist')
        cy.get('.text-muted').should('contain', 'Sign In to your account').and('exist')
        cy.get('.c-icon').should('be.visible')
        cy.get('#username').should('be.visible')
        cy.get('.c-icon').should('be.visible')
        cy.get('#username').type('wrong@gmail.com')
        cy.get('#password').should('be.visible')
        cy.get('#password').type('wrong123')
        cy.get('.btn').should('be.visible')
        cy.get('.btn').click()
        cy.on("window:alert", (text) => {
            expect(text).to.contains('Login failed')
        });

    })

    it('Login with null values', () => {
        cy.visit('http://localhost/azuan-web-application-master/login')
        cy.get('.card-body').should('contain', 'Login').and('exist')
        cy.get('.text-muted').should('contain', 'Sign In to your account').and('exist')
        cy.get('.c-icon').should('be.visible')
        cy.get('#username').should('be.visible')
        cy.get('.c-icon').should('be.visible')
        cy.get('#password').should('be.visible')
        cy.get('.btn').should('be.visible')
        cy.get('.btn').click()
        cy.on("window:alert", (text) => {
            expect(text).to.contains('Isi Isian ini')
        });

    })
})
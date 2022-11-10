describe('Elektronik Halaman', () => {
  it('Searching positive', () => {

    cy.visit('https://www.bukalapak.com/')

    cy.get('#v-omnisearch').type('radio')

    cy.get('.v-omnisearch__submit').click()

    cy.get('.mt-12').contains('Radio')

    cy.get('.bl-flex-item').should('be.visible')

  })
  it('count the card display', () => {

    cy.get(".bl-flex-item").should('have.length', 38)
  })

})
describe('Filter', () => {
    it('filter Populer', () => {
        cy.visit('https://www.bukalapak.com/products?from=omnisearch&from_keyword_history=false&search%5Bkeywords%5D=radio&search_source=omnisearch_keyword&source=navbar')
        cy.get('.bl-flex-item').contains('Filter')
        // cy.get('mb-4').contains('Filter Populer')
        // cy.get("input#te-filter-popular-1").should('be.visible')
        cy.get(".te-filter-popular-1").check().should('be.checked')
    })
})
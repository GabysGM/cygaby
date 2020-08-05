describe('Submit Form', () => {
  it('Should write a developer name', () => {
    cy.visit('https://devexpress.github.io/testcafe/example/')
    cy.get('#populate').click()
    cy.get('#continuous-integration-embedding').click()
    cy.get('#tried-test-cafe').click()
    cy.get('#preferred-interface').select('JavaScript API')
    cy.get('#slider').contains('6').click()
    cy.get('#submit-button').click()
    cy.get('#article-header').should('contain', 'Thank you')
  })
})

import { defineStep } from 'cypress-cucumber-preprocessor/steps'

defineStep('I want to wait for {int}', (time) => {
  cy.wait(time)
})

defineStep('I see the tittle contains {string}', (title) => {
  cy.title().should('contain', title)
})

defineStep('I see URL contains {string}', (url) => {
  cy.url().should('contain', url)
})

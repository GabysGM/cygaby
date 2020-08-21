/// <reference types="Cypress" />
import { apiUrl } from '../../config'

describe('Api test with Cypress', () => {
  it('This Api_Test should validate the headers', () => {
    cy.request('https://pokeapi.co/api/v2/pokemon/25').as('pikachu')
    cy.get('@pikachu')
      .its('headers')
      .its('content-type')
      .should('include', 'application/json; charset=utf-8')
  })

  it('This Api_Test should validate the status code', () => {
    cy.request(apiUrl).as('pikachu')
    cy.get('@pikachu').its('status').should('equal', 200)
  })

  it('This Api_Test should validate name value', () => {
    cy.request(apiUrl).as('pikachu')
    cy.get('@pikachu').its('body').should('include', { name: 'pikachu' })
  })

  it('This Api_Test validate a negative status code', () => {
    cy.request({
      method: 'GET',
      url: 'https://pokeapi.co/api/v2/pokemon/100',
      failOnStatusCode: false,
    }).as('pikachu')
    cy.get('@pikachu').its('status').should('equal', 404)
  })
})

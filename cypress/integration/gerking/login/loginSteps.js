import { Given, Then, When } from 'cypress-cucumber-preprocessor/steps'
import LoginPage from './loginPage'

Given('I open the page', () => {
  LoginPage.visit()
})

When('I fill user with {string}', (username) => {
  LoginPage.fillUsername(username)
})

When('I fill password with {string}', (password) => {
  LoginPage.fillPassword(password)
})

When('I click on submit', () => {
  LoginPage.submmit()
})

Then('I should see the homepage', () => {
  const URL = 'http://zero.webappsecurity.com/bank/account-summary.html'
  LoginPage.checkURL(URL)
  cy.get('#account_summary_tab').should('be.visible')
})

Then('I should see the error message', () => {
  LoginPage.shouldSeeMsgError()
})

import BasePage from '../BasePage'

export default class LoginPage extends BasePage {
  static login(username, password) {
    cy.login(username, password)
  }

  static forgotPassword() {
    cy.get('Forgot your password ?').select()
  }

  static displayErrorMsg() {
    cy.isVisible('.alert-error')
  }

  static afterLoginURL() {
    cy.url().contains('account-summary')
  }
}

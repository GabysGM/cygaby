const URL = 'http://zero.webappsecurity.com/login.html'
const USER_INPUT = '#user_login'
const PASSWORD_INPUT = '#user_password'
const SUBMMIT_BUTTON = 'input[type="submit"]'
const URL_CHECK = 'http://zero.webappsecurity.com/bank/account-summary.html'
const ERROR_MSG = '.alert-error'

class LoginPage {
  static visit() {
    cy.visit(URL)
  }

  static fillUsername(name) {
    cy.get(USER_INPUT).type(name)
  }

  static fillPassword(password) {
    cy.get(PASSWORD_INPUT).type(password)
  }

  static submmit() {
    cy.get(SUBMMIT_BUTTON).click()
  }

  static checkURL() {
    cy.url().should('contain', URL_CHECK)
  }

  static shouldSeeMsgError() {
    cy.get(ERROR_MSG).contains('Login and/or password are wrong.')
  }
}

export default LoginPage

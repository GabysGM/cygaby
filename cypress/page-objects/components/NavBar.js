export default class NavBar {
  static clickLogo() {
    cy.get('.brand').click()
  }

  static search(text) {
    cy.get('#searchTerm').type(`${text} {enter}`)
  }

  static clickSingIn() {
    cy.get('#signin_button').click()
  }

  static displaySigninButton() {
    cy.isVisible('#signin_button')
  }

  static settings() {
    cy.contains('Settings').click()
  }

  static logOut() {
    cy.contains('username').click()
    cy.get('#logout_link').click()
  }
}

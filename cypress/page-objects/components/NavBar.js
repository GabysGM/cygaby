export default class NavBar {
  static clickLogo() {
    cy.get('.brand').click()
  }

  static search(text) {
    cy.get('#searchTerm').type(`${text} {enter}`)
  }

  static signIn() {
    cy.get('#signin_button').click()
  }
}

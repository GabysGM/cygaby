export default class AccountBar {
  static summary() {
    cy.get('#account_summary_tab').click()
  }

  static activity() {
    cy.get('#account_activity_tab').click()
  }

  static transferFunds() {
    cy.get('#transfer_funds_tab').click()
  }

  static payBills() {
    cy.get('#pay_bills_tab').click()
  }

  static moneyMap() {
    cy.get('#money_map_tab').click()
  }

  static onlineStatements() {
    cy.get('#online_statements_tab').click()
  }
}

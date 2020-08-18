import BasePage from '../BasePage'
import { feedbackUrl } from '../../../config'

export default class FeedbackPage extends BasePage {
  static load() {
    cy.visit(feedbackUrl)
  }

  static submitFeedback() {
    cy.fixture('feedback').then((data) => {
      cy.get('#name').type(data.feedbName)
      cy.get('#email').type(data.feedbEmail)
      cy.get('#subject').type(data.feedbSubject)
      cy.get('#comment').type(data.feedbMessage)
      cy.get('.btn-signin.btn.btn-primary').click()
    })
  }
}

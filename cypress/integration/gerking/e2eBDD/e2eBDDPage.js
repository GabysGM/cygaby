const URL = 'http://zero.webappsecurity.com/feedback.html'
const NAME = '#name'
const MAIL = '#email'
const SUBJECT = '#subject'
const COMMENTS = '#comment'
const SUBMIT_BUTTON = 'input[type="submit"]'

class FeedBack {
  static visit() {
    cy.visit(URL)
  }

  static fillForm() {
    cy.get(NAME).type('name lastname')
    cy.get(MAIL).type('mail@mail.com')
    cy.get(SUBJECT).type('This is a subject')
    cy.get(COMMENTS).type('The comments goes here')
  }

  static submit() {
    cy.get(SUBMIT_BUTTON).click()
  }
}

export default FeedBack

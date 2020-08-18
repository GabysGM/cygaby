import FeedbackPage from '../../page-objects/pages/FeedbackPage'

describe('Feedback page', () => {
  before(() => {
    FeedbackPage.load()
  })

  it('Should submit', () => {
    FeedbackPage.submitFeedback()
  })
})

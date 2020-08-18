import { homeUrl, log_user, log_pass } from '../../../config'
import NavBar from '../../page-objects/components/NavBar'
import LoginPage from '../../page-objects/pages/LoginPage'

describe('Login Failed', () => {
  before(() => {
    cy.visit(homeUrl)
    NavBar.clickSingIn()
  })

  it('Should display error message with wrong credentials', () => {
    LoginPage.login('wronguser', 'wrongpass')
    LoginPage.displayErrorMsg()
  })
})

describe('Login Success', () => {
  before(() => {
    cy.visit(homeUrl)
    NavBar.clickSingIn()
  })

  it('Should login', () => {
    LoginPage.login(log_user, log_pass)
    LoginPage.afterLoginURL()
  })

  it('Should logout', () => {
    NavBar.logOut()
    NavBar.displaySigninButton()
  })
})

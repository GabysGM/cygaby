import { Given, Then, When } from 'cypress-cucumber-preprocessor/steps'
import FeedBack from './e2eBDDPage'

Given('I open feedback page', () => {
  FeedBack.visit()
})

When('I fill feedback form', () => {
  FeedBack.fillForm()
})

When('I click on submit button', () => {
  FeedBack.submit()
})

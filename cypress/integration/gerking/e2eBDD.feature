Feature: e2eBDD

  As a customer
  I want submit a feedback form

  Scenario: Send feedback form
    Given I open feedback page
    When I fill feedback form
    And I click on submit button
    Then I see URL contains "/sendFeedback.html"
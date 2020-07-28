Feature: Login in app

  Visit a page and log into the application

  Scenario: Invalid login
    Given I open the page
    When I fill user with "Invalid username"
    And I fill password with "Invalid password"
    And I click on submit
    Then I should see the error message

  @focus
  Scenario: Valid login
    Given I open the page
    And I want to wait for 2000
    And I see the tittle contains "Zero"
    When I fill user with "username"
    And I fill password with "password"
    And I click on submit
    Then I should see the homepage
    And I see URL contains "account-summary.html"




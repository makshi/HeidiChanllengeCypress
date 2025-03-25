Feature: Login functionality

  Scenario: User logs in with valid credentials
    
    Given I visit the login page
    When I enter valid credentials
    Then I should see the dashboard
    Given I click on new session

Feature: End to End Flow

Scenario: Create a new session and verify file upload and edit actions
    Given I visit the login page
    When I enter valid credentials
    Then I should see the dashboard
    Given I click on new session
    And select Upload session audio option from start transcribing 
    Then I wait for dialog to appear
    And I upload file and wait for completion
    Then I verify both Note and Referral letter tabs are created
    And I verify both tabs contain data
    And I select note tab and click view-edit tempalte from ellipses dropdown
    Then I wait for edit template dialog to appear
    And I make changes in Title and append Text
    Then I click on save and use button
    And Wait for New referral letter to be generated 
    Then I verify the updated text
    Given I click on LogOut
    Then I verify user is back to login page     


    



Feature: Login

    Scenario: Login with valid credentials

        Given I open the login URL
        When I login with the valid login credentials
        Then I Should see Secure Area text
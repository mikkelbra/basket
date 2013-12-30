Feature: Your first feature

  Scenario: Showing frontpage
    Given I go to "http://localhost:8080/app_dev.php/mikkel/mainpage"
    Then I should not see "Fejl"
    Then I should not see "Car - Pris"
   	
 Scenario: Adding car to barsket 
    Given I go to "http://localhost:8080/app_dev.php/mikkel/mainpage"
    Then I press "Add car"
    Then I should see "Car - Pris"

 Scenario: Adding car to barsket 
    Given I go to "http://localhost:8080/app_dev.php/mikkel/mainpage"
    Then I press "Add car"
    Then I should see "Car - Pris"
    Then I press "remove car"
    Then I should not see "Car - Pris"

 Scenario: remove car from barsket 
    Given I go to "http://localhost:8080/app_dev.php/mikkel/mainpage"
    Then I press "Add car"
    Then I should see "Car - Pris"
    Then I press "remove car"
    Then I should not see "Car - Pris"

 Scenario: Show barsket  
    Given I go to "http://localhost:8080/app_dev.php/mikkel/mainpage"
    Then I should not see "House - kr. 10 - remove"
    Then I press "Add House"
    Then I follow "Indbo"
    Then I press "Show"
    Then I should see "House - kr. 10 - remove"

Scenario: Show barsket  
    Given I go to "http://localhost:8080/app_dev.php/mikkel/mainpage"
    Then I should not see "House - kr. 10 - remove"
    Then I press "Add House"
    Then I follow "Indbo"
    Then I press "Show"
    Then I should see "House - kr. 10 - remove"
    Then I press "Hide"
    Then I should not see "House - kr. 10 - remove"

Scenario: Edit car
    Given I go to "http://localhost:8080/app_dev.php/mikkel/mainpage"
    Then I press "Add car"
    Then I should see "rke: Audi"
    Then I should not see "rke: WV"
    When I fill in "carb" with "WV"
    Then I press "Rediger bil" 
    Then I should see "rke: WV"

Scenario: topdanmark.dk
    Given I go to "https://www2.topdanmark.dk/"
    Then I should see "bla bla bla"




	
	

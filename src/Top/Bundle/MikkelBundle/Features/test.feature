Feature: Your first feature
  
 Scenario: Adding car to barsket 
    Given I go to "http://localhost:8080/app_dev.php/mikkel/mainpage"
    Then I press "addCar"
    Then I should see "Car - Pris"

 Scenario: Adding car to barsket 
    Given I go to "http://localhost:8080/app_dev.php/mikkel/mainpage"
    Then I press "addCar"
    Then I should see "Car - Pris"
    Then I press "removeCar"
    Then I should not see "Car - Pris"

 Scenario: remove car from barsket 
    Given I go to "http://localhost:8080/app_dev.php/mikkel/mainpage"
    Then I press "addCar"
    Then I should see "Car - Pris"
    Then I press "removeCar"
    Then I should not see "Car - Pris"

 Scenario: Show barsket  
    Given I go to "http://localhost:8080/app_dev.php/mikkel/mainpage"
    Then I should not see "House - kr. 10"
    Then I press "addHouse"
    Then I follow "Indbo"
    Then I press "show"
    Then I should see "House - kr. 10"

Scenario: Show and hide barsket  
    Given I go to "http://localhost:8080/app_dev.php/mikkel/mainpage"
    Then I should not see "House - kr. 10"
    Then I press "addHouse"
    Then I follow "Indbo"
    Then I press "show"
    Then I should see "House - kr. 10"
    Then I press "hide"
    Then I should not see "House - kr. 10"

Scenario: Edit car
    Given I go to "http://localhost:8080/app_dev.php/mikkel/mainpage"
    Then I press "addCar"
    Then I should not see "rke: WV"

Scenario: Add 3 element
    Given I go to "http://localhost:8080/app_dev.php/mikkel/mainpage"
    Then I press "addCar"
    And I press "addDog"
    And I press "addHouse"
    Then I should see "kurv ( 3 )"

Scenario: topdanmark.dk
    Given I go to "https://www2.topdanmark.dk/"
    Then I should not see "FEJL"

<?php
 session_start();
 $my_array = array();
        
$_SESSION['Forsikringer']=$my_array;

function ini(){
return "Mikkel";
}
 


 function first($string){ //function parameters, two variables.
 array_push($_SESSION['Forsikringer'], $string);
 echo "I array nummer 0:";
 echo $_SESSION['Forsikringer'][0];
 echo "Slut:";

 // $_SESSION['Navn'][0] = "test";
 // $arrlength=count($_SESSION['Navn']);




//     if ($string == "1")
//         {
//         echo "Hej test";
//         $_SESSION['Navn1'] = "1";
//         if ($_SESSION['Navn1'] == string)
//         {
//             echo "Hej mikkel"; 
//         }
//        }
           
//     echo $_SESSION['Navn1'];
         //echo $_SESSION['Navn'];    
    
     if(isset($_SESSION['Navn']) == false)
     {
     $_SESSION['Navn'] = $string;
     echo "ok";
     echo $_SESSION['Navn'];
     echo "ok";
     }
    else {
        echo "Du er ny"; 
     }
    
    return $string;  //returns the second argument passed into the function
  }
  
  function addForsikring($string){ //function parameters, two variables.
      
    return $string;  //returns the second argument passed into the function
  }
  
  function NavnSamme($string){ //function parameters, two variables.
    
      if ($_SESSION['Navn'] == $string)
          return true;
      else 
          return false;
      return true;
      //returns the second argument passed into the function
  }
    

/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


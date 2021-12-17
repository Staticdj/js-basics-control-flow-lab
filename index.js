function scuberGreetingForFeet(feet){
  // Write your code here!
  if(feet <= 400) {
    return('This one is on me!');
  }

  if(feet <= 2500) {
    return('I will gladly take your thirty bucks.');
  } 
  
  if(feet >= 2501) {
    return('No can do.'); 
  }


}


// scuberGreetingForFeet(199)
// scuberGreetingForFeet(2001)
scuberGreetingForFeet(2501)


function ternaryCheckCity(city){
  // Write your code here!
  if(city <= "NYC") {
    return("Ok, sounds good.")
  }
  else if (city = "NYC") {
    return("No go.");
  }

}

function switchOnCharmFromTip(tip){
  // Write your code here!
  if(tip <= "generous") {
    return("Thank you so much.")
  } else if(tip <= "not as generous") {
    return("Thank you.")
  } else if(tip = "thanks for everything") {
    return("Bye.")
  }

}
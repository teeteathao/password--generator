// Variables
var generateBtn = document.querySelector("#generate");

var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var symbols = "!@#$%^&*_-+=";

var userCriteria = "";
var finalPassword =[];

//go back to find writePassword

// Write password to the #password input
function generate(){
  do {
   var passwordLength = prompt("Please choose the length(between 8-128 characters) of your password: ")
  }
    while (passwordLength <= 8 || passwordLength >=128)

  var lowercaseChar = confirm("Do you want to include lowercase characters?")
    if(lowercaseChar === true){
      userCriteria = userCriteria + lowercase
      // userCriteria.push(lowercase) 
    
    }

  var uppercaseChar = confirm("Do you want to include uppercase characters?")
    if(uppercaseChar === true){
      userCriteria = userCriteria + uppercase
      // userCriteria.push(uppercase) 
    }

  var numberChar = confirm("Do you want to include number characters?")
    if(numberChar === true){
      userCriteria = userCriteria + numbers
      // userCriteria.push(numbers) 
    }
   
  var symbolChar = confirm("Do you want to include symbol characters?")
    if(symbolChar === true){
      userCriteria = userCriteria + symbols
      // userCriteria.push(symbols) 
    } 
    console.log(userCriteria)

 //For loop to generate user criteria password
  for (let i = 0; i < passwordLength; i++){
     var randomCharacter = userCriteria[Math.floor(Math.random() * userCriteria.length)];
     
     finalPassword.push(randomCharacter);
     console.log(finalPassword);
    }

    document.getElementById("password").value=finalPassword.join("")
    


  }


// Add event listener to generate button
generateBtn.addEventListener("click", generate);
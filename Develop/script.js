// Variables
var generateBtn = document.querySelector("#generate");
var generateBtn2 = document.querySelector("#copyPassword");

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

  var lowercaseChar = confirm("Do you want to include LOWERCASE characters?")
    if(lowercaseChar === true){
      userCriteria = userCriteria + lowercase
      // userCriteria.push(lowercase) 
    }

  var uppercaseChar = confirm("Do you want to include UPPERCASE characters?")
    if(uppercaseChar === true){
      userCriteria = userCriteria + uppercase
      // userCriteria.push(uppercase) 
    }

  var numberChar = confirm("Do you want to include NUMBER characters?")
    if(numberChar === true){
      userCriteria = userCriteria + numbers
      // userCriteria.push(numbers) 
    }
   
  var symbolChar = confirm("Do you want to include SYMBOL characters?")
    if(symbolChar === true){
      userCriteria = userCriteria + symbols
      // userCriteria.push(symbols) 
    } else{
      alert("At least ONE criteria must be picked. \nIf you choose 'Cancel' for all, a password will not generate. \nPlease click 'Generate Password' again.");
      }
    // console.log(userCriteria)

  //For loop to generate user criteria password
  for (let i = 0; i < passwordLength; i++){
     var randomCharacter = userCriteria[Math.floor(Math.random() * userCriteria.length)];
     
     finalPassword.push(randomCharacter);
     console.log(finalPassword);
    }

  // Password into the text field
  document.getElementById("password").value=finalPassword.join("")
    
  }

// Copy password button
function copyPassword() {
    /* Get the text field */
    var copyText = document.getElementById("password");
  
    // console.log(copyText)
    /* Select the text field */
    copyText.select();
  
     /* Copy the text inside the text field */
    navigator.clipboard.writeText(copyText.value);
  
    /* Alert the copied text */
    alert("Your generated password: " + copyText.value + " has been copied to your clipboard.");

  }
  

// Add event listener to generate button
generateBtn.addEventListener("click", generate);

// Add event listener to copy button
generateBtn2.addEventListener("click", copyPassword);
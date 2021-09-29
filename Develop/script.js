// Variables
var generateBtn = document.querySelector("#generate");

var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var symbols = "!@#$%^&*_-+=";

var passwordLength = "";
var chooseUppercase = "";
var chooseLowercase = "";
var chooseNumbers = "";
var chooseSymbols = "";
var password = "";

// Determine password length
function determineLength(){
  passwordLength = prompt("Please choose the length(between 8-128 characters) of your password: ");
      if (passwordLength <8){
      alert("Password length must be a number more than 8 characters");
      determineLength();
      }else if (passwordLength >128){
      alert("Password length must be a number less than 128 characters");
      determineLength();
      }else if (isNaN(passwordLength)){
      alert("Password length must be a number between 8-128 characters");
      determineLength();
      }else {
      alert("Next: Please choose the types of charaters you would like to include in your password. If you click 'Cancel' for each prompt, your password will only contain lowercase letters.");
    }
    return passwordLength;
}

// Determine uppercase characters
function determineUppercase(){
  chooseUppercase = prompt("Do you want to include uppercase characters?")

}

// Determine lowercase characters
function determineLowercase(){
  chooseLowercase = prompt("Do you want to include lowercase characters?")


}

// Determine number characters
function determineNumbers(){
  chooseNumbers = prompt("Do you want to include number characters?")


}
// Determine symbol characters
function determineSymbols(){
  chooseSymbols = prompt("Do you want to include symbol characters?")


}

// Create password
function writePassword() {
  var password = "";
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

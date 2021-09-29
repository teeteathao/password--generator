// Variables
var generateBtn = document.querySelector("#generate");

var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var symbols = "!@#$%^&*_-+=";

var userCriteria = [];
var finalPassword =[];

function generate(){
  do {
   var passwordLength = prompt("Please choose the length(between 8-128 characters) of your password: ")
  }
    while (passwordLength <= 8 || passwordLength >=128)

  var lowercaseChar = confirm("Do you want to include lowercase characters?")
    if(lowercaseChar === true){
      userCriteria.push(lowercase) 
    }

  var uppercaseChar = confirm("Do you want to include uppercase characters?")
    if(uppercaseChar === true){
      userCriteria.push(uppercase) 
    }
  var numberChar = confirm("Do you want to include number characters?")
    if(numberChar === true){
      userCriteria.push(numbers) 
    }
   
  var symbolChar = confirm("Do you want to include symbol characters?")
    if(symbolChar === true){
      userCriteria.push(symbols) 
    }



    for (let i=0; i <passwordLength; i++){
      var randomCharacter = userCriteria
    }[Math.floor(Math.random() * )]

 //loop usercriteria
randomizing
 using password length i=0.. passwordLength

 Math.floor Math.random 

}


generateBtn.addEventListener("click", generate);






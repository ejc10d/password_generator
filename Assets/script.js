// Assignment Code
var generateBtn = document.querySelector("#generate");

function randomChoice(list) {
  return list[randomInt(list.length)]
}

function generatePassword() {

 var userInput = window.prompt("How many characters would you like your password to be? Note: passwords must be 8-120 characters long.")

 var passwordLength = parseInt (userInput)

if (isNaN(passwordLength) || passwordLength < 8 || passwordLength >128) {
  window.alert("Please enter a number between 8 and 128.")
  return
 }
 var wantNumbers = window.confirm("Would you like your password to have numbers?")
 var wantSymbols = window.confirm("Would you like your password to have symbols?")
 var wantLower = window.confirm("Would you like your password to have lower-case letters?")
 var wantUpper = window.confirm("Would you like your password to have upper-case letters?")

 
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

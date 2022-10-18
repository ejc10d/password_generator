// Assignment Code
var generateBtn = document.querySelector("#generate");

// function and math for the actual generator
function randomInt(min, max) {
  if (!max) {
    max = min
    min = 0
  }
  var rand = Math.random()
  return Math.floor(min*(1 - rand) + rand*max)
  }

function randomChoice(list) {
  return list[randomInt(list.length)]
}

// Function and initial prompt for the user to answer
function generatePassword() {

 var userInput = window.prompt("How many characters would you like your password to be? Note: passwords must be 8-120 characters long.")

 var passwordLength = parseInt (userInput)

// if loop and alert that asks for user to pick the amount of characters the user wants in the random password
if (isNaN(passwordLength) || passwordLength < 8 || passwordLength >128) {
  window.alert("Please enter a number between 8 and 128.")
  return
 }

//  series of prompt windows to get the user input on the character options for the random password
 var wantNumbers = window.confirm("Would you like your password to have numbers?")
 var wantSymbols = window.confirm("Would you like your password to have symbols?")
 var wantLower = window.confirm("Would you like your password to have lower-case letters?")
 var wantUpper = window.confirm("Would you like your password to have upper-case letters?")

//  lists of character options for the password generator to choose from.
 var numberList = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
 var symbolList = ["!", "#", "$", "%", "&", "(", ")", "*", "+", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "^", "~"]
 var lowerCaseList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
 var upperCaseList = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

 var passwordOptions = []

//  series of if loops for each password option
if (wantNumbers === true) {
  passwordOptions.push(numberList)
}

if (wantSymbols === true) {
  passwordOptions.push(symbolList)
}

if (wantLower === true) {
  passwordOptions.push(lowerCaseList)
}

if (wantUpper === true) {
  passwordOptions.push(upperCaseList)
}

// this is the fail safe in case the user answers no to every option.
if (passwordOptions.length ===0) {
  window.alert("Please select at least one character option for your password. Reload the page and start over.")
  return
 }

var generatePassword = ""

// standard for loop
for (var i=0; i < passwordLength; i++) {
  var randomList = randomChoice(passwordOptions)
  var randomChar = randomChoice(randomList)
  generatePassword += randomChar
}

return generatePassword
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

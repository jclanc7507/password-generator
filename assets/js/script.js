// Assignment code here
var passwordText = document.querySelector("#password");
// debugger;
// Choose how long the password should be: 8-128 characters
var length = Number(prompt("How many characters would you like your password to be?"));
    while (isNaN(length) || length < 8 || length > 128) 
        length = Number(prompt("Length must be 8-128 characters. How many characters would you like your password to be?"));

// Choose what type of characters should be used
var uppers = confirm("Would you like to use uppercase letters?");
var lowers = confirm("Would you like to use lowercase letters?");
var numbers = confirm("Would you like to use numbers?");
var symbols = confirm("Would you like to use special characters?");

// If incorrect inputs are used, prompt will loop until a correct responce is given
while (!uppers && !lowers && !numbers && !symbols) {
  alert("You must select at least one character type!");
  uppers = confirm("Would you like to use uppercase letters?");
  lowers = confirm("Would you like to use lowercase letters?");
  numbers = confirm("Would you like to use numbers?");
  symbols = confirm("Would you like to use special characters?");
}

var rando

var allowed = {}
        if (uppers) password += rando(allowed.uppers = "ABCDEFGHIJKLMNOPQRSTUVWXYZ");
        if (lowers) password += rando(allowed.lowers = "abcdefghijklmnopqrstuvwxy");
        if (numbers) password += rando(allowed.numbers = "0123456789");
        if (symbols) password += rando(allowed.symbols = "!@#$%^&*(){}[]=<>/,.");
    var passwordLength = Math.floor(Math.random() * (128 - 8) + 8);
    var password = "";
// Potential types of characters to be used
function writePassword() {
    
for (var i = 0; i <= passwordLength; i++) {
   var randomNumber = Math.floor(Math.random() * allowed.length);
   password += allowed.substring(randomNumber, randomNumber +1);
};

document.getElementById("password").value = randoSequence(password).join("");

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)};
// Assignment code here
var lcase = ["a", "b", "c", "d", "e", "f", "g", "h"];
var ucase = ["A", "B", "C", "D", "E", "F", "G", "H"];
var num = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var sym = [ "!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];

var generatePassword = function () {
  var length = window.prompt("How long would you like your password to be? Please choose 8 to 128 characters.");
  if (length < 8 || length > 128) {
    window.alert("Choose a correct length.");
    console.log(length);
    // add for loop incorrect choices

  };
  var picklc = window.confirm("Would you like to use lower case letters?");
  var pickuc = window.confirm("Would you like to use upper case letters?");
  var picknum = window.confirm("Would you like to use numbers?");
  var picksym = window.confirm("Would you like to use symbols?");
  console.log(picklc, pickuc, picknum, picksym);   

// how to show these results to the display window
}

function generatePassword() {
  var names = [lcase, ucase, num, sym];
    if (window.confirm === true) {

    } 

  for (var i = 0; i < 10; i++) {
    var randomNumber = Math.floor(Math.random() * 4);
    console.log(names[randomNumber]);
  }
}



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


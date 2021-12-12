// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {


  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}; 

function generatePassword() {
  var password = "";
  var generateBtn = alert("Let's generate your password");
  var length = parseInt(prompt("What is the length of your password: between 8 to 128 characters?"));
  if (isNaN(length) || length < 8 || length > 128) {
    alert("Please pick a number between 8 and 128.");
  } else {
    alert("Great! Now let's pick out character types.");
  }

  // do you want uppercase
  var wantUppercase = confirm("Do you want uppercase?")
  // do you want lowercase
  var wantLowercase = confirm("Do you want lowercase?")
  // do you want numbers
  var wantNumbers = confirm("Do you want numbers?")
  // do you want special characters
  var wantSpecial = confirm("Do you want special characters?")
  
  // if they want uppercase add an A to the password
  if (wantUppercase) {
    password += "A";
  }
  // if they want lowercase add an a to the password
  if (wantLowercase) {
    password += "a";
  }
  // if they want number add a 1 to the password
  if (wantNumbers) {
    password += "1";
  }
  // if they want special character add a ! to the password
  if (wantSpecial) {
    password += "!";
  }

  return password;

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)
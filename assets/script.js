// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // reset password
  resetPassword()
  // password length input
  var passwordLength = window.prompt("What is the password length? Should be 8 - 128 characters.");
    // change string value to number
    var passwordLength = Number(passwordLength);
    // validate number value
    if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
      window.alert("Please enter a number between 8 and 128!");
      return false;
    }
  // lowercase
  var confirmLowerCase = window.confirm("Allow lowercase letters?");
    if (confirmLowerCase) {
      var lowerCaseAdd = lowerCase;
    }
    else {
      var lowerCaseAdd = [];
    }
  // uppercase
  var confirmUpperCase = window.confirm("Allow UPPERCASE letters?");
    if (confirmUpperCase) {
      var upperCaseAdd = lowerCaseAdd.concat(upperCase);
    } 
    else {
      var upperCaseAdd = lowerCaseAdd;
    }
  // numeric
  var confirmNumeric = window.confirm("Allow numeric values?");
    if (confirmNumeric) {
      var numberAdd = upperCaseAdd.concat(numbers);
    }
    else {
      var numberAdd = upperCaseAdd;
    }
  // symbols
  var confirmSymbol = window.confirm("Allow symbols?");
    if (confirmSymbol) {
      var symbolAdd = numberAdd.concat(symbols);
      var characterPool = symbolAdd;
    }
    else {
      var characterPool = numberAdd;
    }
  
  // generate password 
  generatePassword(characterPool, passwordLength);
}

function generatePassword(characterPool, passwordLength) {
  // loop through the function n times based on length entered
  for (var i = 0; i < passwordLength; i++) {
    // choose random number from array
    var rand = Math.floor(Math.random() * characterPool.length);
    // add randomized array item to password
    password.push(characterPool[rand]);
  }
  createPasswordText();
}

function createPasswordText() {
  // turns array into a single string with no spaces or commas
  var passwordJoined = password.join("");
  // updates passwordText with string
  passwordText.value = passwordJoined;
  return;
}

function resetPassword() {
  // set password array to 'empty'
  password = [];
  passwordText.value = password;
  return;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)
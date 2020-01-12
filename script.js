// set variables

const numArray = [..."0123456789"];
const upperArray = [..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"];



// 1. prompt user for the length of a password want to generate

// stores password length entered by user
let userPWLength = prompt("What is the length of the password to be generated?");

// 2. the length must be 8-128 characters.  If number entered is less than 8 or more than 128, then alert the valid password lengths

// If the password length is not between 8 & 128, then prompt again.
// **** BONUS - continually check until a valid length is entered

if (userPWLength < 8 || userPWLength > 128) {
  let userPWLength = prompt("The length has to be between 8 and 128.");
}

// 3. prompt user what character types want in the password.  Optional: special characters
// If a proper length is entered then run through confirming character types
// confirms return a boolean value
// Ok = true
// Cancel = false

  // confirm numeric values
  let numChar = confirm("Do you want numbers in your password?");
    // confirm lowercase values
  let lowerChar = confirm("Do you want lower case characters in your password?");
    // confirm uppercase values
  let upperChar = confirm("Do you want upper case characters in your password?");

  // ***** Optional: special characters

// 4. user MUST select at least 1 character type.  If all false, then alert and retry
// **** BONUS - continually check until at least one character type is true
if (numChar === false && lowerChar === false && upperChar === false) {

  // confirm numeric values
  let numChar = confirm("You must choose at least one character type.  Do you want numbers in your password?");
    // confirm lowercase values
  let lowerChar = confirm("Do you want lower case characters in your password?");
    // confirm uppercase values
  let upperChar = confirm("Do you want upper case characters in your password?");
}


// 5. generate password based on length and character type(s) chosen

const userPWLength = 5;

function generatePassword(passwordLength) {
  var numberChars = "0123456789";
  var upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowerChars = "abcdefghijklmnopqrstuvwxyz";
  var allChars = numberChars + upperChars + lowerChars;
  var randPasswordArray = Array(passwordLength);
  randPasswordArray[0] = numberChars;
  randPasswordArray[1] = upperChars;
  randPasswordArray[2] = lowerChars;
  randPasswordArray = randPasswordArray.fill(allChars, 3);
  return shuffleArray(randPasswordArray.map(function(x) { return x[Math.floor(Math.random() * x.length)] })).join('');
}

function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

alert(generatePassword(userPWLength));

// 6. show generated password on the screen (first attempt can be alert)






// Assignment Code
// the first element in the document with the ID "generate" is returned:
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  copyBtn.removeAttribute("disabled");
  copyBtn.focus();
}

// 7. ***** Bonus - be able to copy the password to the clipbord

function copyToClipboard() {
  // BONUS 
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// BONUS EVENT LISTENER

function generatePassword() {

  // 1. prompt user for the length of a password want to generate

  // stores password length entered by user
  var userPWLength = prompt("What is the length of the password to be generated?");

  // 2. the length must be 8-128 characters.  If number entered is less than 8 or more than 128, then alert the valid password lengths

  // If the password length is not between 8 & 128, then prompt again.
  // **** BONUS - continually check until a valid length is entered


  // ???????? Why if I use let inside if statements the variable is not the same color as the other variables? 
  // If I change to var then the color matches for all variables

  if (userPWLength < 8 || userPWLength > 128) {
    var userPWLength = prompt("The length has to be between 8 and 128.");
  }

  // 3. prompt user what character types want in the password.  Optional: special characters
  // If a proper length is entered then run through confirming character types
  // confirms return a boolean value
  // Ok = true
  // Cancel = false

  // confirm numeric values
  var numChar = confirm("Do you want numbers in your password?");
  // confirm lowercase values
  var lowerChar = confirm("Do you want lower case characters in your password?");
  // confirm uppercase values
  var upperChar = confirm("Do you want upper case characters in your password?");

  // ***** Optional: special characters

  // 4. user MUST select at least 1 character type.  If all false, then alert and retry
  // **** BONUS - continually check until at least one character type is true
  if (numChar === false && lowerChar === false && upperChar === false) {

    // confirm numeric values
    var numChar = confirm("You must choose at least one character type.  Do you want numbers in your password?");
    // confirm lowercase values
    var lowerChar = confirm("Do you want lower case characters in your password?");
    // confirm uppercase values
    var upperChar = confirm("Do you want upper case characters in your password?");
  }


  // let userPWLength = 6;
  // let numChar = true;
  // let lowerChar = false;
  // let upperChar = true;

  // 5. generate password based on length and character type(s) chosen
  // got general code from 
  // https://stackoverflow.com/questions/9719570/generate-random-password-string-with-requirements-in-javascript/9719815

  let numberChars = "0123456789";
  let upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let lowerChars = "abcdefghijklmnopqrstuvwxyz";

  // var allChars = numberChars + upperChars + lowerChars;

  // minumum  and at least 1 number and 1 low

  // if num // add 1 number to the pass and concat allchar + numbers
  // if upp // add 1 upp to pass and concat allchar + upp
  // if low // add 1 low to pass and concat allchar + low

  // allchar has  with all the posibilities 
  var password = []
  var allChar = []
  if (numChar) {
    allChar = allChar + numberChars
    password.push(generateChar(numberChars))
  }
  if (lowerChar) {
    allChar = allChar + (lowerChars)
    password.push(generateChar(lowerChars))
  }
  if (upperChar) {
    allChar = allChar + (upperChars)
    password.push(generateChar(upperChars))
  }
  console.log("1'", password)
  console.log("posibiities", allChar)

  // fill the rest until the pass lenght
  //loop
  var start = password.length

  console.log(userPWLength, start);
  for (var i = start; i < userPWLength; i++) {
    password.push(generateChar(allChar))
  }
  console.log("PASS", password)    // password is an array, you need a string 

  // shuffle before make to a string

  return password.join("")
 

}
function generateChar(arr) {

  var index = Math.floor(Math.random() * arr.length)
  console.log("arr", arr[index])
  return arr[index]

}


// function shuffleArray(array) {
//   for (let i = array.length - 1; i > 0; i--) {
//     let j = Math.floor(Math.random() * (i + 1));
//     let temp = array[i];
//     array[i] = array[j];
//     array[j] = temp;

//     alert("inside function shuffleArray")
//     alert(array);
//     alert(i);
//     alert(j);
//   }

//   return array;
// }

// 6. show generated password on the screen (first attempt can be alert)



// Assignment Code
// the first element in the document with the ID "generate" is returned:
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  // removes the disabled attribute in HTML so now the button is clickable
  copyBtn.removeAttribute("disabled");
  copyBtn.focus();
}

// 7. ***** Bonus - be able to copy the password to the clipbord

function copyToClipboard() {
  // BONUS 

  // select ID password and execute commands
  // find i execute the copy command

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// BONUS EVENT LISTENER

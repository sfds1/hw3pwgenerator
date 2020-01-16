// start a function to generate a random password

function generatePassword() {

  // 1. prompt user for the length of a password want to generate
  //  ????? Is it "better" to use checkboxes and ask all at once versus prompts?  Maybe developer preference?

  // stores password length entered by user
  let userPWLength = prompt("What is the length of the password to be generated?");

  // 2. the length must be 8-128 characters.  If number entered is less than 8 or more than 128, then alert the valid password lengths

  // If the password length is not between 8 & 128, then prompt again.
  // continually check until a valid length is entered

  // ???????? Why if I use let inside if statements the variable is not the same color as the other variables? 
  // If I change to var then the color matches for all variables

  // **** Currently stays in while loop even when click cancel at first prompt.
  while (userPWLength < 8 || userPWLength > 128) {

    // don't need to use let again as the code "errored" if use let again.
     userPWLength = prompt("The length has to be between 8 and 128.");
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
  // confirm special characters
  var specialChar = confirm("Do you want special characters in your password?");

  // ***** Optional: special characters

  // 4. user MUST select at least 1 character type.  If all false, then alert and retry
  // continually check until at least one character type is true
  while (numChar === false && lowerChar === false && upperChar === false && specialChar ===false) {

    // confirm numeric values
    var numChar = confirm("You must choose at least one character type.  Do you want numbers in your password?");
    // confirm lowercase values
    var lowerChar = confirm("Do you want lower case characters in your password?");
    // confirm uppercase values
    var upperChar = confirm("Do you want upper case characters in your password?");
     // confirm special characters
    var specialChar = confirm("Do you want special characters in your password?");
  }

  // 5. generate password based on length and character type(s) chosen

  // ?????? better to use string or array?
  // which option is slower/faster (runtime) to process and/or takes up more/less storage (space complexity)

  let numberCharsList = "0123456789";
  let upperCharsList = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let lowerCharsList = "abcdefghijklmnopqrstuvwxyz";
  let specialCharsList = "!#$%&()*+-/:<=>?@[^{|}~"; // didn't use the enter list

  // if num // add 1 number to the pass and concat allchar + numbers
  // if upp // add 1 upp to pass and concat allchar + upp
  // if low // add 1 low to pass and concat allchar + low

  // set password to an array as can shuffle what get later
  // set allChar which is an array of possible values
  var password = []
  var allChar = []

  // see if user picked a number value.  If so, then put a number in the password
  if (numChar) {
    allChar = allChar + numberCharsList
    password.push(generateChar(numberCharsList))
  }
  // see if user picked a lower char value.  If so, then put a lower char in the password
  if (lowerChar) {
    allChar = allChar + (lowerCharsList)
    password.push(generateChar(lowerCharsList))
  }
    // see if user picked an upper char value.  If so, then put an upper char in the password
  if (upperChar) {
    allChar = allChar + (upperCharsList)
    password.push(generateChar(upperCharsList))
  }
  // see if user picked a special char value.  If so, then put a special char in the password
  if (specialChar) {
    allChar = allChar + (specialCharsList)
    password.push(generateChar(specialCharsList))
  }
  // console.log("1'", password)
  // console.log("posibiities", allChar)

  // set a variable foer the password length
  let start = password.length

  // fill the rest of the password array until the password length
  // console.log(userPWLength, start);
  for (var i = start; i < userPWLength; i++) {
    password.push(generateChar(allChar))
  }
  // console.log("PASS", password)  

  // shuffle before make to a string



  // .join("") turns an array in to a string
  return password.join("")
 

}
function generateChar(arr) {

  var index = Math.floor(Math.random() * arr.length)
  console.log("arr", arr[index])
  return arr[index]

}

// function shuffleArray(password) {
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

// create a variable for the copy button using the ID 
var copyBtn = document.querySelector("#copy");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  // removes the disabled attribute in HTML so now the button is clickable after a password is generated
  copyBtn.removeAttribute("disabled");
  copyBtn.focus();
}

// 7. ***** Bonus - be able to copy the password to the clipbord

function copyToClipboard() {
  // BONUS 

  // select ID password and execute commands
  // find i execute the copy command

  //  Get the password field 
    var copyText = document.getElementById("password");
  
    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /*For mobile devices*/
  
    /* Copy the text inside the text field */
    document.execCommand("copy");
  
    /* Alert the copied text */
    alert("Copied the text: " + copyText.value);

}

// Add event listener to generate button
// When the generate button is clicked, then run the writePassword function.  Within it is the generatPassword function
generateBtn.addEventListener("click", writePassword);

// BONUS EVENT LISTENER
// added on click event to the copy button
copyBtn.addEventListener("click", copyToClipboard);
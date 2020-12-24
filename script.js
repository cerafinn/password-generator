// lowercase characters
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// uppercase characters
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// numeric characters
var numeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

//special characters
var special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "-", "~", "{", "}", "[", "]", ",", ".", "_", "<", ">", "/", "?", "|", "'"];

//select character prompts
function determinePasswordChar() {
  //prompt for length
  var length = Number(
    prompt('How many characters should the password be?')
  );

  //prompt for non-numeric length entry
  if (isNaN(length) === true) {
    alert('Length entered must be a number.');
    return;
  };

  //prompt for length within range 8-128
  if (8 > length) {
    alert('Length of password must be between more than 8 characters. Please enter a number between 8 and 128.');
    return;
  };

  if (128 < length) {
    alert('Length of password must be between less than 128 characters. Please enter a number between 8 and 128.');
    return;
  };

  //prompt for if lowercase
  var lowerchar = confirm(
    'Click OK to include lowercase characters.'
  );

  //prompt for if uppercase
  var upperchar = confirm(
    'Click OK to include uppercase characters.'
  );

  //prompt for if numeric
  var numbers = confirm(
    'Click OK to include numeric characters.'
  );

  //prompt for if special
  var specialchar = confirm(
    'Click OK to include special characters.'
  );

  if(!lowerchar && !upperchar && !numbers && !specialchar) {
    alert("Please choose at least one character type.");
    return;
  };
  
  // store variables named chosen
  var chosen = {
    length: length,
    lowerchar: lowerchar,
    upperchar: upperchar,
    numbers: numbers,
    specialchar: specialchar,
  };
};

determinePasswordChar();

function generatePassowrd() {
  //get options from length and character type prompts
  var chosen = determinePasswordChar ();


  //ensure that each character type selected is guaranteed

  //get string as result of character selection
}

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  debugger
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
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
    alert('Length entered must be a number. Please enter a number between 8 and 128.');
    return;
  };

  //prompt for length within range 8-128
  if (8 > length || 128 < length) {
    alert('Length of password must be a number more than 8 characters and less than 128. Please enter a number between 8 and 128.');
    return;
  };

  //prompt for if lowercase
  var lowerChar = confirm(
    'Click OK to include lowercase characters.'
  );

  //prompt for if uppercase
  var upperChar = confirm(
    'Click OK to include uppercase characters.'
  );

  //prompt for if numeric
  var numChar = confirm(
    'Click OK to include numeric characters.'
  );

  //prompt for if special
  var specialChar = confirm(
    'Click OK to include special characters.'
  );

  if(!lowerChar && !upperChar && !numChar && !specialChar) {
    alert("Please choose at least one character type.");
    return determinePasswordChar();
  };

  var userChoices = {
    length: length,
    lowerChar: lowerChar,
    upperChar: upperChar,
    numChar: numChar,
    specialChar: specialChar,
  };

  return userChoices;
};

function getRandom(arr) {
  var randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex]
}

function generatePassword() {
  var result = [];
  var possibleCharacters = [];
  var guaranteedCharacters = [];

  var options = determinePasswordChar();

  if (options.lowerChar === true) {
    possibleCharacters = possibleCharacters.concat(lowercase);
    guaranteedCharacters.push(getRandom(lowercase));
  };

  if (options.upperChar === true) {
    possibleCharacters = possibleCharacters.concat(uppercase);
    guaranteedCharacters.push(getRandom(uppercase));
  };

  if (options.numChar === true) {
    possibleCharacters = possibleCharacters.concat(numeric);
    guaranteedCharacters.push(getRandom(numeric));
  };

  if (options.specialChar === true) {
    possibleCharacters = possibleCharacters.concat(special);
    guaranteedCharacters.push(getRandom(special));
  };

  for (var i = 0; i < options.length; i++) {
    result.push(getRandom(possibleCharacters));
  };

  for (var i = 0; i < guaranteedCharacters.length; i++) {
    result[i] = guaranteedCharacters[i];
  };

  return result.join('');
};

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
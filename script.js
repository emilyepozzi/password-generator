// creating the button mechanism
var createButton = document.querySelector("#create");

// Defined arrays
var passwordCharacters = [];
var uppercaseLettersArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowercaseLettersArray = ["a", "b", "c",	"d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbersArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharactersArray = ["!", "#", "$", "%", "&", "(", ")", "*", "+", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@"];
var passwordLength;
var uppercaseLetters;
var lowercaseLetters;
var numbers;
var specialCharacters;

//TODO declare your functions 
function passwordQuestions () {
    resetApp();
passwordLength = prompt('How long is your password? Choose a number between 6-24.');
uppercaseLetters = confirm('Would you like uppercase letters?');
lowercaseLetters = confirm('Would you like lowercase letters?');
numbers = confirm('Would you like numbers?');
specialCharacters = confirm('Would you like special characters?');

  if (passwordLength < 6 || passwordLength > 24 || passwordLength === null) {
    alert('Your selected password length has to be at least 6 characters and no more than 24.');
    passwordQuestions();
  }
    //prompt user to select a number between 6 and 24. If they do not choose a number in that range, then call the function again to make sure to store number length in variable. Return the length of password chosen. 

    if (!uppercaseLetters && !lowercaseLetters && !numbers && !specialCharacters) {
        alert('Please select at least one character type to include in your password.');
        passwordQuestions();
    }
    //prompt user with series of confirms asing if they want specific char. if they do not choose any call the function again. in the end makes sure we store choices in variables and return them


//objects . we need this key when we call this logic 
var options = {
    passwordLength: passwordLength,
    uppercaseLetters: uppercaseLetters,
    lowercaseLetters: lowercaseLetters,
    numbers: numbers,
    specialCharacters: specialCharacters}

 return options;
}



function createPassword() {
    var options = passwordQuestions();
  
    if (options.uppercaseLetters) {
      passwordCharacters = passwordCharacters.concat(uppercaseLettersArray);
    }
  
    if (options.lowercaseLetters) {
      passwordCharacters = passwordCharacters.concat(lowercaseLettersArray);
    }
  
    if (options.numbers) {
      passwordCharacters = passwordCharacters.concat(numbersArray);
    }
  
    if (options.specialCharacters) {
      passwordCharacters = passwordCharacters.concat(specialCharactersArray);
    }
  
    var password = "";
    for (var i = 0; i < options.passwordLength; i++) {
        var randomCharacter = passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
        password = password + randomCharacter;
    }
    //choose random letter of that password 
  
     //randomly created password 
    return password;
}
      
    function writePassword() {
        var password = createPassword(); //gp => func 
        var passwordText = document.querySelector("#password");
      
        passwordText.value = password;
      }
      // Selecting text area and writing password to text area 


    // function to reset passwordCharacters array
    function resetApp() {
        passwordCharacters = [];
        passwordLength;
        uppercaseLetters;
        lowercaseLetters;
        numbers;
        specialCharacters;
    }
    
    // Add event listener to create button
    createButton.addEventListener("click", writePassword);

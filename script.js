// ref to generating buttons
var generateBtn = document.querySelector("#generate");

// Defining arrays
var passChars = [];
var upperLetterArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerLetterArr = ["a", "b", "c",	"d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numberArr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var randomCharArr = [ "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "!", "#", "$", "%", "&", "(", ")", "*", "+"];
var passLgth;
var upperLetters;
var lowercaseLetters;
var numbers;
var randomChars;

// declaring functions 
function passwordQuestions () {
    resetApp();
    passLgth = prompt('How many characters would you like your password to be? Choose a number between 6 and 24.');
    upperLetters = confirm('Would you like to have uppercase letters?');
lowercaseLetters = confirm('Would you like to have lowercase letters?');
numbers = confirm('Would you like to have numbers?');
randomChars = confirm('Would you like special characters?');

  if (passLgth < 6 || passLgth > 24 || passLgth === null) {
    alert('Your selected password length has to be at least 6 characters and no more than 24.');
    passwordQuestions();
  }

    if (!upperLetters && !lowercaseLetters && !numbers && !randomChars) {
        alert('Select at least one character type to use in your password.');
        passwordQuestions();
    }
    //Prompt user with set of q`s 

//options. need this when listing objects
var options = {
  passLgth: passLgth,
  upperLetters: upperLetters,
    lowercaseLetters: lowercaseLetters,
    numbers: numbers,
    randomChars: randomChars}

 return options;
}



function generatePassword() {
    var options = passwordQuestions();
  
    if (options.upperLetters) {
      passChars = passChars.concat(upperLetterArr);
    }
  
    if (options.lowercaseLetters) {
      passChars = passChars.concat(lowerLetterArr);
    }
  
    if (options.numbers) {
      passChars = passChars.concat(numberArr);
    }
  
    if (options.randomChars) {
      passChars = passChars.concat(randomCharArr);
    }
  
    var password = "";
    for (var i = 0; i < options.passLgth; i++) {
        var randomCharacter = passChars[Math.floor(Math.random() * passChars.length)];
        password = password + randomCharacter;
    }
    //choose random letter of that password to generate the array
  
     //return randomly generated password 
    return password;
}      
    // Write password to the pass input
    function writePassword() {
        var password = generatePassword();
        var passwordText = document.querySelector("#password");
      
        passwordText.value = password;
      }

    // function to reset passChars array
    function resetApp() {
      passChars = [];
        passLgth;
        upperLetters;
        lowercaseLetters;
        numbers;
        randomChars;
    }
    
    // Event listener to generate button
    generateBtn.addEventListener("click", writePassword);

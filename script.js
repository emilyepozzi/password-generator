// TODO declare your var at the top
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Defined arrays
var uppercaseLettersArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowercaseLettersArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var specialCharArray = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];
var numberArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var passwordLength;
var uppercaseLetter;
var lowercaseLetters;
var numbers;
var specialChar;

//TODO declare your functions 
function passwordGenQs () {
    length = prompt("Pick a number bw 8 and 128")
    if ("length = < than 8 and less than 128"{
      alert("return these numbers")
      passwordLength()
    } 

    }
return length;
    //prompt user to select a number between 8 and 128. If they do not choose a number in that range, then call the function again(loop to the begining ) make sure to store nuymber length in variable. Return lenght 
}

function passwordOptions () {
    //prompt user with series of confirms asing if they want specific char. if they do not choose any call the function again. in the end makes sure we store choices in variables and return them
lowers = confirm("do you want lowercase in your password")
uppers = confirm ()
lowers= ""
numbers = ""
specials =confirm()

//all var listed with message

if ( or everythign is equal to false ) {
alert("")

passwordOptions()

}

//objects . we need this key when we call this logic 
return options = {
    lowers,
    uppers,
 numbers,
specials,
}:
console.log(options.uppers)
}



function generatePassword() {
var length = passwordLength();
var options = passwordOptions();
var uppercaseLettersArray = [

];
var numberArray = []
var passwordGenArray = []:

if (options.lowers ===true){
//.concatanation look into this 
}

if (options.uppers === true) {

}

if (the rest of the variables) {

}

for (var i = 0; i < length; i+++){
    //choose random letter of that passwrod gen array
    var password + 
}

//more logic here to determine what to include 

//more logic here to loop to determine random char depending on length


 //return randomly generated password 
}



// Write password to the #password input
function writePassword() {
    
  var password = generatePassword();
  // Selecting text area and writing password to text area 
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


//TODO Add call functions and event listeners down here
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
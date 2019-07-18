// Variables and Arrays

// var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wordOptions = ["Texas","Sherrif", "Pistol", "Buffalo", "Saloon", "Whiskey"];
var SelectedWord = "";
var lettersInWord = [];
var blanks = 0;
var blanksAndSucesful = [];
var wrongLetters = [];

var winCount = 0;
var lossCount = 0;
var guessesLeft = 12;

// Functions 

function startGame () {
 selectedWord = wordOptions[Math.floor(Math.random() * wordOptions.length)];
 lettersInWord = selectedWord.split("");
 blanks = lettersInWord.length;

//  reset counters
guessesLeft = 12
wrongLetters = [];
blanksAndSucesful = [];

// For loop 
for(var i=0; i<blanks; i++){
blanksAndSucesful.push("_");

}

// push to html
document.getElementById("wordToGuess").innerHTML = blanksAndSucesful.join(" ");
document.getElementById("guessesLeft").innerHTML = guessesLeft;
document.getElementById("wins").innerHTML = winCount;
document.getElementById("losses").innerHTML = lossCount;

    console.log (selectedWord);
    console.log (lettersInWord)
    console.log(blanks)
    console.log(blanksAndSucesful);
}

// Main Process
startGame ();

document.onkeyup = function(event) {
    var letterGuess = String.fromCharCode(event.KeyCode).toLowerCase();
    
}

// Pseudocode 
// When the wordToGuess letters are pressed they need to be added to the 
// blanks and sucessful array
// 
// When the word is fully guessed wins counter needs to go up 
// 
// If guessesLeft gets to 0 the loss counter needs to increase and form reset 
// 
// 
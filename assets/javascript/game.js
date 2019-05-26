 console.log("App Starting");

//array to be used for random letters
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",
                "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// variables for wins, loses, and guesses
var wins = 0;
var losses = 0;
var guesses= 10;

//variables will hold number of wins, loses, and ties
var userChoiceText = document.getElementById("userChoice-text");
var computerChoiceText = document.getElementById("computerChoice-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesText = document.getElementById("guesses-text");

//Function is initiated whenever a key is pressed
document.onkeyup = function(event) {

//Key pressed by the user
var userGuess = event.key;

//Randomly chooses letter from array
var computerChoice = letters[Math.floor(Math.random() * letters.length)];
console.log(computerChoice)

if (userGuess == computerChoice) {
    wins++;
 
} else if(guesses == 0) {
    losses++;

}else {
    guesses--;
}



userChoiceText.textContent = "You Chose:" + userGuess;
computerChoiceText.textContent = "The Computer Chose:" + computerChoice;
winsText.textContent = "Wins:" + wins;
lossesText.textContent = "Losses:" + losses;
guessesText.textContent = "Guesses Left:" + guesses;


 
    
 };
  
console.log("App Ending");

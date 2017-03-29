document.getElementById("counter-wins").innerHTML = "Wins: 0";
document.getElementById("counter-losses").innerHTML = "Losses: 0";
document.getElementById("guesses-left").innerHTML = "Guesses left: 15";
document.getElementById("answer").innerHTML = " _ ";
document.getElementById("user-guesses").innerHTML = "You typed ";
document.getElementById("computer-choice").innerHTML = "The answer is: ";
            
        
var VILLAINS = [
    "weeping angels",
    "daleks",
    "cybermen",
    "the silence",
    "silurians",
    "ice warriors",
    "davros",
    "the master",
    "zygons",
    "ood",
    "vashta nerada",
    "autons",
    "the rani",    
];

//variables to store words being guessed

var currentWordGuessed="";
var answerArray = [];
var userArray = [];
var usedLetters = [];
var gameOver = 0;
var winCount = 0;
var lossesCount = 0;


            

//game control
            
            
            


function init() {
//computer chooses random word from array
    guessesLeft=15;
    currentWordGuessed=VILLAINS[Math.floor(Math.random() * VILLAINS.length)];
    answerArray = [];
    for (var i = 0; i < currentWordGuessed.length; i++) {
        answerArray[i] = " _ ";
        console.log("computer guess: " + currentWordGuessed);
     
       
 }
//computer chosen word conversion into blank underscores
    console.log(answerArray.join(""));
    document.getElementById("answer").innerHTML = answerArray.join("");
     
//initialize game
   
}
init();

//get user input
function userGuessInput() {
       
        var losses = 0;
        var wins = 0;
        document.onkeyup = function(event) {
// Determine which key was pressed
        var userGuess = event.key;
        userGuessLowerCase = String.fromCharCode(event.keyCode).toLowerCase();
        console.log(userGuessLowerCase);
        

//update the user guess
        for (var i = 0; i < currentWordGuessed.length; i++) {
            if (userGuessLowerCase === currentWordGuessed[i]) {
                answerArray[i] = userGuessLowerCase;
                console.log(userGuess);
                document.getElementById("answer").innerHTML = answerArray.join("");
                
        
            }
         }
            if (answerArray.indexOf(" _ ") === -1) {
                var cumulativeUserGuesses =usedLetters.push(userGuessLowerCase);
                document.getElementById("user-guesses").innerHTML = ("You typed: " + usedLetters);
                init();
               
                wins ++;
                console.log(wins);
                document.getElementById("counter-wins").innerHTML = ("Wins: " + wins);
                restart();             
            } 
            if (answerArray.indexOf(" _ ") !== -1) {
                guessesLeft --;
                var cumulativeUserGuesses =usedLetters.push(userGuessLowerCase);
                document.getElementById("user-guesses").innerHTML = ("You typed: " + usedLetters);
                document.getElementById("guesses-left").innerHTML = ("Guesses left: " + guessesLeft);
               
                
                 
            }
            if (guessesLeft === 0) {
                document.getElementById("computer-choice").innerHTML = "The answer is: " + currentWordGuessed;
                init();
                losses++;
                document.getElementById("counter-losses").innerHTML = ("Losses: " + losses);
                restart();
                
                
        }
   }
}

userGuessInput();

//flush used letters from array
            
function restart() {
    while(usedLetters.length > 0) {
    usedLetters.pop();
}
     
document.getElementById("user-guesses").innerHTML = "You typed: ";
        
}       
         
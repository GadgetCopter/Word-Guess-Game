var acceptedInput = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var wordList = ["siamese", "tabby", "aristocats", "garfield", "kitten", "mewo", "purr", "paw", "tail", "persian", "chartreux", "snowshoe"]
var wins = 0;
var guessesLeft = 13;
var letters = [];
var userGuess;
var correctGuess;
var incorrectList = [];
var word;

// User must input a guess

document.getElementById("wins").textContent = "Wins: " + wins;
document.getElementById("wrong-guess").textContent = "Incorrect guesses so far: ";

// Starts gmae and created random cat wor from wordList
var gameStart = function() {
    letters = [];
    word = wordList[Math.floor(Math.random() * wordList.length)];
    for (var i = 0; i < word.length; i++) { 
        letters[i] = "_"
    }
    document.getElementById("word-key").textContent = letters.join(" ");
    console.log(word);
}

// listens for user input to start game & guessing
document.onkeydown = function(event) {
    userGuess = event.key;
    var correctGuess = false;

    // Compares user intput to each letter in chosen word
   if (acceptedInput.includes(userGuess)){
        for (var i = 0; i < word.length; i++){
            if (userGuess === word[i]) {
                letters[i] = userGuess;
                document.getElementById("word-key").textContent = letters.join(" ");
                correctGuess = true;
            }
        }

        // resets game and checks if the game is won
        if (!letters.includes("_")){
            guessesLeft = 13;
            incorrectList = [];
            wins++;
            document.getElementById("wins").textContent = "Wins " + wins;
            document.getElementById("guesses-left").textContent = "Guesses remaining: " + guessesLeft;
            document.getElementById("wrong-guess").textContent = "Incorrect guesses so far:"
            alert("Purr-fect! the word was " + word);
            gameStart();
        }
        
        
        if (correctGuess) return;
        
        // checks to see if guess was wrong and records/prints incorrect guess on screen
        if (incorrectList.indexOf(userGuess) < 0) {
            incorrectList.push(userGuess);
            document.getElementById("wrong-guess").textContent = "Incorrect guesses so far: " + incorrectList.join(" ");
            guessesLeft--
            document.getElementById("guesses-left").textContent = "Guesses remaining: " + guessesLeft;
            
            // ends game if there are no more lives left
            if (guessesLeft <= 0){
                alert("Ouch! Sorry, the word was " + word);
                guessesLeft = 13;
                incorrectList = [];
                document.getElementById("guesses-left").textContent = "Guesses remaining: " + guessesLeft;
                document.getElementById("wrong-guess").textContent = "Incorrect guesses so far:"
                gameStart();
            }
        }
    }
}


gameStart();
// computer must generate random word from the array
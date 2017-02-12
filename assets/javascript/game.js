// Variables
var wins = 0;
var losses = 0;
var guessesLeft = 0;
var words = ['cat', 'tree', 'swing', 'around', 'scientist', 'coffee', 'football', 'touchdown'];

function resetGame() {
	var lettersGuessed = "";
	guessesLeft = 0;
	wordAnswer = chooseWord();
	wordAnswerShown = blanksFromAnswer(wordAnswer);
	$("#hmpic").html('<img src="assets/images/Hangman0.png">');
	$("#hangmanword").html("<h1>" + wordAnswerShown + "</h1>");
	$("#guessesRem").html('<h1 id="guessesRem">Guesses Left: </h1>' + guessesLeft);
	return;
};

// This function will pick our word
function chooseWord () {
    var randomnumber = Math.floor(Math.random() * words.length);
    var newWord = words[randomnumber];
    return newWord;
};

// This function creates the unsolved word as _ _ _ to display
function blanksFromAnswer ( answerWord ) {
    var result = ""; // This is the variable we want to use
    // concatanate a '_' to result for every letter in answerWord.
    for (i = 0; i < answerWord.length; i++) {
        result = result.concat("-");
    }
    return result;
};

function setGuesses(word1, word2) {
	if (word1 == word2) {
		guessesLeft++;
		$("#hmpic").html('<img src="assets/images/Hangman' + guessesLeft + '.png">');
		$("#guessesRem").html('<h2 id="guessesRem">Guesses Left: </h2>' + guessesLeft);
	}
	return;
}

//This function will check for the letter guessed in the var wordAnswer
//and return the new version of the wordAnswerShown to display if letter is found

function replaceAt(a, b, originalString) {
	return originalString.substr(0,a) + b + originalString.substr(a+1,originalString.length);
};
function checkLetter ( letter, newDisplayWord, wordAnswer ) {
	var xIndex = 0;
	xIndex = wordAnswer.indexOf(letter);
	while (xIndex >= 0) {
		newDisplayWord = replaceAt(xIndex, letter, newDisplayWord);
		xIndex = wordAnswer.indexOf(letter, xIndex +1);
	}
return newDisplayWord;
};


 //Start Game - press any key
document.onkeyup = function(event) {

console.log("start Game press any key");
	wordAnswer = chooseWord();
	wordAnswerShown = blanksFromAnswer(wordAnswer);
	$("#hmpic").html('<img src="assets/images/Hangman0.png">');
	$("#hangmanword").html("<h1>" + wordAnswerShown + "</h1>");

  	document.onkeyup = function(event) {
		var letter = String.fromCharCode(event.keyCode).toLowerCase();
				//Checking letter selected
		console.log(letter);
		checkedWord = checkLetter(letter, wordAnswerShown, wordAnswer);
		setGuesses(checkedWord, wordAnswerShown);
		wordAnswerShown = checkedWord;
				//Checking if word answer updated
		console.log(wordAnswerShown);
		$("#hangmanword").html("<h1>" + wordAnswerShown + "</h1>");
		console.log("guessesLeft" + guessesLeft);
		if (guessesLeft == 6) {
			losses++;
			resetGame();
				}
		else if (wordAnswer == wordAnswerShown) {
			wins++;
			$("#wins").html("<h1>Number of wins: " + wins + "</h1>");
			resetGame();
			}	
		};

};
		
	


// Variables
var wins = 0;
var losses = 0;
var lettersGuessed = [];
var words = ['cat', 'tree', 'swing', 'around', 'scientist'];

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

//This function will check for the letter guessed in the var wordAnswer
//and return the new version of the wordAnswerShown to display if letter is found


/* INVESTIGATE THIS
In JavaScript, strings are immutable, which means the best you can do is create a new string with the changed content, and assign the variable to point to it.

You'll need to define the replaceAt() function yourself:

String.prototype.replaceAt=function(index, character) {
    return this.substr(0, index) + character + this.substr(index+character.length);
}
And use it like this:

str = str.replaceAt(3, "a");
*/
function replaceAt(a, b, originalString) {
	return originalString.substr(0,a) + b + originalString.substr(a+1,originalString.length);
}
function checkLetter ( letter, newDisplayWord, wordAnswer ) {
	var xIndex = 0;

	xIndex = wordAnswer.indexOf(letter);
	while (xIndex >= 0) {
		newDisplayWord = replaceAt(xIndex, letter, newDisplayWord);
		xIndex = wordAnswer.indexOf(letter, xIndex +1);
	}
return newDisplayWord;
}

/*
	for (i=0; i < wordAnswer.length; i++) {
			if (letter == wordAnswer[i]) {
//				console.log("Match! " + letter);
				newDisplayWord[i] = letter;
			}
			else {
				console.log("no mathch");
			}
		}
	return newDisplayWord;
};
*/




 //Start Game - press any key
document.onkeyup = function(event) {

	wordAnswer = chooseWord();

	console.log(wordAnswer);

	wordAnswerShown = blanksFromAnswer(wordAnswer);
 	
 	console.log(wordAnswerShown);

 			// Capture letter
  			document.onkeyup = function(event) {

			var letter = String.fromCharCode(event.keyCode).toLowerCase();

			//Checking letter selected
			console.log(letter);

			checkedWord = checkLetter(letter, wordAnswerShown, wordAnswer);

			wordAnswerShown = checkedWord;
			
			console.log(wordAnswerShown);




			//Display guessed letter



			//Reduce number of guesses left

			};
	};


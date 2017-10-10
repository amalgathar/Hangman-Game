var words = ["ice", "cure", "heal", "fireball", "lightning"];
var wordAnswer = "";
var lettersInWord = [];
var blanks = 0;
var blanksAndSuccess = [];
var badGuess = [];
var wins = 0;
var losses = 0;
var manaLeft = 10;


//function to start game.  resets variables, chooses word solution
function startGame () {
	wordAnswer = words[Math.floor(Math.random() * words.length)];
	lettersInWord = wordAnswer.split("");
	blanks = lettersInWord.length;
	manaLeft = 10;
	badGuess = [];
	blanksAndSuccess = [];

	for (var i = 0; i < blanks; i++) {
		blanksAndSuccess.push("_");
	}

	$("#wordGuess").html(blanksAndSuccess.join(" "));
	$("manaLeft").html(manaLeft);
	$("spellsCast").html(wins);
	$("spellFizzles").html(losses);

}

function checkLetters(letter) {
	var letterCheck = false;
	for (var i = 0; i < blanks; i++) {
		letterCheck = true;
	}

	if(letterCheck) {

		for (var i = 0; i < blanks; i++) {
			if(wordAnswer[i] == letter) {
				blanksAndSuccess[i] = letter;
			}
		}
	}

	else {
		wrongLetters.push(letter);
		numGuesses--;
	}

}

function roundComplete (){

	if(lettersInWord.toString() == blanksAndSuccess.toString()) {
		wins++;
		alert("You won!");

		startGame();
		document.getElementById("spellsCast").innerHTML = wins;

		startGame();
	}

	else if (manaLeft){
		losses++;
		alert("You lost!");

		document.getElementById("spellFizzles").innerHTML = losses;

		startGame();
	}

}

startGame();

//  not sure how keyup works in jquery
//		$("#keyUp").keyup(function(event) {
//			var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
//			console.log(letterGuessed);
//		});

document.onkeyup = function(event) {
	var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
	roundComplete();

}
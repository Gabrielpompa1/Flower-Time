// Variables

// const previousGuesses = document.querySelector('.previous-guesses');
// const correctGuesses = document.querySelector('.correct-guesses');
const form = document.querySelector('.form');
const input = document.querySelector('.input');
const submitButton = document.querySelector('.submit-button');
const ulCorrect = document.querySelector('.correct-ul');
const ulIncorrect = document.querySelector('.incorrect-ul');
// let li = document.createElement('li');
// let li2 = document.createElement('li');
// Word(s) to guess

let word = ['H', 'E', 'L', 'L', 'O'];
let winningWord = word.toString()

console.log(winningWord)
// Event listeners

form.addEventListener('submit', (event) => {
	event.preventDefault();
	checkGuess();
});

// Functions

function checkGuess() {
	if (input.value === word[0]) {
		correctGuess();
		input.value = '';
	} else if (input.value === word[1]) {
		correctGuess();
		input.value = '';
	} else if (input.value === word[2]) {
		correctGuess();
		input.value = '';
	} else if (input.value === word[3]) {
		correctGuess();
		input.value = '';
	} else if (input.value === word[4]) {
		correctGuess();
		input.value = '';
	} else {
		incorrectGuess();
		input.value = '';
	}
}

function correctGuess() {
    let li = document.createElement('li');
    ulCorrect.appendChild(li);
    li.innerText = input.value;
	
}

function incorrectGuess() {
    let li2 = document.createElement('li');
	li2.innerText = input.value;
	ulIncorrect.appendChild(li2);
}

function startGame() {}

function displayRules() {}

function winCount() {}

function lossCount() {}

function flowerStem() {}

function flowerBulb() {}

function flowerPetal1() {}

function flowerPetal2() {}

function flowerPetal3() {}

function flowerPetal4() {}

function flowerPetal5() {}

function flowerPetal6() {}

function flowerPetal7() {}

// Goals

//Make flower
// Choose a word to  make
// Put it into an array, split it up by individual letters?
// Make a form to 'submit' for the correct word choice
// Make a separate 'input' box for letter choices. If a letter input matches a value for the word, allow it to be shown. If now, put it in the bad guess category

//// Variables
const html = document.querySelector('HTML');
const word = ['H', 'O', 'W', 'D', 'Y'];
const word2 = ['F', 'L', 'O', 'W', 'E', 'R'];
const correctUl = document.querySelector('.correct-ul');
const incorrectUl = document.querySelector('.incorrect-ul');
const form = document.querySelector('.form');
const submitForm = document.querySelector('.submit-form');
const input = document.querySelector('.input');
const startButton = document.querySelector('.start-button');
const rulesButton = document.querySelector('.open-rules');
const resetButton = document.querySelector('.reset-button');
const guessReaction = document.querySelector('.guess-reaction');

const header = document.querySelector('.header');
const flower = document.querySelector('.flower');
const correctDiv = document.querySelector('.correct-guesses');
const incorrectDiv = document.querySelector('.incorrect-guesses');

const winCountDiv = document.querySelector('.win-count');
const lossCount = document.querySelector('.loss-count');

const costumeSubmit = document.querySelector('.costume-submit');
const selectCostume = document.querySelector('.accessorize');
const option = document.getElementsByTagName('option');
const cowboyOption = document.querySelector('.cowboy-option');
const spaceOption = document.querySelector('.space-option');

const cowboy = document.querySelectorAll('.cowboy');
const baseLeft = document.querySelector('#base-left');
const baseRight = document.querySelector('#base-right');
const moustacheLeft = document.querySelector('#moustache-left');
const moustacheRight = document.querySelector('#moustache-right');
const brim = document.querySelector('#brim');

const space = document.querySelector('.space-suit');
const helmetTop = document.querySelector('#helmet-top');
const helmetBase = document.querySelector('#helmet-base');
const leftArm = document.querySelector('#left-arm');
const rightArm = document.querySelector('#right-arm');

const bulb = document.querySelector('#bulb');
const smile = document.querySelector('#smile');
const stem = document.querySelector('#stem');
const petal1 = document.querySelector('#petal1');
const petal2 = document.querySelector('#petal2');
const petal3 = document.querySelector('#petal3');
const petal4 = document.querySelector('#petal4');
const petal5 = document.querySelector('#petal5');
const petal6 = document.querySelector('#petal6');
const petal7 = document.querySelector('#petal7');
const petal8 = document.querySelector('#petal8');

let wrongAnswers = [];
let answer = [];
let counter = 0;

///// Event Listeners /////

// Form event listener

form.addEventListener('submit', (event) => {
	event.preventDefault();
	submitGuess();
	checkWin();
});

// Start Game event listener

startButton.addEventListener('click', (event) => {
	word.forEach(makeUnderScore);
	input.toggleAttribute('disabled');
	startButton.toggleAttribute('disabled');
	startButton.setAttribute('class', 'closed');
	input.setAttribute('class', 'input-open');
});

// Show Rules event listener

rulesButton.addEventListener('click', (event) => {
	showRules();
});

// Reset game event listener

resetButton.addEventListener('click', (event) => {
	location.reload();
});

// Costume switch event listener

costumeSubmit.addEventListener('click', (event) => {
	if (selectCostume.value === 'cowboy') {
		showCowboy();
	} else if (selectCostume.value === 'spaceman') {
		showSpaceSuit();
	} else if (selectCostume.value === 'flower') {
		location.reload();
	}
});

///// Functions /////

// Check win condition function

function checkWin() {
	if (answer.length === word.length) {
		smile.setAttribute('id', 'happy');
		guessReaction.innerText = 'You win!';
		input.toggleAttribute('disabled');
	} else if (wrongAnswers.length === 8) {
		guessReaction.innerText = 'You lose. Try again!';
		input.toggleAttribute('disabled');
	}
}

// Word 1 submit guess function

function submitGuess() {
	if (input.value.toUpperCase() === word[0]) {
		answer.push(input.value.toUpperCase());
		guessCorrect();
		smile.setAttribute('id', 'smile');
		let key0 = document.getElementById('key0');
		key0.innerText = word[0];
		input.value = '';
	} else if (input.value.toUpperCase() === word[1]) {
		answer.push(input.value.toUpperCase());
		guessCorrect();
		smile.setAttribute('id', 'smile');
		let key1 = document.getElementById('key1');
		key1.innerText = word[1];
		input.value = '';
	} else if (input.value.toUpperCase() === word[2]) {
		answer.push(input.value.toUpperCase());
		guessCorrect();
		smile.setAttribute('id', 'smile');
		let key2 = document.getElementById('key2');
		key2.innerText = word[2];
		input.value = '';
	} else if (input.value.toUpperCase() === word[3]) {
		answer.push(input.value.toUpperCase());
		guessCorrect();
		smile.setAttribute('id', 'smile');
		let key3 = document.getElementById('key3');
		key3.innerText = word[3];
		input.value = '';
	} else if (input.value.toUpperCase() === word[4]) {
		answer.push(input.value.toUpperCase());
		guessCorrect();
		smile.setAttribute('id', 'smile');
		let key4 = document.getElementById('key4');
		key4.innerText = word[4];
		input.value = '';
	} else {
		incorrectGuess();
	}
}

// Word 2 Submit Guess Function

// function submitGuess() {
// 	if (input.value.toUpperCase() === word2[0]) {
// 		answer.push(input.value.toUpperCase());
// 		smile.setAttribute('id', 'smile');
// 		let key0 = document.getElementById('key0');
// 		key0.innerText = word2[0];
// 		input.value = '';
// 	} else if (input.value.toUpperCase() === word2[1]) {
// 		answer.push(input.value.toUpperCase());
// 		smile.setAttribute('id', 'smile');
// 		let key1 = document.getElementById('key1');
// 		key1.innerText = word2[1];
// 		input.value = '';
// 	} else if (input.value.toUpperCase() === word2[2]) {
// 		answer.push(input.value.toUpperCase());
// 		smile.setAttribute('id', 'smile');
// 		let key2 = document.getElementById('key2');
// 		key2.innerText = word2[2];
// 		input.value = '';
// 	} else if (input.value.toUpperCase() === word2[3]) {
// 		answer.push(input.value.toUpperCase());
// 		smile.setAttribute('id', 'smile');
// 		let key3 = document.getElementById('key3');
// 		key3.innerText = word2[3];
// 		input.value = '';
// 	} else if (input.value.toUpperCase() === word2[4]) {
// 		answer.push(input.value.toUpperCase());
// 		smile.setAttribute('id', 'smile');
// 		let key4 = document.getElementById('key4');
// 		key4.innerText = word2[4];
// 		input.value = '';
// 	} else if (input.value.toUpperCase() === word2[5]) {
// 		answer.push(input.value.toUpperCase());
// 		smile.setAttribute('id', 'smile');
// 		let key5 = document.getElementById('key5');
// 		key5.innerText = word2[5];
// 		input.value = '';
// 	} else if (input.value.toUpperCase() === word2[6]) {
// 		answer.push(input.value.toUpperCase());
// 		smile.setAttribute('id', 'smile');
// 		let key6 = document.getElementById('key6');
// 		key6.innerText = word2[6];
// 		input.value = '';
// 	} else {
// 		incorrectGuess();
// 	}
// }

// Incorrect guess function

function incorrectGuess() {
	wrongAnswers.push(input.value.toUpperCase());
	guessIncorrect();
	removePetal();
	let p2 = document.createElement('p');
	p2.innerText = input.value.toUpperCase();
	incorrectUl.appendChild(p2);
	input.value = '';
}

// Generate underscore spots for letter choices

function makeUnderScore() {
	let underscore = document.createElement('p');
	underscore.classList.add('answer');
	underscore.setAttribute('id', 'key' + counter++);
	underscore.innerText = '_';
	correctUl.appendChild(underscore);
}

// Check for double guesses function

function checkDoubleCorrect() {
	for (let i = 0; i < answer.length; i++) {
		if (input.value.toUpperCase() === answer[i]) {
			guessReaction.innerText = 'You have already guessed this letter!';
			input.value = '';
		}
	}
}

// Check for double INCORRECT guesses function

function checkDoubleIncorrect() {
	for (let i = 0; i < wrongAnswers.length; i++) {
		if (input.value.toUpperCase() === wrongAnswers[i]) {
			guessReaction.innerText = 'You have already guessed this letter!';
			input.value = '';
		}
	}
}

// Win Count function

function winCount() {
	let p3 = document.createElement('p');
	p3.innerText = counter2++;
	winCountDiv.appendChild(p3);
}

// Win Count function

// function lossCount () {

// }

// Guess Reaction: Correct

function guessCorrect() {
	guessReaction.innerText = `Yay, ${input.value.toUpperCase()} was correct!`;
}

// Guess Reaction: Incorrect

function guessIncorrect() {
	guessReaction.innerText = `Oh no! ${input.value.toUpperCase()} was incorrect!`;
}

// Show Rules

function showRules() {
	alert(
		`Welcome to Flower Time!\n \n In order to keep the flower tall and happy, you must guess its favorite word! \n\n Here are the rules: \n - In the 'Correct' box, input your guess for which letters might be found in the magic word. \n - If your guess is correct, the flower will remain intact. \n - If you guess wrong, the flower will lose a petal. \n - If the flower loses all its petals, the game is over. \n - If all of your guesses are correct and you spell the magic word, you win! \n - When you are ready, press start game. Good Luck!\n`
	);
}

// Remeove Petals function

function removePetal() {
	if (wrongAnswers.length === 1) {
		petal1.style.visibility = 'hidden';
		smile.setAttribute('id', 'surprise');
	} else if (wrongAnswers.length === 2) {
		petal2.style.visibility = 'hidden';
		smile.setAttribute('id', 'surprise');
	} else if (wrongAnswers.length === 3) {
		petal3.style.visibility = 'hidden';
		smile.setAttribute('id', 'surprise');
	} else if (wrongAnswers.length === 4) {
		petal4.style.visibility = 'hidden';
		smile.setAttribute('id', 'surprise');
	} else if (wrongAnswers.length === 5) {
		petal5.style.visibility = 'hidden';
		smile.setAttribute('id', 'surprise');
	} else if (wrongAnswers.length === 6) {
		petal6.style.visibility = 'hidden';
		smile.setAttribute('id', 'surprise');
	} else if (wrongAnswers.length === 7) {
		petal7.style.visibility = 'hidden';
		smile.setAttribute('id', 'surprise');
		petal7.style.zIndex = '0';
	} else if (wrongAnswers.length === 8) {
		petal8.style.visibility = 'hidden';
		smile.setAttribute('id', 'frown');
	}
}

// Show Western Theme

function showCowboy() {
	brim.style.visibility = 'visible';
	baseLeft.style.visibility = 'visible';
	baseRight.style.visibility = 'visible';
	moustacheLeft.style.visibility = 'visible';
	moustacheRight.style.visibility = 'visible';
	html.style.backgroundImage = 'url(western.jpg)';
	html.style.backgroundColor = '#f3c086';
	stem.style.backgroundColor = 'rgb(150, 80, 40)';
	leftArm.style.backgroundColor = 'rgb(150, 80, 40)';
	rightArm.style.backgroundColor = 'rgb(150, 80, 40)';

	header.style.backgroundColor = 'rgba(220, 180, 60, 0.8)';
	header.style.borderColor = 'rgb(170, 110, 0)';
	submitForm.style.backgroundColor = 'rgba(220, 180, 60, 0.8)';
	submitForm.style.borderColor = 'rgb(170, 110, 0)';
	flower.style.backgroundColor = 'rgba(255, 215, 0, 0.8)';
	flower.style.borderColor = 'rgb(255, 175, 0)';
	incorrectDiv.style.backgroundColor = 'rgba(100, 225, 0, 0.9)';
	incorrectDiv.style.borderColor = 'rgb(255, 255, 0)';
	correctDiv.style.backgroundColor = 'rgba(255, 150, 20, 0.9)';
	correctDiv.style.borderColor = 'rgb(255, 120, 0)';
}

// Show Space Theme

function showSpaceSuit() {
	helmetTop.style.visibility = 'visible';
	helmetBase.style.visibility = 'visible';
	helmetTop.style.borderColor = 'rgb(130, 255, 255)';
	helmetTop.style.backgroundColor = 'rgba(180, 0, 95, 0.7)';
	helmetBase.style.borderColor =
		'transparent rgb(130, 255, 255) rgb(130, 255, 255) rgb(130, 255, 255)';

	bulb.style.backgroundColor = 'rgb(255, 55, 255)';
	stem.style.backgroundColor = 'rgb(130, 255, 255)';
	leftArm.style.backgroundColor = 'rgb(130, 255, 255)';
	rightArm.style.backgroundColor = 'rgb(130, 255, 255)';

	html.style.backgroundImage = 'url(spacesuitset2.jpg)';
	html.style.backgroundColor = 'purple';
	header.style.backgroundColor = 'rgba(0, 230, 50, 0.9)';
	header.style.borderColor = 'rgba(50, 255, 50, 0.9)';
	submitForm.style.backgroundColor = 'rgba(180, 0, 95, 0.9)';
	submitForm.style.borderColor = 'rgb(230, 0, 95)';
	flower.style.backgroundColor = 'rgba(170, 0, 255, 0.9)';
	flower.style.borderColor = 'rgb(220, 0, 255)';
	incorrectDiv.style.backgroundColor = 'rgb(160, 255, 255, 0.9)';
	incorrectDiv.style.borderColor = 'rgb(0, 225, 255)';
	correctDiv.style.backgroundColor = 'rgba(0, 230, 50, 0.9)';
	correctDiv.style.borderColor = 'rgba(100, 255, 50, 0.9)';
}

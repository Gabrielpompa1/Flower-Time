//// Variables

const word = ['H', 'O', 'W', 'D', 'Y'];
const word2 = ['F', 'L', 'O', 'W', 'E', 'R']
const correctUl = document.querySelector('.correct-ul');
const incorrectUl = document.querySelector('.incorrect-ul');
const form = document.querySelector('.form');
const input = document.querySelector('.input');
const startButton = document.querySelector('.start-button');
const rulesButton = document.querySelector('.open-rules')
const resetButton = document.querySelector('.reset-button')
const guessReaction = document.querySelector('.guess-reaction')


const accessoryButton = document.querySelector('.accessorize')
const cowboy = document.querySelectorAll('.cowboy')
const baseLeft = document.querySelector('#base-left')
const baseRight = document.querySelector('#base-right')
const moustacheLeft = document.querySelector('#moustache-left')
const moustacheRight = document.querySelector('#moustache-right')
const brim = document.querySelector('#brim')

const smile = document.querySelector('#smile')
const petal1 = document.querySelector('#petal1')
const petal2 = document.querySelector('#petal2')
const petal3 = document.querySelector('#petal3')
const petal4 = document.querySelector('#petal4')
const petal5 = document.querySelector('#petal5')
const petal6 = document.querySelector('#petal6')
const petal7 = document.querySelector('#petal7')
const petal8 = document.querySelector('#petal8')

let wrongAnswers = []
let answer = [];
counter = 0;
///// Event Listeners /////

// Form event listener

form.addEventListener('submit', (event) => {
	event.preventDefault();
	checkCorrectGuess()
	checkIncorrectGuess()
	submitGuess();
	checkWin();
});

// Start Game event listener

startButton.addEventListener('click', (event) => {
	word.forEach(makeUnderScore);
	input.toggleAttribute('disabled')
	startButton.toggleAttribute('disabled')
	startButton.setAttribute('class', 'closed')
	input.setAttribute('class', 'input-open')
});

// Show Rules event listener

rulesButton.addEventListener('click', (event) => {
	showRules()
})

// Reset game event listener

resetButton.addEventListener('click', (event) => {
	location.reload()
})

// Accessory switch event listener

accessoryButton.addEventListener('click', (event) => {
	event.preventDefault()
	showCowboy()
})

///// Functions /////

// Check win condition function

function checkWin() {
	if (answer.length === word.length) {
		smile.setAttribute('id', 'happy')
		guessReaction.innerText = 'You win!'
		input.toggleAttribute('disabled');
	} else if(wrongAnswers.length === 8) {
		guessReaction.innerText = 'You lose. Try again!'
		input.toggleAttribute('disabled');
	}
}

// Word 1 submit guess function

function submitGuess() {
		if (input.value.toUpperCase() === word[0]) {
			answer.push(input.value.toUpperCase());
			guessCorrect()
			smile.setAttribute('id', 'smile');
			let key0 = document.getElementById('key0')
			key0.innerText = word[0]
			input.value = '';
		} else if (input.value.toUpperCase() === word[1]) {
			answer.push(input.value.toUpperCase());
			guessCorrect()
			smile.setAttribute('id', 'smile');
			let key1 = document.getElementById('key1');
			key1.innerText = word[1];
			input.value = '';
		} else if (input.value.toUpperCase() === word[2]) {
			answer.push(input.value.toUpperCase());
			guessCorrect()
			smile.setAttribute('id', 'smile');
			let key2 =document.getElementById('key2');
			key2.innerText = word[2];
			input.value = '';
		} else if (input.value.toUpperCase() === word[3]) {
			answer.push(input.value.toUpperCase());
			guessCorrect()
			smile.setAttribute('id', 'smile');
			let key3 = document.getElementById('key3');
			key3.innerText = word[3];
			input.value = '';
		} else if (input.value.toUpperCase() === word[4]) {
			answer.push(input.value.toUpperCase());
			guessCorrect()
			smile.setAttribute('id', 'smile');
			let key4 = document.getElementById('key4');
			key4.innerText = word[4];
			input.value = '';
		} else {
			incorrectGuess()
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

function checkCorrectGuess() {
	for (let i = 0; i < answer.length; i++) {
		if(input.value.toUpperCase() === answer[i]) {
			alert('You have already guessed this letter!')
			input.value = ''
		}
	}
}

// Check for double INCORRECT guesses function

function checkIncorrectGuess() {
	for (let i = 0; i < wrongAnswers.length; i++) {
		if (input.value.toUpperCase() === wrongAnswers[i]) {
			alert('You have already guessed this letter!');
			input.value = '';
		}
	}
}

// Show Rules

function showRules () {
	alert(
		`Welcome to Flower Time!\n \n In order to keep the flower tall and happy, you must guess its favorite word! \n\n Here are the rules: \n - In the 'Correct' box, input your guess for which letters might be found in the magic word. \n - If your guess is correct, the flower will remain intact. \n - If you guess wrong, the flower will lose a petal. \n - If the flower loses all its petals, the game is over. \n - If all of your guesses are correct and you spell the magic word, you win! \n - When you are ready, press start game. Good Luck!\n`
	);
}

// Remeove Petals function

function removePetal() {
	if (wrongAnswers.length === 1) {
		petal1.style.backgroundColor = 'lightgreen';
		smile.setAttribute('id', 'surprise');
	} else if (wrongAnswers.length === 2) {
		petal2.style.backgroundColor = 'lightgreen';
		smile.setAttribute('id', 'surprise');
	} else if (wrongAnswers.length === 3) {
		petal3.style.backgroundColor = 'lightgreen';
		smile.setAttribute('id', 'surprise');
	} else if (wrongAnswers.length === 4) {
		petal4.style.backgroundColor = 'lightgreen';
		smile.setAttribute('id', 'surprise');
	} else if (wrongAnswers.length === 5) {
		petal5.style.backgroundColor = 'lightgreen';
		smile.setAttribute('id', 'surprise');
	} else if (wrongAnswers.length === 6) {
		petal6.style.backgroundColor = 'lightgreen';
		smile.setAttribute('id', 'surprise');
	} else if (wrongAnswers.length === 7) {
		petal7.style.backgroundColor = 'lightgreen';
		smile.setAttribute('id', 'surprise');
		petal7.style.zIndex = '0'
	} else if (wrongAnswers.length === 8) {
		petal8.style.backgroundColor = 'lightgreen';
		smile.setAttribute('id', 'frown')
	}console.log(wrongAnswers)
}


// Show Cowboy Gear Function

function showCowboy() {
	accessoryButton.setAttribute('class', 'closed')
	brim.style.visibility = 'visible'
	baseLeft.style.visibility = 'visible'
	baseRight.style.visibility = 'visible'
	moustacheLeft.style.visibility = 'visible'
	moustacheRight.style.visibility = 'visible'
}

// Guess Reaction: Correct

function guessCorrect() {
	guessReaction.innerText = `Yay, ${input.value.toUpperCase()} was correct!`
}

// Guess Reaction: Incorrect

function guessIncorrect() {
	guessReaction.innerText = `Oh no! ${input.value.toUpperCase()} was incorrect!`;
}
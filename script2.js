//// Variables

const word = ['F', 'I', 'N', 'D', 'S'];
const correctUl = document.querySelector('.correct-ul');
const incorrectUl = document.querySelector('.incorrect-ul');
const form = document.querySelector('.form');
const input = document.querySelector('.input');
const startButton = document.querySelector('.start-button');
const rulesButton = document.querySelector('.open-rules')
const resetButton = document.querySelector('.reset-button')
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
	submitGuess();
	checkWin();
});

// Start Game event listener

startButton.addEventListener('click', (event) => {
	word.forEach(makeUnderScore);
});

// Show Rules event listener

rulesButton.addEventListener('click', (event) => {
	showRules()
})

// Reset game event listener

resetButton.addEventListener('click', (event) => {
	location.reload()
})

///// Functions /////

// Check win condition function

function checkWin() {
	if (answer.length === word.length) {
		alert('You Win');
	} else if(wrongAnswers.length === 8) {
		alert('You lose. Try again!')
	}
}

// Submit guess function

function submitGuess() {
		if (input.value.toUpperCase() === word[0]) {
			answer.push(input.value.toUpperCase());
			smile.setAttribute('id', 'smile');
			let key0 = document.getElementById('key0')
			key0.innerText = word[0]
			input.value = '';
		} else if (input.value.toUpperCase() === word[1]) {
			answer.push(input.value.toUpperCase());
			smile.setAttribute('id', 'smile');
			let key1 = document.getElementById('key1');
			key1.innerText = word[1];
			input.value = '';
		} else if (input.value.toUpperCase() === word[2]) {
			answer.push(input.value.toUpperCase());
			smile.setAttribute('id', 'smile');
			let key2 =document.getElementById('key2');
			key2.innerText = word[2];
			input.value = '';
		} else if (input.value.toUpperCase() === word[3]) {
			answer.push(input.value.toUpperCase());
			smile.setAttribute('id', 'smile');
			let key3 = document.getElementById('key3');
			key3.innerText = word[3];
			input.value = '';
		} else if (input.value.toUpperCase() === word[4]) {
			answer.push(input.value.toUpperCase());
			smile.setAttribute('id', 'smile');
			let key4 = document.getElementById('key4');
			key4.innerText = word[4];
			input.value = '';
		} else {
			wrongAnswers.push(input.value.toUpperCase());
			removePetal()
			let p2 = document.createElement('p')
			p2.innerText = input.value.toUpperCase()
			incorrectUl.appendChild(p2)
			input.value = ''
		}
}
// Incorrect guess function

function incorrectGuess() {
	// for (let i = 0; i < word.length; i++) {
	// if(input.value.toUpperCase() !== word[0] || word[1] || word[2] || word[3] || word[4]) {
	// 	console.log('This is wrong')
	// }
	// }
	wrongAnswers.push(input.value.toUpperCase());
	let p2 = document.createElement('p');
	p2.innerText = input.value.toUpperCase();
	incorrectUl.appendChild(p2);
}

// Generate underscore spots for letter choices

function makeUnderScore() {
	let underscore = document.createElement('p');
	underscore.classList.add('answer');
	underscore.setAttribute('id', 'key' + counter++);
	underscore.innerText = '_';
	correctUl.appendChild(underscore);
}

// Show Rules

function showRules () {
	alert(
		`Welcome to Flower Time!\n \n In order to keep the flower tall and happy, you must guess its favorite word! \n\n Here are the rules: \n - In the 'Correct' box, input your guess for which letters might be found in the magic word. \n - If your guess is correct, the flower will remain intact. \n - If you guess wrong, the flower will lose a petal. \n - If the flower loses all its petals, the game is over. \n - If all of your guesses are correct and you spell the magic word, you win! \n - When you are ready, press start game. Good Luck!\n`
	);
}

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
		// petal8.style.top = '30px'
		// petal8.style.borderColor = 'black transparent transparent transparent'
	}console.log(wrongAnswers)
}

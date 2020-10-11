//// Variables

const word = ['F', 'I', 'N', 'D', 'S'];
const correctUl = document.querySelector('.correct-ul');
const incorrectUl = document.querySelector('.incorrect-ul');
const form = document.querySelector('.form');
const input = document.querySelector('.input');
const startButton = document.querySelector('.start-button');
const rulesButton = document.querySelector('.open-rules')
const resetButton = document.querySelector('.reset-button')


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
	}
}

// Submit guess function

function submitGuess() {
		if (input.value.toUpperCase() === word[0]) {
			answer.push(input.value.toUpperCase());
			let key0 = document.getElementById('key0')
			key0.innerText = word[0]
			input.value = '';
		} else if (input.value.toUpperCase() === word[1]) {
			answer.push(input.value.toUpperCase());
			let key1 = document.getElementById('key1');
			key1.innerText = word[1];
			input.value = '';
		} else if (input.value.toUpperCase() === word[2]) {
			answer.push(input.value.toUpperCase());
			let key2 =document.getElementById('key2');
			key2.innerText = word[2];
			input.value = '';
		} else if (input.value.toUpperCase() === word[3]) {
			answer.push(input.value.toUpperCase());
			let key3 = document.getElementById('key3');
			key3.innerText = word[3];
			input.value = '';
		} else if (input.value.toUpperCase() === word[4]) {
			answer.push(input.value.toUpperCase());
			let key4 = document.getElementById('key4');
			key4.innerText = word[4];
			input.value = '';
		}
}
// Incorrect guess function

function incorrectGuess() {
	if(input.value.toUpperCase() !== word) {
		console.log('This is wrong')
	}
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

// const form = document.querySelector('.submit-form')
// const phrase = document.querySelector('.phrase')
// const input = document.querySelector('.input')
// let answer = document.querySelector('.answer')
// const correctUl = document.querySelector('.correct-ul')
// const incorrectUl = document.querySelector('.incorrect-ul')
// const winCountDiv = document.querySelector('.win-count')

// let key0 = document.getElementById('key0')
// let key1 = document.getElementById('key1')
// let key2 = document.getElementById('key2')
// let key3 = document.getElementById('key3')
// let key4 = document.getElementById('key4')

// //// Word(s) to guess

// let word = 'HELLO'

// //// Event listeners

// form.addEventListener('submit', (event) => {
// 	event.preventDefault();
// 	checkGuess()
// 	checkWin()
// });

// // Functions

// function checkGuess() {
// 	if(input.value.toUpperCase() === word[0]) {
// 		document.getElementById('key0')
// 		key0.innerText = input.value
// 		input.value = ''
// 	} else if(input.value.toUpperCase() === word[1]) {
// 		document.getElementById('key1')
// 		key1.innerText = input.value
// 		input.value = ''
// 	} else if(input.value.toUpperCase() === word[2]) {
// 		document.getElementById('key2')
// 		document.getElementById('key3')
// 		key2.innerText = input.value
// 		key3.innerText = input.value
// 		input.value = ''
// 	} else if(input.value.toUpperCase() === word[3]) {
// 		document.getElementById('key3')
// 		key3.innerText = input.value
// 		input.value = ''
// 	} else if(input.value.toUpperCase() === word[4]) {
// 		document.getElementById('key4')
// 		key4.innerText = input.value
// 		input.value = ''
// 	} else {
// 		incorrectGuess()
// 		input.value = ''
// 	}
// }

// function incorrectGuess() {
// 		let newP = document.createElement('p')
// 		newP.innerText = input.value.toUpperCase()
// 		incorrectUl.appendChild(newP)
// }

// function checkWin () {
// 	let newArr = key0.innerText + key1.innerText + key2.innerText + key3.innerText + key4.innerText
// 	if(newArr === word){
// 	alert('You win!')

// }
// }

// function winCount() {

// }

// // function submitGuess() {
// // 	for (let i = 0; i < word.length; i++) {
// // 		if(input.value === word[i]){
// // 	const p = document.createElement('p')
// // 	p.innerText = input.value
// // 	incorrectUl.appendChild(p)
// // 		}
// // }
// // }

//// Variables

const form = document.querySelector('.submit-form')
const phrase = document.querySelector('.phrase')
const input = document.querySelector('.input')

let key0 = document.getElementById('key0')
let key1 = document.getElementById('key1')
let key2 = document.getElementById('key2')
let key3 = document.getElementById('key3')
let key4 = document.getElementById('key4')

//// Word(s) to guess

let word = 'HELLO'

//// Event listeners

form.addEventListener('submit', (event) => {
	event.preventDefault();
	checkGuess()
});

// Functions

function submitGuess() {
	
}

function checkGuess() {
	if(input.value.toUpperCase() === word[0]) {
		document.getElementById('key0')
		key0.innerText = input.value
		input.value = ''
	} else if(input.value.toUpperCase() === word[1]) {
		document.getElementById('key1')
		key1.innerText = input.value
		input.value = ''
	} else if(input.value.toUpperCase() === word[2]) {
		document.getElementById('key2')
		document.getElementById('key3')
		key2.innerText = input.value
		key3.innerText = input.value
		input.value = ''
	} else if(input.value.toUpperCase() === word[3]) {
		document.getElementById('key3')
		key3.innerText = input.value
		input.value = ''
	} else if(input.value.toUpperCase() === word[4]) {
		document.getElementById('key4')
		key4.innerText = input.value
		input.value = ''
	} else {
		alert('Wrong answer bucko')
		input.value = ''
	}
}

// function incorrectGuess() {
// 	if(input.value !== word) {
// 		let newP = document.createElement('p')
// 		newP = input.value
		
// 	}
// }

// Goals

//Make flower
// Choose a word to  make
// Put it into an array, split it up by individual letters?
// Make a form to 'submit' for the correct word choice
// Make a separate 'input' box for letter choices. If a letter input matches a value for the word, allow it to be shown. If now, put it in the bad guess category

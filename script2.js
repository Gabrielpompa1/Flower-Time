//// Variables

const form = document.querySelector('.submit-form')
const phrase = document.querySelector('.phrase')
const input = document.querySelector('.input')
let answer = document.querySelector('.answer')
const correctUl = document.querySelector('.correct-ul')
const incorrectUl = document.querySelector('.incorrect-ul')

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
	checkWin()
	// submitGuess()
});

// Functions

// function submitGuess() {
// 	for (let i = 0; i < word.length; i++) {
// 		if(input.value === word[i]){
// 	const p = document.createElement('p')
// 	p.innerText = input.value
// 	incorrectUl.appendChild(p)
// 		}
// }
// }



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
		incorrectGuess()
		input.value = ''
	}
}

function incorrectGuess() {
		let newP = document.createElement('p')
		newP.innerText = input.value
		incorrectUl.appendChild(newP)
}

function splitWord() {
	return word.split('')
}

function checkWin () {
	let newArr = document.querySelectorAll('.answer')
	newArr.forEach()
	console.log(newArr[0].innerText)
}

checkWin()
// console.log(splitWord())
// console.log(input.value)
// // Goals

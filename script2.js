//// Variables
const word2 = ['F', 'I', 'N', 'D', 'S']
const word = ['H', 'E', 'L', 'L', 'O']
const correctUl = document.querySelector('.correct-ul')
const incorrectUl = document.querySelector('.incorrect-ul')
const form = document.querySelector('.form')
const input = document.querySelector('.input')
let answer = []

// word.forEach(solution)

// function solution(item, index, array) {
	
// 	answer.push()
// }
// console.log(answer)

form.addEventListener('submit', (event) => {
	event.preventDefault()
	submitGuess()
	checkWin()
})

// answer.forEach(checkWin())
function checkWin() {
	
}

console.log(answer)
function submitGuess() {
	for (let i = 0; i < word2.length; i++) {
		if(input.value.toUpperCase() === word2[i]) {
			answer.push(input.value.toUpperCase())
			const p = document.createElement('p')
			p.classList.add('answer')
			p.innerText = input.value.toUpperCase()
			correctUl.appendChild(p)
			input.value = ''
			console.log(p)
			console.log(answer)
			console.log("it works")
		} 
	}
}

function incorrectGuess() {
	
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
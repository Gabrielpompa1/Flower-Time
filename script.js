const previousGuesses = document.querySelector('.previous-guesses');
const correctGuesses = document.querySelector('.correct-guesses');
const form = document.querySelector('.form')
const input = document.querySelector('.input');
const submitButton = document.querySelector('.submit-button');
const ulCorrect = document.querySelector('.correct-Ul');

form.addEventListener('submit', (event) => {
    event.preventDefault()
    submitGuess()

})


    
    function startGame() {}
    
    function checkGuess() {
        
    }

    function submitGuess() {
        let li = document.createElement('li');
		li.innerText = input.value;
		ulCorrect.appendChild(li);
    }
    
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
    // make a separate 'input' box for letter choices. If a letter input matches a value for the word, allow it to be shown. If now, put it in the bad guess category
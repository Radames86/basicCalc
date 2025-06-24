// Switch statement
// if(num === 2){
//     //logic
// }else if(num === 3){
//     //logic
// }else if(num === 4){
//     //logic
// }


// i give a num for a month, i want it to log month name

function giveMonth(num){ // goes through it until it hits true
    switch(num){
        case 1: return "January"
        case 2: return "February"
        case 3: return "March"
        case 4: return "APril"
        case 5: return "May"
    }
}
    console.log(giveMonth(5))

    //////////////////////////////////////////////////////////////////////////////////
    // ClassNotes - 06/24/26

    let firstNumber = '';
let operation = '';
let secondNumber = '';

const buttonArray = document.querySelectorAll('.operator')
const numArray = document.querySelectorAll('.number')
const equal = document.querySelectorAll('.equals')

//when an operator is pressed
operatorArray.forEach((button) => {
    buttonArray.addEventListener('click', (event) => {
        console.log(event.target.innerText)
    })
})

//when a number is pressed
numArray.forEach((button) => {
    button.addEventListener('click', (event) => {
        // console.log(event.target.innerText)
        if(!operation){// if we haven't clicked an operator
        firstNumber += event.target.innerText //this gives us the string of whatever we clicked
        updateScreen()
        }else{
            secondNumber += event.target.innerText //if our secondNum does exist
            updateScreen()
        }
    })
})

//when equals is pressed
 equal.addEventListener('click', (event) => {
         calcResult()
    })


// Calculate the result of the current expression, if valid, and display it on the screen
// valid when there is a first, second and operator
// eval will calculate all math
function calcResult() {
  if(firstNumber && secondNumber && operation){
    firstNumber = eval(firstNumber + operation + secondNumber) 
    // console.log(result)
    operation = '' // gets rid of the operation after the calculationis made because we no longer need it
    secondNumber = '' // gets rid of the secondNum after the calculationis made because we no longer need it
    updateScreen() // this updates the result
  }
}

// Handle operations when operation buttons (+, -, /, *) are pressed
function operationPressed(op) {
  
}



// Handle numeric input
function numberPressed(number) {
  
}



// Clear the calculator screen
function clearScreen() {
  
}


// Update the screen based on `firstNumber`, `operation`, and `secondNumber`
function updateScreen() {
  document.querySelector('#screen').innerText = `${firstNumber} ${operation} ${secondNumber}`
}


// TODO: Implement query selectors and add event listeners to the calculator buttons

//TODO
// operator logic
// decimal logic
// clear 
const screenDisplay = document.querySelector('.screen')
const buttons = document.querySelectorAll('button')
// console.log(screenDisplay)
console.log(buttons)

let calculation = []
let growingCalculation 

function calculate(button){
    console.log('clicked', button.textContent)
    const result = button.textContent
    calculation.push(result)
    console.log(calculation)
    growingCalculation = calculation.join('')
    screenDisplay.textContent = growingCalculation

}

buttons.forEach(button => button.addEventListener('click', () => calculate(button)))

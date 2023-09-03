const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');

let currentInput = '0';
let currentOperator = '';
let firstOperand = 0;

function updateDisplay() {
    display.textContent = currentInput;
}

function clear() {
    currentInput = '0';
    currentOperator = '';
    firstOperand = 0;
    updateDisplay();
}

function appendNumber(number) {
    if (currentInput === '0' || currentInput === 'Error') {
        currentInput = number;
    } else {
        currentInput += number;
    }
    updateDisplay();
}

function operate(operator) {
    if (currentOperator !== '') {
        calculate();
    }
    firstOperand = parseFloat(currentInput);
    currentInput = '0';
    currentOperator = operator;
}

function calculate() {
    const secondOperand = parseFloat(currentInput);
    if (isNaN(secondOperand)) {
        currentInput = 'Error';
    } else {
        switch (currentOperator) {
            case '+':
                currentInput = (firstOperand + secondOperand).toString();
                break;
            case '-':
                currentInput = (firstOperand - secondOperand).toString();
                break;
            case '*':
                currentInput = (firstOperand * secondOperand).toString();
                break;
            case '/':
                currentInput = (firstOperand / secondOperand).toString();
                break;
        }
    }
    currentOperator = '';
    updateDisplay();
}

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const buttonText = button.textContent;
        switch (buttonText) {
            case 'C':
                clear();
                break;
            case '+':
            case '-':
            case '*':
            case '/':
                operate(buttonText);
                break;
            case '=':
                calculate();
                break;
            default:
                appendNumber(buttonText);
                break;
        }
    });
});

updateDisplay();

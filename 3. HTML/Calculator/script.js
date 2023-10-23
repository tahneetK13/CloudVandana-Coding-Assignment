const resultElement = document.getElementById('result');
const clearBtn = document.getElementById('clear-button');
const deleteBtn = document.getElementById('delete-button');
const divideBtn = document.getElementById('divide-button');
const multiplyBtn = document.getElementById('multiply-button');
const subtractBtn = document.getElementById('subtract-button');
const addBtn = document.getElementById('add-button');
const decimalBtn = document.getElementById('decimal-button');
const equalBtn = document.getElementById('equal-button');
const numberBtn = document.querySelectorAll('.number');

let result = '';
let operation = '';
let previousOperand = '';

const appendNumber = (number) => {
    if (number === '.' && result.includes('.')) return;
    result += number;
    updateDisplay();
}

const updateDisplay = () => {
    if (operation){
        resultElement.innerText = `${previousOperand} ${operation} ${result}`;
    } else {
        resultElement.innerText = result;
    }
}

const selectOperator = (operatorValue) => {
    if (result === '') return;

    if (operation !== '' && previousOperand !== ''){
        calculateResult();
    }

    operation = operatorValue;
    previousOperand = result;
    result = '';
    updateDisplay();
}

const calculateResult = () => {
    let findResult;
    const prev = parseFloat(previousOperand);
    const current = parseFloat(result);

    if(isNaN(prev) || isNaN(current)) return;

    switch (operation) {
        case '+':
            findResult = prev + current;
            break;
        case '-':
            findResult = prev - current;
            break;
        case '/':
            findResult = prev / current;
            break;
        case '*':
            findResult = prev * current;
            break;
        default:
            return;
    }

    result = findResult.toString();
    operation = '';
    previousOperand = '';
    updateDisplay(); 
}

numberBtn.forEach(button => {
    button.addEventListener('click', () => {
        appendNumber(button.innerText);
    });
});

const clearDisplay = () => {
    result = '';
    previousOperand = '';
    operation = '';
    updateDisplay();
}

const deleteLast = () => {
    if (result === '') return;
    result = result.slice(0, -1);
    updateDisplay();
}

decimalBtn.addEventListener('click', () => appendNumber('.'));
addBtn.addEventListener('click', () => selectOperator('+'));
subtractBtn.addEventListener('click', () => selectOperator('-'));
divideBtn.addEventListener('click', () => selectOperator('/'));
multiplyBtn.addEventListener('click', () => selectOperator('*'));
equalBtn.addEventListener('click', calculateResult);

clearBtn.addEventListener('click', clearDisplay);
deleteBtn.addEventListener('click', deleteLast);


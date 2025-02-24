//Initialization constants
const buttons = ['AC', '+/-', '%', '/', '7', '8', '9', 'x', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='];
const buttonNames = ['clear', 'negate', 'percent', 'divide', 'seven', 'eight', 'nine', 'multiply', 'four', 'five', 'six', 'subtract', 'one', 'two', 'three', 'add', 'zero', 'decimal', 'equals'];
const numRows = 5;
const numCols = 4;

//Saved operands
let firsOperand = 0;
let lastOperation = '';

// Initialice the calculator
initialiceCalc();

/**
 * Initialices the calculator
 */
function initialiceCalc() {
    const bottonDiv = document.getElementById('buttons');
    for (let i = 0; i < numRows; i++) {
        const row = document.createElement('div');
        row.classList.add('row');
        for (let j = 0; j < numCols; j++) {
            if (i*numCols + j < buttons.length) {
                const button = document.createElement('button');
                button.classList.add('button');
                button.id = buttonNames[i * numCols + j];
                button.innerText = buttons[i * numCols + j];
                button.addEventListener('click', function() {
                    handleButtonClick(button.innerText);
                });
                button.id !== 'equals' ? button.addEventListener('mouseover', () => button.style.color = 'orange') : button.addEventListener('mouseover', () => button.style.color = 'black');
                button.addEventListener('mouseleave', () => button.style.color = 'white');
                row.appendChild(button);
            }
        }
        bottonDiv.appendChild(row);
    }
}

function handleButtonClick(button) {
    const result = document.getElementById('result');
    const operation = document.getElementById('operation');
    if (!isNaN(button)) {
        handleNumberInput(button, result);
    } else {
        handleOperationInput(button, result, operation);
    }
}

function handleNumberInput(button, result) {
    result.innerText == 0 ? result.innerText = button : result.innerText += button;
}

function handleOperationInput(button, result, operation) {
    switch(button) {
        case 'AC':
            clearResult(result, operation);
            break;
        case '+/-':
            negateResult(result);
            break;
        case '%':
            percentResult(result);
            break;
        case '.':
            addDecimal(result);
            break;
        case '+':
        case '-':
        case 'x':
        case '/':
            setOperation(button, result, operation);
            break;
        case '=':
            calculateResult(result, operation);
            break;
        default:
            break;
    }
}

function clearResult(result, operation) {
    result.innerText = '0';
    operation.innerText = '';
    firsOperand = 0;
    lastOperation = '';
}

function negateResult(result) {
    result.innerText = "-" + result.innerText;
}

function percentResult(result) {
    result.innerText = Number(result.innerText) / 100;
}

function addDecimal(result) {
    if (Number.isInteger(Number(result.innerText)) && result.innerText[result.innerText.length - 1] !== '.')
        result.innerText += ".";
}

function setOperation(button, result, operation) {
    if (lastOperation === '') {
        firsOperand = Number(result.innerText);
    } else {
        firsOperand = operate(firsOperand, Number(result.innerText), lastOperation);
    }
    lastOperation = button;
    operation.innerText = firsOperand + " " + button;
    result.innerText = '0';
}

function calculateResult(result, operation) {
    if (lastOperation !== '') {
        result.innerText = operate(firsOperand, Number(result.innerText), lastOperation);
        firsOperand = 0;
        lastOperation = '';
        operation.innerText = '';
    }
}

function operate(a, b, operator) {
    switch(operator) {
        case '+':
            return sum(a, b);
        case '-':
            return sub(a, b);
        case 'x':
            return mult(a, b);
        case '/':
            return div(a, b);
        default:
            return NaN;
    }
}

/**
 * Add two numbers
 * @param {*} a 
 * @param {*} b 
 * @returns the sum of a and b
 */
function sum(a, b) {
    const sum = Number(a) + Number(b);
    if (!Number.isInteger(sum)) {
        const decimals = sum.toString().split(".")[1];
        if (decimals.length > 4) {
            return sum.toFixed(4);
        }
    }
    return sum;
}

/**
 * Subtract two numbers
 * @param {*} a 
 * @param {*} b 
 * @returns the difference of a and b
 */
function sub(a, b) {
    const sub = Number(a) - Number(b);
    if (!Number.isInteger(sub)) {
        const decimals = sub.toString().split(".")[1];
        if (decimals.length > 4) {
            return sub.toFixed(4);
        }
    }
    return sub;
}

/**
 * Multiply two numbers
 * @param {*} a 
 * @param {*} b 
 * @returns The product of a and b
 */
function mult(a, b) {
    const mult = Number(a) * Number(b);
    if (!Number.isInteger(mult)) {
        const decimals = mult.toString().split(".")[1];
        if (decimals.length > 4) {
            return mult.toFixed(4);
        }
    }
    return mult;
}

/**
 * Divide two numbers
 * @param {*} a 
 * @param {*} b 
 * @returns The division of a and b
 */
function div(a, b) {
    // Check if b is 0
    if (b === 0)
        return "Tf you doin?";

    const div = Number(a) / Number(b);
    if (!Number.isInteger(div)) {
        const decimals = div.toString().split(".")[1];
        if (decimals.length > 4) {
            return div.toFixed(4);
        }
    }
    return div;
}
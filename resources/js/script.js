const buttons = ['AC', '+/-', '%', '/', '7', '8', '9', 'x', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='];
const buttonNames = ['clear', 'negate', 'percent', 'divide', 'seven', 'eight', 'nine', 'multiply', 'four', 'five', 'six', 'subtract', 'one', 'two', 'three', 'add', 'zero', 'decimal', 'equals'];
const numRows = 5;
const numCols = 4;

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
    const display = document.getElementById('result');
    if (!isNaN(button)) {
        display.innerText == 0 ? display.innerText = button : display.innerText += button;
    } else {
        switch(button) {
            case 'AC':
                display.innerText = '0';
                break;
            case '+/-':
                display.innerText = "-" + display.innerText;
                break;
            case '%':
                display.innerText = Number(display.innerText) / 100;
                break;
            case '.':
                display.innerText += ".";
                break;
        }
    }
}

/**
 * Add two numbers
 * @param {*} a 
 * @param {*} b 
 * @returns the sum of a and b
 */
function sum(a, b) {
    const sum = a + b;
    return Number.isInteger(sum) ? sum : sum.toFixed(4);
}

/**
 * Subtract two numbers
 * @param {*} a 
 * @param {*} b 
 * @returns the difference of a and b
 */
function sub(a, b) {
    const sub = a - b;
    return Number.isInteger(sub) ? sub : sub.toFixed(4);
}

/**
 * Multiply two numbers
 * @param {*} a 
 * @param {*} b 
 * @returns The product of a and b
 */
function mult(a, b) {
    const mult = a * b;
    return Number.isInteger(mult) ? mult : mult.toFixed(4);
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
        return NaN;

    const div = a / b;
    return Number.isInteger(div) ? div : div.toFixed(4);
}
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
// Velasquez, Gabrielle Ainshley L.    WD-302 

// Hands-On Quiz: Understanding Export Modules Quiz
// Instructions:
// Problem: You have been asked to create a Node.js program that calculates the net salary of an employee for the week. The employee works 4 hours per day for 6 days a week, and their rate is 300 per hour. The following deductions should be taken into account: 10% tax, 1200 for SSS, 300 for Pag-Ibig fund, and 400 for PhilHealth.

// calculation.js

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return 'Error: Division by zero';
    }
    return a / b;
}

module.exports = {
    add,
    subtract,
    multiply,
    divide
};

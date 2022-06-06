// Activity 3…
// Test this function to ensure it works by passing a number to the doMaths function.
// Then passing a number and one of the four maths functions to the returned function.
const add = (a, b) => {
    return a + b;
};
const subtract = (a, b) => {
    return a - b;
};
const multiply = (a, b) => {
    return a * b;
};
const divide = (a, b) => {
    return a / b;
};

const doMaths = (num1) => {
    return (num2, fn) => {
        return fn(num1, num2);
    }
};

// Solution:
console.log(doMaths(15)); // (num2, fn) => {return fn(num1, num2)};
console.log(doMaths(15)(10, add)) // 25
console.log(doMaths(15)(10, divide)) // 1.5
console.log(doMaths(15)(10, multiply)) // 150
console.log(doMaths(15)(10, subtract)); // 5
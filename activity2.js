// Activity 2...

// The array method .map is an example of a higher-order function.
// Declare a variable with five numbers, then use .map to iterate through the array and multiply each array item by 3.

let arrNum = [8, 13, 50, 75, 300];

const multiThree = (input) => {
    return input.map(x => x * 3);
};

console.log(multiThree(arrNum));

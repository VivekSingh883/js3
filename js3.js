
const number = prompt("Enter a number:");
if (number % 2 === 0) {
    console.log(`${number} is even.`);
} else {
    console.log(`${number} is odd.`);
}

const marks = parseInt(prompt("Enter student's marks:"));
if (marks >= 90) {
    console.log("Grade A");
} else if (marks >= 75) {
    console.log("Grade B");
} else if (marks >= 50) {
    console.log("Grade C");
} else {
    console.log("Grade F");
}

const age = parseInt(prompt("Enter your age:"));
if (age >= 18) {
    console.log("You are eligible to vote.");
} else {
    console.log("You are not eligible to vote.");
}

const year = parseInt(prompt("Enter a year:"));
if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    console.log(`${year} is a leap year.`);
} else {
    console.log(`${year} is not a leap year.`);
}

const num1 = parseFloat(prompt("Enter the first number:"));
const num2 = parseFloat(prompt("Enter the second number:"));
const operator = prompt("Enter an operator (+, -, *, /):");

switch (operator) {
    case '+':
        console.log(`Result: ${num1 + num2}`);
        break;
    case '-':
        console.log(`Result: ${num1 - num2}`);
        break;
    case '*':
        console.log(`Result: ${num1 * num2}`);
        break;
    case '/':
        console.log(`Result: ${num1 / num2}`);
        break;
    default:
        console.log("Invalid operator.");
}

const trafficLight = prompt("Enter the traffic light color (Red, Yellow, Green):");
switch (trafficLight.toLowerCase()) {
    case 'red':
        console.log("Stop.");
        break;
    case 'yellow':
        console.log("Get Ready.");
        break;
    case 'green':
        console.log("Go.");
        break;
    default:
        console.log("Invalid color.");
}

function sumArray(arr) {
    return arr.reduce((acc, curr) => acc + curr, 0);
}

function reverseArray(arr) {
    return arr.reverse();
}

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const mergedArray = array1.concat(array2);

function differenceMaxMin(arr) {
    return Math.max(...arr) - Math.min(...arr);
}

// Example usages
console.log(sumArray([1, 2, 3, 4, 5])); 
console.log(reverseArray([1, 2, 3])); 
console.log(mergedArray); 
console.log(differenceMaxMin([1, 2, 3, 4, 5])); 

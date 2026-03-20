// hw2 Check if a Number is Positive or Negative
let number = prompt("number:");

if (number > 0) {
    alert("number is positive.");
} 
else if (number < 0) {
    alert("number is negative.");
} 
else {
    alert("number is zero.");
}

// hw3 Check User’s Age for Voting Eligibility
let age = prompt("your age:");

if (age >= 18) {
    alert("You vote!");
} 
else {
    alert("You are not vote.");
}

// hw4 Compare Two Numbers
let num1 = prompt("first number:");
let num2 = prompt("second number:");

if (num1 > num2) {
    alert("first number larger.");
} 
else if (num2 > num1) {
    alert("second number larger.");
} 
else {
    alert("Both numbers equal.");
}
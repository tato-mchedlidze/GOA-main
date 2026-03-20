// eval
// hw1
let expr1 = prompt("a math expression (e.g., 5+3):");
console.log("Result:", eval(expr1));

// hw2
let expr2 = prompt("an expression with parentheses (e.g., (8+2)*3):");
console.log("Result:", eval(expr2));

// hw3
let expr3 = prompt("a division (e.g., 100/4):");
console.log("Result:", eval(expr3));

// hw4
let num = prompt("a number:");
console.log("Square:", eval(num + "*" + num));

// hw5
let exp = "20-7"; // storing math expression as string
console.log("Result of " + exp + " is", eval(exp));


// isNaN
// hw6
let input1 = prompt("something:");
if (isNaN(input1)) {
    console.log("Not a number");
} else {
    console.log("It is a number");
}

// hw7
let age = prompt("your age:");
if (isNaN(age)) {
    console.log("Invalid age");
} else {
    console.log("Valid age");
}

// hw8
let val1 = prompt("first value:");
let val2 = prompt("second value:");
console.log("First value is number?", !isNaN(val1));
console.log("Second value is number?", !isNaN(val2));

// hw9
let input2 = prompt("Type anything:");
if (isNaN(input2)) {
    console.log("It's text");
} else {
    console.log("It's a number");
}

// hw10
let n1 = prompt("first number:");
let n2 = prompt("second number:");
let op = prompt("operator (+, -, *, /):");

if (isNaN(n1) || isNaN(n2)) {
    console.log("Invalid input, must be numbers");
} else {
    let result = eval(n1 + op + n2);
    console.log("Result:", result);
}


// parseInt()
// hw11
let numStr = prompt("whole number (e.g., '25'):");
let num1 = parseInt(numStr);
alert("Converted number: " + num);

// hw12
let numStr1 = prompt("whole number (e.g., '10'):");
let numStr2 = prompt("whole number (e.g., '20'):");
let sum = parseInt(numStr1) + parseInt(numStr2);
alert("Sum: " + sum);

// hw13
let pxStr = prompt('Enter "55px":');
let pxNum = parseInt(pxStr);
alert("Extracted number: " + pxNum);

// hw14
let val3 = prompt('value like "20px":');
let val4 = prompt('another value like "15.9":');
let added = parseInt(val3) + parseInt(val4);
alert("Sum after parseInt: " + added);

// hw15
let hexStr = prompt('somthing like"0xF":');
let hexNum = parseInt(hexStr);
alert("Converted number: " + hexNum);


// parseFloat()
// hw16
let p1 = parseFloat(prompt("Enter first price:"));
let p2 = parseFloat(prompt("Enter second price:"));
alert("Total: " + (p1 + p2));

// hw17
let bill = parseFloat(prompt("Enter bill:"));
let tipPercent = parseFloat(prompt("Enter tip %:"));
let tip = bill * (tipPercent / 100);
alert("Total with tip: " + (bill + tip));

// hw18
let c = parseFloat(prompt("Enter Celsius:"));
alert("Fahrenheit: " + ((c * 9/5) + 32));

// hw19
let w = parseFloat(prompt("Enter weight (kg):"));
let h = parseFloat(prompt("Enter height (m):"));
alert("BMI: " + (w / (h * h)));

// hw20
let d = parseFloat(prompt("Enter distance (km):"));
let f = parseFloat(prompt("Enter fuel (L):"));
alert("Km per liter: " + (d / f));
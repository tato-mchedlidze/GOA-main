// cw1
let value1 = prompt("value1:");
let value2 = prompt("value2:");

if (isNaN(value1)) {
    console.log("Is not a number");
} 
else {
    console.log("Is a number");
}

if (isNaN(value2)) {
    console.log("Is not a number");
} 
else {
    console.log("Is a number");
}


// cw2
let num1 = prompt("number1 (like 1.1):");
let num2 = prompt("number2 (like 1.1):");

let Sum1 = parseInt(num1) + parseInt(num2);
console.log("parseInt:", Sum1);

let Sum2 = parseFloat(num1) + parseFloat(num2);
console.log("parseFloat", Sum2);

if (Sum1 === Sum2) {
    console.log("same");
} 
else {
    console.log("not same");
}


// cw3
let expression = prompt("math expression (e.g., 12.5 + 7.3 * 2):");

let result = eval(expression);

let intResult = parseInt(result);

let floatResult = parseFloat(result);

console.log("Original:" + expression);
console.log("Evaluated:" + result);
console.log("Integer:" + intResult);
console.log("Float:" + floatResult);

// hw3
let num = 7;
let result = num % 2 === 0 ? "Even" : "Odd";
console.log(result);

// hw4
let a = 10;
let b = 25;
let bigger = a > b ? a : b;
console.log(bigger);

// hw5
let age = 16;
let canVote = age >= 18 ? "Eligible" : "Not Eligible";
console.log(canVote);

// hw6
let score = 42;
let grade = score >= 50 ? "Pass" : "Fail";
console.log(grade);

// hw7
let x = -3;
let checkNum = x > 0 ? "Positive" : x < 0 ? "Negative" : "Zero";
console.log(checkNum);


// hw8
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let merged = [...arr1, ...arr2];
console.log(merged);

// hw9
let person = { name: "Ana", age: 20 };
let newPerson = { ...person, age: 25 };
console.log(person);
console.log(newPerson);


// hw10
function sum(...nums) {
    return nums.reduce((total, n) => total + n, 0);
}
console.log(sum(1, 2, 3, 4));

// hw11
let user = { id: 1, username: "Z", level: 5 };
let { id, ...rest } = user;
console.log(id);
console.log(rest);


// hw12 
// greet.js

// export function greet(name) {
//     console.log("Hello " + name);
// }

// main.js

// import { greet } from "./greet.js";
// greet("Z");



// hw13 – Export Multiple Values
// mathUtils.js

// export const PI = 3.14;
// export function area(r) {
//     return PI * r * r;
// }
// export function circumference(r) {
//     return 2 * PI * r;
// }

// main.js

// import { PI, area, circumference } from "./mathUtils.js";
// console.log(PI);
// console.log(area(5));
// console.log(circumference(5));

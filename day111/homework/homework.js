// hw3
let num = 7;
console.log(num % 2 === 0 ? "Even" : "Odd");

// hw4
let a = 10, b = 20;
console.log(a > b ? a : b);

// hw5
let age = 16;
console.log(age >= 18 ? "Eligible" : "Not Eligible");

// hw6
let score = 45;
console.log(score >= 50 ? "Pass" : "Fail");

// hw7
let number = -3;
console.log(number > 0 ? "Positive" : number < 0 ? "Negative" : "Zero");

// hw8
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let merged = [...arr1, ...arr2];
console.log(merged);

// hw9
let person = { name: "Z", age: 17 };
let newPerson = { ...person, age: 18 };
console.log(person);
console.log(newPerson);

// hw10
function sum(...nums) {
    return nums.reduce((a, b) => a + b, 0);
}
console.log(sum(1, 2, 3, 4));

// hw11
let user = { name: "Luka", age: 20, city: "Tbilisi" };
let { name, ...rest } = user;
console.log(name);
console.log(rest);

// hw12
// diffrent files


// hw13

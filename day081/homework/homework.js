// hw4
let i = 1;
do {
    console.log(i);
    i++;
} while (i <= 5);


// hw5
let j = 2;
do {
    console.log(j);
    j += 2;
} while (j <= 10);


// hw6
let k = 10;
do {
    console.log(k);
    k--;
} while (k >= 1);


// hw7
let userNum;
do {
    userNum = prompt("Enter a number greater than 100:");
} while (userNum <= 100 && userNum !== null);


// hw8
let sum = 0;
let n = 1;
do {
    sum += n;
    n++;
} while (n <= 10);
console.log("Total sum:", sum);


// hw9
let nums = [5, 10, 15, 20];
for (let num of nums) {
    console.log(num);
}


// hw10
let str = "Hello";
for (let ch of str) {
    console.log(ch);
}


// hw11
let arr = [2, 4, 6, 8];
let total = 0;
for (let val of arr) {
    total += val;
}
console.log("Sum of array:", total);


// hw12
let numbers = [1, 2, 3, 4, 5, 6];
for (let number of numbers) {
    if (number % 2 === 0) {
        console.log(number);
    }
}


// hw13
let names = ["Ana", "Nika", "Saba", "Luka"];
for (let name of names) {
    console.log(name);
}


// hw14
let person = { name: "David", age: 25, city: "Tbilisi" };
for (let key in person) {
    console.log(key);
}


// hw15

for (let key in person) {
    console.log(person[key]);
}


// hw16
let count = 0;
for (let key in person) {
    count++;
}

console.log("Property count:", count);


// hw17
let checkKey = "age";
let found = false;
for (let key in person) {
    if (key === checkKey) {
        found = true;
    }
}

console.log("Key exists:", found);


// hw18
let keyString = "";
for (let key in person) {
    keyString += key + " ";
}

console.log("Keys:", keyString.trim());
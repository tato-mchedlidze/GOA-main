//some
// hw1 Positive Number Check
let a1 = [-2, -1, 0, 5];
console.log(a1.some(n => n > 0));

// hw2 Even Number Check
let a2 = [1, 3, 7, 4];
console.log(a2.some(n => n % 2 === 0));

// hw3 String Length Check
let w1 = ["hi", "world", "sunshine"];
console.log(w1.some(s => s.length > 5));

// hw4 Falsy Value Detection
let a3 = [1, 0, "hi"];
console.log(a3.some(x => !x));

// hw5 Prime Number Detection
let a4 = [4, 6, 8, 11];
function isPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}
console.log(a4.some(isPrime));


// forEach
// hw6 Print Elements
let b1 = [10, 20, 30];
b1.forEach(x => console.log(x));

// hw7 Print with Index
let b2 = ["a", "b", "c"];
b2.forEach((x, i) => console.log("Index:", i, "Value:", x));

// hw8 Sum of Numbers
let b3 = [1, 2, 3];
let sum = 0;
b3.forEach(x => sum += x);
console.log(sum);

// hw9 Uppercase Strings
let b4 = ["apple", "banana"];
b4.forEach(x => console.log(x.toUpperCase()));

// hw10 Extract Names from Objects
let people = [{name: "Alice"}, {name: "Bob"}];
people.forEach(p => console.log(p.name));


// map
// hw11 Square Numbers
let c1 = [1, 2, 3];
console.log(c1.map(x => x * x));

// hw12 Double Numbers
let c2 = [5, 10, 15];
console.log(c2.map(x => x * 2));

// hw13 Uppercase Strings
let c3 = ["red", "blue"];
console.log(c3.map(x => x.toUpperCase()));

// hw14 Extract Names
let users = [{name: "Alice"}, {name: "Bob"}];
console.log(users.map(u => u.name));

// hw15 Add 10 to Numbers
let c4 = [1, 2, 3];
console.log(c4.map(x => x + 10));

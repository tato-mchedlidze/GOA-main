// hw 1: Countdown Timer
let count = 10;

let countdown = setInterval(() => {
    console.log("hw1 Countdown:", count);
    count--;
    if (count < 0) {
        clearInterval(countdown);
        console.log("hw1: Time's up!");
    }
});


// hw 2
let toggle = true;

let flashes = 0;

let titleInterval = setInterval(() => {
    document.title = toggle ? "Hello" : "Goodbye";
    toggle = !toggle;
    flashes++;
    if (flashes === 6) {
        clearInterval(titleInterval);
    }
});


// hw 3
let box = document.getElementById("box");

let position = 0;

let move = setInterval(() => {
    position += 10;
    box.style.left = position + "px";
    if (position >= 100) {
        clearInterval(move);
    }
}, 200);


// hw 4
let countRandom = 0;

let randomInterval = setInterval(() => {
    let randomNumber = Math.floor(Math.random() * 10) + 1;
    console.log("hw4 Random Number:", randomNumber);
    countRandom++;
    if (countRandom === 5) {
        clearInterval(randomInterval);
    }
}, 1500);


// hw 5
let words = ["apple", "banana", "cherry"];

for (let i = 0; i < words.length; i++) {
    console.log("hw5 Uppercase:", words[i].toUpperCase());
}


// hw 6
let numbers = [1, 2, 3];

numbers[1] = 0;
console.log("hw6 Replaced Middle:", numbers);


// hw 7
let fruits = ["apple", "banana"];

fruits.push("cherry");
fruits.unshift("orange");
fruits.pop([3]);
console.log("hw7 Final Array:", fruits);


// hw 8
let nums = [10, 20, 30, 40];

let sum = 0;

for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
}
let average = sum / nums.length;
console.log("hw8 Average:", average);


// hw 9
let items = ["a", "b", "c"];

console.log("hw9 Reverse:");
console.log(items[2]);
console.log(items[1]);
console.log(items[0]);


// hw 10
let things = ["apple", "banana", "cherry", "date", "fig"];

console.log("hw10 Loop with Index:");
for (let i = 0; i < things.length; i++) {
    console.log("Index " + i + ": " + things[i]);
}
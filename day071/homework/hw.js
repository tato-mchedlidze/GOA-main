// hw 2
let fruits = ["apple", "banana", "orange", "grape", "mango"];
console.log("First fruit:", fruits[0]);
console.log("Last fruit:", fruits[fruits.length - 1]);
console.log("fruits:", fruits.length);


// hw 3
let colors = ["red", "green", "blue"];
colors.push("yellow"); // Add to end
colors.shift();        // Remove first
colors.unshift("purple"); // Add to beginning
console.log("Final array:", colors);


// hw 4
let numbers = [2, 3, 4, 5];
for (let i = 0; i < numbers.length; i++) {
  console.log("Doubled:", numbers[i] * 2);
}


// hw 5
function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
console.log("Sum of array [1, 2, 3]:", sumArray([1, 2, 3]));


// hw 6
function findLargest(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
        max = arr[i];
        }
    }
    return max;
}
console.log("Largest number:", findLargest([10, 4, 22, 8, 15]));


// hw 7
let favoriteMovies = ["Inception", "Interstellar", "Matrix", "Avatar", "Shrek"];
let userMovie = prompt("Enter a movie name:");
if (favoriteMovies.includes(userMovie)) {
    alert("Yes");
} else {
    alert("No.");
}


// hw 8
let words = ["banana", "apple", "pear", "orange"];
words.sort();
let joinedWords = words.join(", ");
console.log("words:", joinedWords);


// hw 9
function getRandomNumber() {
    return Math.floor(Math.random() * 10) + 1;
}
console.log("Random number", getRandomNumber());


// hw 10
let userNumber = parseFloat(prompt("Enter a decimal number:"));
console.log("Rounded down:", Math.floor(userNumber));
console.log("Rounded up:", Math.ceil(userNumber));
console.log("Rounded to nearest:", Math.round(userNumber));


// hw 11
let numArray = [45, 12, 78, 3, 29];
console.log("Maximum:", Math.max(...numArray));
console.log("Minimum:", Math.min(...numArray));
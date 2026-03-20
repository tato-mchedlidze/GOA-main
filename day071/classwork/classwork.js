// cw1
// int
let numbers = [1, 2, 3, 4, 5];

console.log("numbers:", numbers);
console.log("length:", numbers.length);

let moreNumbers = numbers.concat([6, 7]);

console.log("new", moreNumbers);


// str
let fruits = ["apple", "banana"];

console.log("fruits", fruits);
console.log("length", fruits.length);

let moreFruits = fruits.concat(["melon", "grapes"]);

console.log("new", moreFruits);


// mixed
let mixed = [1, "test", true, null];

console.log("mixed", mixed);
console.log("length", mixed.length);

let moreMixed = mixed.concat(["new", 99]);

console.log("new", moreMixed);


// cw2
// რანდომ რიცხვი 1-დან 100-მდე
let randomNumber = Math.floor(Math.random() * 100) + 1;


while (true) {
    let userInput = prompt("number 1 through 100");
    let guess = Number(userInput);

    if (guess > randomNumber) {
        alert("your numbers larger");
    } 
    else if (guess < randomNumber) {
        alert("your numbers smaller");
    } 
    else {
        alert("your numbers just right!!🎉");
        break;
    }
}
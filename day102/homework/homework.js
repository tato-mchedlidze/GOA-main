// hw2
console.log(Math.random());

// hw3
function randomDecimal() {
    return Math.random();
}
console.log(randomDecimal());

// hw4
function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}
console.log(rollDice());

// hw5
function flipCoin() {
    return Math.random() < 0.5 ? "Heads" : "Tails";
}
console.log(flipCoin());

// hw6
function generatePassword() {
    let chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let password = "";
    for (let i = 0; i < 8; i++) {
        let randIndex = Math.floor(Math.random() * chars.length);
        password += chars[randIndex];
    }
    return password;
}
console.log(generatePassword());

// hw7 (Random Quote Generator)
let quotes = [
    "The best way to get started is to quit talking and begin doing.",
    "Don’t let yesterday take up too much of today.",
    "It’s not whether you get knocked down, it’s whether you get up.",
    "If you are working on something exciting, it will keep you motivated.",
    "Success is not in what you have, but who you are."
];
function showQuote() {
    let randomIndex = Math.floor(Math.random() * quotes.length);
    let randomQuote = quotes[randomIndex];
    document.body.style.backgroundColor = `hsl(${Math.random()*360}, 50%, 70%)`;
    document.getElementById("quote").innerText = randomQuote;
}

// hw8
let today = new Date();
console.log(today.getDate());

// hw9
let birthday = new Date(today.getFullYear(), 6, 15); 
console.log(birthday.getDate());

// hw10
console.log(today.getDate() === 1);

// hw11
console.log(today.getDay());

// hw12
console.log(birthday.getDay());

// hw13
console.log(today.getDay() === 0);

// hw14
console.log(today.getFullYear());

// hw15
console.log(birthday.getFullYear());

// hw16
console.log(today.getFullYear() === 2025);

// hw17
console.log(today.getHours());

// hw18
let someDate = new Date("2025-07-15T14:30:00");
console.log(someDate.getHours());

// hw19
console.log(today.getHours() < 12);

// hw20
console.log(today.getMinutes());

// hw21
console.log(someDate.getMinutes());

// hw22
console.log(today.getMinutes() === 0);

// hw23
let date1 = new Date();
console.log(date1.getSeconds());

// hw24
alert(new Date().getSeconds());

// hw25
function getSeconds(d) {
    return d.getSeconds();
}
console.log(getSeconds(new Date()));

// hw26
let d1 = new Date();
let d2 = new Date(Date.now() + 5000);
console.log(d1.getSeconds() === d2.getSeconds());

// hw27
setInterval(() => {
    console.log(new Date().getSeconds());
}, 1000);

// hw28
console.log(today.getMonth());

// hw29
alert(new Date().getMonth());

// hw30
function getMonth(d) {
    return d.getMonth();
}
console.log(getMonth(new Date()));

// hw31
let m1 = new Date("2025-03-15");
let m2 = new Date("2025-08-20");
console.log(m1.getMonth() === m2.getMonth());

// hw32
setInterval(() => {
    console.log(new Date().getMonth());
}, 5000);

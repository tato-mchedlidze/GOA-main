// hw2
function printArgs(...args) {
    for (let arg of args) {
        console.log(arg);
    }
}
printArgs("apple", 5, true);

// hw3
function countArgs(...args) {
    console.log("Total arguments:", args.length);
}
countArgs("a", 2, 3, false);

// hw4
function addNumbers(...args) {
    let sum = 0;
    for (let arg of args) {
        if (typeof arg === "number") {
            sum += arg;
        }
    }
    console.log("Sum:", sum);
}
addNumbers(1, 2, "hello", 4);

// hw5
function printUntilZero(...args) {
    for (let arg of args) {
        if (arg === 0) break;
        console.log(arg);
    }
}
printUntilZero(5, 3, 0, 7, 9);

// hw6
function printOnlyNumbers(...args) {
    for (let arg of args) {
        if (typeof arg === "string") continue;
        console.log(arg);
    }
}
printOnlyNumbers(1, "text", 3, "hello", 5);

// hw7
const multiply = function (a, b) {
    return a * b;
};
console.log("Multiply:", multiply(3, 4));

// hw8 (requires HTML)
setInterval(function () {
    console.log("Hello every 2 seconds!");
}, 2000);

// hw9 (in html the button)
document.getElementById("myButton").addEventListener("click", function () {
    alert("Button was clicked!");
});

// hw10
(function () {
    console.log("Hello, world!");
})();

// hw11
(function (num) {
    console.log("Square:", num * num);
})(5);

// hw12
(function (arr) {
    let sum = 0;
    for (let num of arr) {
        sum += num;
    }
    console.log("Array sum:", sum);
})([1, 2, 3, 4]);

// hw13
function localScope() {
    let message = "Inside function";
    console.log(message);
}
localScope();

// hw14
function outer() {
    let counter = 0;
    function inner() {
        counter += 1;
    }
    console.log("Before:", counter);
    inner();
    console.log("After:", counter);
}
outer();

// hw15
function scopeTest() {
    if (true) {
        var a = 1;
        let b = 2;
        const c = 3;
        console.log("Inside block:", a, b, c);
    }
    console.log("Outside block:", a);
}
scopeTest();

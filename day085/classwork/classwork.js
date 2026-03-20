// cw1
function printEvenNumbers(a, b, c, d, e, f, g, h, i, j) {
    let numbers = [a, b, c, d, e, f, g, h, i, j];

    for (let num of numbers) {
        if (num % 2 === 0) {
            console.log(num);
        }
    }
}

printEvenNumbers(10, 20, 30, 40, 50, 60, 70, 80, 90, 100)


// cw2
//function keyword
const sayHello1 = function() {
    console.log("hello");
};

// arrow
const sayHello2 = () => {
    console.log("hello");
};

// both anonimus
sayHello1();
sayHello2();


// cw3
console.log((function () {
    return "hallo";
})());


// cw4

// Global
let globalVer = "global";

function global() {
    console.log(globalVer);
}
global();

// Function
function functionScope() {
    let functionVer = "function";
    console.log(functionVer);
}
functionScope();

// Block
if (true) {
    let blockVer = "block";
    console.log(blockVer);
}

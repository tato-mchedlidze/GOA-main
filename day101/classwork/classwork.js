// cw1
let name = "tato";

let reversedName = name.split('').reverse().join('');

console.log('og', name);
console.log('reversed', reversedName);


// cw2
function manualAbs(number) {
    if (number < 0) {
        return -number;
    } else {
        return number;
    }
}

console.log(manualAbs(10));
console.log(manualAbs(-3.14));


// cw3
for (let i = 1; i <= 5; i++) {
    console.log("10^" + i + " = " + (10 ** i));
}
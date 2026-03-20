// cw1
const numbers = [5, 12, 7, 20, 9];

const newNums = numbers.map(n => n % 2 === 0 ? n + 10 : n - 10);

console.log(newNums);

function sumFive(a, b, c, d, e) {
    console.log(a + b + c + d + e);
}

sumFive(...newNums);


// cw2
function biggestNum(...nums){
    return Math.max(...nums)
}

console.log(biggestNum(3,10,6,22,5))

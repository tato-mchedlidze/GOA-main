// hw2
const filterPositives = (arr) => {
    for (let num of arr) {
        if (num < 0) continue;
        console.log(num);
    }
};


// hw3
const findLongWord = (words) => {
    for (let i = 0; i < words.length; i++) {
        if (words[i].length > 5) {
            console.log(words[i]);
            break;
        }
    }
};


// hw4
const sumUntilNegative = (arr) => {
    let sum = 0;
    for (let num of arr) {
        if (num < 0) break;
        sum += num;
    }
    console.log(sum);
};


// hw5
const skipMultiplesOf3 = () => {
    for (let i = 1; i <= 20; i++) {
        if (i % 3 === 0) continue;
        console.log(i);
    }
};


// hw6
const countAStart = (words) => {
    let count = 0;
    for (let word of words) {
        if (word.length < 1) continue;
        if (word[0] === "A" || word[0] === "a") {
            count++;
        }
    }
    console.log("Words starting with A/a:", count);
};


// hw7
const skipMultiplesOf4And6 = () => {
    for (let i = 1; i <= 30; i++) {
        if (i % 4 === 0 || i % 6 === 0) continue;
        console.log(i);
    }
};



// hw8
const findLongName = (names) => {
    for (let name of names) {
        if (name.length > 8) {
            console.log(name);
            break;
        }
    }
};


// hw9
const printOdds = (arr) => {
    for (let num of arr) {
        if (num % 2 === 0) continue;
        console.log(num);
    }
};


// hw10
const sumPositiveEvens = (arr) => {
    let sum = 0;
    for (let num of arr) {
        if (num <= 0 || num % 2 !== 0) continue;
        sum += num;
    }
    console.log("Sum of even numbers:", sum);
};

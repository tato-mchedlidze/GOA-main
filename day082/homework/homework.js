// hw4
for (let i = 1; i <= 20; i++) {
    if (i === 13) {
        break;
    }
    console.log(i);
}


// hw5
let colors = ["red", "green", "blue", "yellow"];
for (let i = 0; i < colors.length; i++) {
    if (colors[i] === "blue") {
        break;
    }
    console.log(colors[i]);
}


// hw6
for (let i = 1; i <= 50; i++) {
    if (i % 4 === 0 && i % 5 === 0) {
        break;
    }
    console.log(i);
}


// hw7
let word1 = "apple";
for (let i = 0; i < word1.length; i++) {
    if (word1[i] === "a") {
        break;
    }
    console.log(word1[i]);
}


// hw8
let sum = 0;
let i = 1;
while (true) {
    sum = sum + i;
    if (sum >= 100) {
        break;
    }
    i++;
}
console.log("Total:", sum);


// hw9
for (let i = 1; i <= 20; i++) {
    if (i === 13) {
        continue;
    }
    console.log(i);
}


// hw10
let fruits = ["apple", "banana", "grape", "orange"];
for (let i = 0; i < fruits.length; i++) {
    if (fruits[i] === "banana") {
        continue;
    }
    console.log(fruits[i]);
}


// hw11
for (let i = 1; i <= 30; i++) {
    if (i % 3 === 0) {
        continue;
    }
    console.log(i);
}


// hw12
let word2 = "cheese";
for (let i = 0; i < word2.length; i++) {
    if (word2[i] === "e") {
        continue;
    }
    console.log(word2[i]);
}


// hw13
for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0) {
        continue;
    }
    console.log(i);
}


// hw14
let add = (a, b) => {
    return a + b;
};
console.log(add(2, 3));


// hw15
let greet = (name) => {
    return "Hello, " + name + "!";
};
console.log(greet("John"));


// hw16
let double = (arr) => {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(arr[i] * 2);
    }
    return newArr;
};
console.log(double([1, 2, 3]));


// hw17
let isEven = (n) => {
    return n % 2 === 0;
};
console.log(isEven(4));


// hw18
let getLength = (str) => {
    return str.length;
};
console.log(getLength("hello")); // 5
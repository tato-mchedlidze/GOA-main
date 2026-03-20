// hw2
let nums = [1, 2, 3, 4];
console.log(nums.reverse());

// hw3
let fruits = ["apple", "banana", "cherry"];
let revFruits = fruits.reverse();
console.log(revFruits[0]);

// hw4
let chars = ["o","l","l","e","h"];
console.log(chars.reverse().join(""));

// hw5
let arr = [3, 8, 1, 6];
let reversed = arr.reverse();
console.log(Math.max(...reversed));

// hw6
let letters = ["a", "b", "c", "d"];
console.log(letters.reverse().join(","));

// hw7
let fruits2 = ["apple", "banana", "cherry"];
fruits2.shift();
console.log(fruits2);

// hw8
let numbers = [10, 20, 30];
numbers.shift();
console.log(numbers);

// hw9
let arr2 = ["x", "y", "z"];
let removed = arr2.shift();
console.log(removed);

// hw10
let arr3 = [1,2,3];
while(arr3.length > 0){
    console.log(arr3.shift());
}

// hw11
let mixed = [100, "apple", 200];
mixed.shift();
console.log(mixed);

// hw12
let fruits3 = ["apple","banana","cherry"];
console.log(fruits3.join(","));

// hw13
let numbers2 = [1,2,3];
console.log(numbers2.join(" "));

// hw14
let words = ["well","done","team"];
console.log(words.join("-"));

// hw15
let chars2 = ["c","o","d","e"];
console.log(chars2.join(""));

// hw16
let names = ["Anna","Bob","Cathy"];
console.log(names.join(" | "));

// hw18
console.log(Math.abs(7));

// hw19
console.log(Math.abs(-7));

// hw20
let arr4 = [-2, 5, -9];
let absArr = arr4.map(Math.abs);
console.log(absArr);

// hw21
let diff = Math.abs(10 - 25);
console.log(diff);

// hw22
let n = -42;
console.log(Math.abs(n));

// hw23
console.log(Math.ceil(4.2));

// hw24
console.log(Math.ceil(-4.2));

// hw25
let decimals = [1.2, 2.8, 3.1];
console.log(decimals.map(Math.ceil));

// hw26
console.log(Math.ceil(7 / 2));

// hw27
let price = 9.75 * 1.1;
console.log(Math.ceil(price));

// hw28
console.log(Math.floor(4.7));

// hw29
console.log(Math.floor(-4.7));

// hw30
let decimals2 = [1.9, 2.5, 3.8];
console.log(decimals2.map(Math.floor));

// hw31
console.log(Math.floor(7/2));

// hw32
let price2 = 20 * 0.85;
console.log(Math.floor(price2));

// hw33
console.log(Math.round(4.6));

// hw34
console.log(Math.round(-4.6));

// hw35
let decimals3 = [1.4, 2.5, 3.6];
console.log(decimals3.map(Math.round));

// hw36
console.log(Math.round(7/2));

// hw37
let price3 = 15.3 * 1.2;
console.log(Math.round(price3));

// hw38
console.log(Math.max(5,9));

// hw39
console.log(Math.max(5,9,3));

// hw40
let numbers3 = [2,7,4];
let maxVal = numbers3[0];
for(let n of numbers3){
    if(n > maxVal) maxVal = n;
}
console.log(maxVal);

// hw41
console.log(Math.max(...[1,4,9,2]));

// hw42
console.log(Math.max(...[-5, -1, 3, -9]));

// hw43
console.log(Math.min(5,9));

// hw44
console.log(Math.min(5,9,3));

// hw45
let numbers4 = [8,4,6];
let minVal = numbers4[0];
for(let n of numbers4){
    if(n < minVal) minVal = n;
}
console.log(minVal);

// hw46
console.log(Math.min(...[1,4,9,2]));

// hw47
console.log(Math.min(...[-5, -1, 3, -9]));

// hw48
console.log(Math.pow(2,3));

// hw49
console.log(Math.pow(5,0.5));

// hw50
let num = 4;
console.log(Math.pow(num,3));

// hw51
let base = 2, exp = 5;
console.log(Math.pow(base, exp));

// hw52
let numbers5 = [1,2,3];
console.log(numbers5.map(n => Math.pow(n,2)));

// hw53
console.log(Math.trunc(12.987));

// hw54
console.log(Math.trunc(-45.67));
console.log(Math.floor(-45.67));

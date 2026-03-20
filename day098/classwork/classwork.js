// cw1
let arr = ["hello", "dog", "cat", "programing", "computer", "apple", "GOA", "hi", "world", "chocolate"];

let longString = arr.some(s => s.length > 10);

console.log(longString);


// cw2
let num = [1, 2, 3, 4, 5];

for (let i = 0; i < num.length; i++) {
    console.log("Index " + i + ", Value " + num[i]);
}


// cw3
let arr1 = ["programing", "computer", "goa", "hi", "world", "chocolate"]

let uppercased = arr1.map(z => z.toUpperCase());

console.log(uppercased);

// cw1
let products = [
    { name: "Book", price: 50 },
    { name: "GOA", price: 1200 },
    { name: "Pen", price: 10 },
    { name: "Bag", price: 80 }
];

let cheap = products.filter(p => p.price < 100);

console.log(cheap);


// cw2
let words = ["ana", "bob", "carle", "bobby", "david"];

let firstB = words.find(w => w.startsWith("b"));

console.log(firstB); 


// cw3
let numbers = [10, 20, 30, 40, 50];

numbers.splice(2, 0, 99);

console.log(numbers);

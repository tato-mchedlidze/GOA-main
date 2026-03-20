// cw1
function hasOwnKey(obj, key) {
    return obj.hasOwnProperty(key);
}

// Test
let car = { brand: "Toyota", model: "Corola" };
let book = { title: "1984", author: "George" };

console.log(hasOwnKey(car, "brand"));
console.log(hasOwnKey(book, "year"));

// hw2
const person = { 
    name: "Alice", 
    age: 25, 
    city: "Paris", 
    job: "Teacher", 
    hobby: "Reading" 
};
console.log(Object.keys(person));

// hw3
console.log(Object.keys(person).length);

// hw4
function keysToUpper(obj) {
    return Object.keys(obj).map(k => k.toUpperCase());
}
console.log(keysToUpper(person));

// hw5
console.log(Object.keys(person).includes("city"));

// hw6
const nested = { 
    a: 1, 
    b: { 
        x: 10, 
        y: 20 
    }, 
    c: "hi", 
    d: true 
};
console.log(Object.keys(nested));


// hw7
const car = { 
    brand: "Toyota", 
    model: "Corolla", 
    year: 2020, 
    color: "red", 
    price: 15000 
};
console.log(Object.values(car));

// hw8
console.log(Object.values(car).length);

// hw9
function getNums(obj) {
    return Object.values(obj).filter(v => typeof v === "number");
}
console.log(getNums(car));

// hw10
let sum = Object.values(car).filter(v => typeof v === "number").reduce((a, b) => a + b, 0);
console.log(sum);

// hw11
console.log(Object.values(car).includes("Corolla"));


// hw12
const book = { 
    title: "1984", 
    author: "Orwell", 
    year: 1949, 
    genre: "Dystopian", 
    pages: 328 
};
console.log(Object.entries(book));

// hw13
function printObj(obj) {
    Object.entries(obj).forEach(([k, v]) => console.log(k + ": " + v));
}
printObj(book);

// hw14
let arr = Object.entries(book).map(([k, v]) => k + "=" + v);
console.log(arr);

// hw15
function filter10(obj) {
    return Object.fromEntries(Object.entries(obj).filter(([k, v]) => v > 10));
}
console.log(filter10({ a: 5, b: 15, c: 8, d: 22 }));

// hw16
function swap(obj) {
    return Object.fromEntries(Object.entries(obj).map(([k, v]) => [v, k]));
}
console.log(swap({ x: "one", y: "two", z: "three" }));


// hw17
const student = { 
    name: "Bob", 
    age: 21, 
    grade: "A" 
};
console.log("age" in student);

// hw18
console.log("height" in student);

// hw19
console.log(student.hasOwnProperty("toString"));

// hw20
student.school = "High School";
console.log(Object.hasOwn(student, "school"));

// hw21
delete student.grade;
console.log("grade" in student);

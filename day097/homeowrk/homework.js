// hw2
console.log("2025-08-17".split("-"));

// hw3
console.log("one two three four five".split(" "));

// hw4
console.log("John,Doe,25,Developer".split(","));

// hw5
console.log("abc".split(""));

// hw6
console.log("JavaScript is fun".split(" ")[1]);

// hw7
console.log("Hello World".startsWith("Hello"));

// hw8
function checkFile(name) {
    if (name.startsWith("img_")) return "Image file";
    return "Not an image file";
}
console.log(checkFile("img_cat.png"));

// hw9
console.log("Once upon a time".startsWith("Once upon"));

// hw10
console.log("JavaScript is fun".startsWith("is", 11));

// hw11
let names = ["Dr. Kim", "Alex", "Dr. Lee"];
console.log(names.filter(n => n.startsWith("Dr.")).length);

// hw12
console.log("   Hello World   ".trim());

// hw13
console.log("   Hello".trimStart());

// hw14
console.log("World   ".trimEnd());

// hw15
let users = ["  Ana ", " Ben", " Cara  "];
console.log(users.map(u => u.trim()));

// hw16
console.log("    ".trim() === "");

// hw17
let students = [{score:60},{score:70}];
console.log(students.every(s => s.score >= 50));

// hw18
console.log([2,4,6].every(n => n % 2 === 0));

// hw19
console.log(["a@mail.com","b@mail.com"].every(e => e.includes("@")));

// hw20
console.log([18,20,30].every(a => a >= 18));

// hw21
console.log([10,50,70].every(p => p < 100));
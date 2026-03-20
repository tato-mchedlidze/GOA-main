// hw 1
let number = prompt("Enter a number:");

if (number % 2 === 0) {
    console.log("is even");
} 
else {
    console.log("is odd");
}


// hw 2
let score = prompt("your score:");

let grade;
if (score >= 90) {
    grade = "Grade A";
} 
else if (score >= 80) {
    grade = "Grade B";
} 
else if (score >= 70) {
    grade = "Grade C";
} 
else if (score >= 60) {
    grade = "Grade D";
} 
else {
    grade = "Fail";
}
console.log("Your grade is:", grade);


// hw 3
let a = prompt("Enter the first number:");
let b = prompt("Enter the second number:");
let c = prompt("Enter the third number:");

if (a === b && b === c) {
    console.log("numbers are equal.");
} 
else if (a >= b && a >= c) {
    console.log("largest number is:", a);
} 
else if (b >= a && b >= c) {
    console.log("largest number is:", b);
} 
else {
    console.log("largest number is:", c);
}


// hw 4
let char = prompt("Enter a letter:");

char = char.toLowerCase();

if (char == "a" || char == "e" || char == "i" || char == "o" || char == "u") {
    console.log("The character is a vowel.");
} 
else {
    console.log("The character is a consonant.");
}



// hw 5 
let num = prompt("Enter a number:");

if (num % 3 === 0 && num % 5 === 0) {
    console.log("Divisible by both 3 and 5.");
} 
else if (num % 3 === 0) {
    console.log("Divisible by 3");
} 
else if (num % 5 === 0) {
    console.log("Divisible by 5");
} 
else {
    console.log("Not divisible by 3 or 5");
}


// hw 6 
let age = prompt("Enter your age:");

if (age >= 0 && age <= 12) {
    console.log("a Child.");
} 
else if (age >= 13 && age <= 19) {
    console.log("a Teenager.");
} 
else if (age >= 20 && age <= 59) {
    console.log("an Adult.");
} 
else if (age >= 60) {
    console.log("a Senior.");
} 
else {
    console.log("Invalid age entered.");
}


// hw 7
let i = 1;
while (i <= 5) {
    console.log(i);
    i++;
}


// hw 8
let i1 = 2;
while (i <= 10) {
    console.log(i);
    i1 += 2;
}


// hw 9
let i2 = 10;
while (i >= 1) {
    console.log(i);
    i2--;
}


// hw 10
for (let i3 = 1; i3 <= 10; i3++) {
    console.log(i3);
}


// hw 11
for (let i4 = 1; i4 <= 5; i4++) {
    console.log(i4 * 3);
}


// hw 12
for (let i5 = 10; i5 >= 1; i5--) {
    console.log(i5);
}


// hw 13
for (let i6 = 1; i6 <= 20; i6++) {
    if (i6 % 2 === 0) {
        console.log(i6);
    }
}


// hw 14
let sum = 0;

for (let i7 = 1; i7 <= 5; i7++) {
    sum += i7;
}
console.log("The sum is:", sum);
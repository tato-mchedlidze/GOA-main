// at()
// hw1
let str1 = "JavaScript";
alert(str1.at(0));

// hw2
let str2 = "OpenAI";
alert(str2.at(-1));

// hw3
let str3 = "Programming";
alert(str3.at(4)); // 5th character (index 4)

// hw4
function middleChar(s) {
    return s.at(Math.floor(s.length / 2));
}
alert(middleChar(prompt("Enter a word:")));

// hw5
let str4 = "Hello World";
alert(str4.at(-2));


// concat()
// hw6
let a = "Hello".concat("World");
alert(a);

// hw7
let b = "Good".concat(" ", "Morning");
alert(b);

// hw8
let c = "Number: ".concat(123);
alert(c);

// hw9
let d = "Wow".concat("!");
alert(d);

// hw10
let e = "Test".concat("");
alert(e);


// endsWith()
// hw11
let str5 = "Hello World";
alert(str5.endsWith("World"));

// hw12
let str6 = "filename.pdf";
alert(str6.endsWith(".pdf"));

// hw13
let str7 = "https://example.com/";
alert(str7.endsWith("/"));

// hw14
function endsWithS(word) {
    return word.endsWith("s");
}
alert(endsWithS(prompt("Enter a word:")));

// hw15
let str8 = "JavaScript";
alert(str8.endsWith("Java", 4));

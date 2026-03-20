// includes
// hw1
console.log("The quick brown fox jumps over the lazy dog".includes("dog"));

// hw2
function hasAtSymbol(str) { 
    return str.includes("@"); 
}

// hw3
console.log("JavaScript".includes("Java"));

// hw4
console.log("pineapple".includes("apple"));

// hw5
function containsNot(sentence) { 
    return sentence.includes("not"); 
}


// indexOf
// hw6
console.log("The quick brown fox jumps over the lazy dog".indexOf("fox"));

// hw7
console.log("Hello world".indexOf("o"));

// hw8
console.log("Happy New Year 2025!".indexOf("2025"));

// hw9
console.log("This is a simple test".indexOf("is"));

// hw10
function findAtIndex(str) { 
    return str.indexOf("@"); 
}


// lastIndexOf
// hw11
console.log("Hello world".lastIndexOf("o"));

// hw12
console.log("banana".lastIndexOf("a"));

// hw13
console.log("This is a test, and it is simple".lastIndexOf("is"));

// hw14
console.log("dog dog dog".lastIndexOf("dog"));

// hw15
console.log("Happy 2025, welcome 2025!".lastIndexOf("2025"));


// repeat
// hw16
console.log("ha".repeat(3));

// hw17
console.log("*".repeat(10));

// hw18
console.log("---".repeat(5));

// hw19
function repeatWord(word, n) { 
    return word.repeat(n); 
}

// hw20
console.log("Hello ".repeat(4));


// replace
// hw21
console.log("The cat chased the cat".replace("cat", "dog"));

// hw22
console.log("JavaScript is cool".replace("Java", "Type"));

// hw23
function replaceFirstSpace(sentence) { 
    return sentence.replace(" ", "-"); 
}

// hw24
console.log("banana".replace("a", "@"));

// hw25
console.log("Happy New Year 2024!".replace("2024", "2025"));


// replaceAll
// hw26
console.log("The cat chased another cat and found a cat".replaceAll("cat", "dog"));

// hw27
console.log("I love JavaScript so much".replaceAll(" ", "-"));

// hw28
console.log("banana".replaceAll("a", "@"));

// hw29
console.log("2024 was great, but 2024 is over".replaceAll("2024", "2025"));

// hw30
console.log("Wait. Stop. Go. Run.".replaceAll(".", "!"));


// slice
// hw31
console.log("Hello world".slice(6));

// hw32
console.log("JavaScript".slice(0, 4));

// hw33
console.log("Python".slice(1));

// hw34
console.log("Banana".slice(-3));

// hw35
function firstHalf(str) { 
    return str.slice(0, str.length / 2); 
}

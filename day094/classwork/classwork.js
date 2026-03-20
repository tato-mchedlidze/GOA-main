// cw1
// 1
let str1 = "Hello";
let str2 = "World";
let result1 = str1.concat(str2);
console.log(result1);

// 2
let str3 = "GOA";
let str4 = "THE";
let str5 = "BEST";
let result2 = str3.concat(str4, str5);
console.log(result2);

// 3
let str6 = "Good";
let str7 = "Morning";
let result3 = str6.concat(" ", str7);
console.log(result3);


// cw2
// 1.
let url = "https://unpkg.com";
console.log(url.endsWith("/"));

let url2 = "https://unpkg.com/";
console.log(url2.endsWith("/"));


// 2.
function endsWithS(word) {
    return word.endsWith("s");
}
console.log(endsWithS("cats"))
console.log(endsWithS("cat"))


// cw3
function endsWithPunctuation(sentence) {
    return sentence.endsWith(".") || sentence.endsWith("?") || sentence.endsWith("!");
}

console.log(endsWithPunctuation("Hallo."));
console.log(endsWithPunctuation("Hallo?"));
console.log(endsWithPunctuation("Hallo!"));
console.log(endsWithPunctuation("Hallo"));

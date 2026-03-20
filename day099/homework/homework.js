// find()
// hw2
let arr1 = ["Banana", "Apple", "Avocado"];
console.log(arr1.find(s => s.startsWith("A"))); 

// hw3
let users = [{name: "Tom", age: 25}, {name: "Sam", age: 35}];
console.log(users.find(u => u.age > 30));

// hw4
let words = ["cat", "banana", "hello"];
console.log(words.find(w => w.length > 5));

// hw5
let products = [{name: "Pen", price: 5}, {name: "Book", price: 50}];
console.log(products.find(p => p.price < 20));

// hw6
let students = [{name: "Ann", grade: "B"}, {name: "Max", grade: "A"}];
console.log(students.find(s => s.grade === "A"));


// findIndex()
// hw7
let nums1 = [5, 3, -2, 10];
console.log(nums1.findIndex(n => n < 0));

// hw8
let arr2 = ["sing", "play", "running"];
console.log(arr2.findIndex(s => s.endsWith("ing")));

// hw9
let users2 = [{name: "Tom", isActive: false}, {name: "Sam", isActive: true}];
console.log(users2.findIndex(u => u.isActive));

// hw10
let nums2 = [3, 15, 20, 7];
console.log(nums2.findIndex(n => n % 10 === 0));

// hw11
let fruits1 = ["apple", "pears", "mango"];
console.log(fruits1.findIndex(f => f.length === 5));


// findLast()
// hw12
let nums3 = [10, 200, 50, 120];
console.log(nums3.findLast(n => n > 100));

// hw13
let arr3 = ["cat", "tree", "moon"];
console.log(arr3.findLast(s => s.includes("e")));

// hw14
let users3 = [{age: 30}, {age: 20}, {age: 18}];
console.log(users3.findLast(u => u.age < 25));

// hw15
let nums4 = [2, 4, 7, 10];
console.log(nums4.findLast(n => n % 2 !== 0));

// hw16
let words2 = ["dog", "apple", "orange", "cat"];
console.log(words2.findLast(w => /^[aeiou]/i.test(w)));


// findLastIndex()
// hw17
let nums5 = [40, 55, 70];
console.log(nums5.findLastIndex(n => n > 50));

// hw18
let arr4 = ["Sam", "John", "Steve"];
console.log(arr4.findLastIndex(s => s.startsWith("S")));

// hw19
let users4 = [{isActive: false}, {isActive: true}, {isActive: true}];
console.log(users4.findLastIndex(u => u.isActive));

// hw20
let nums6 = [4, 9, 12, 15];
console.log(nums6.findLastIndex(n => n % 3 === 0));

// hw21
let words3 = ["love", "tree", "book"];
console.log(words3.findLastIndex(w => w.length === 4));


// indexOf()
// hw22
let nums7 = [10, 25, 30];
console.log(nums7.indexOf(25));

// hw23
let fruits2 = ["banana", "apple", "mango"];
console.log(fruits2.indexOf("apple"));

// hw24
let letters = ["a", "b", "c"];
console.log(letters.indexOf("a"));

// hw25
let animals = ["dog", "cat", "bird"];
console.log(animals.indexOf("cat"));

// hw26
let nums8 = [1, 50, 75];
console.log(nums8.indexOf(100));


// lastIndexOf()
// hw27
let nums9 = [10, 20, 10, 30];
console.log(nums9.lastIndexOf(10));

// hw28
let fruits3 = ["apple", "banana", "apple"];
console.log(fruits3.lastIndexOf("apple"));

// hw29
let chars = ["a", "b", "a", "c"];
console.log(chars.lastIndexOf("a"));

// hw30
let animals2 = ["cat", "dog", "dog"];
console.log(animals2.lastIndexOf("dog"));

// hw31
let nums10 = [0, 1, 2, 0, -5];
console.log(nums10.lastIndexOf(0));


// pop()
// hw32
let nums11 = [1, 2, 3];
console.log(nums11.pop()); // 3

// hw33
let fruits4 = ["apple", "banana"];
console.log(fruits4.pop()); // "banana"

// hw34
let arr5 = [1, 2, 3];
while (arr5.length > 0) {
    console.log(arr5.pop());
}

// hw35
let users5 = [{id: 1}, {id: 2}];
console.log(users5.pop());

// hw36
let arr6 = ["x", "y", "z"];
let last = arr6.pop();
console.log(last); // "z"


// splice()
// hw37
let nums12 = [1, 2, 3, 4];
nums12.splice(0, 2);
console.log(nums12);

// hw38
let fruits5 = ["apple", "banana", "mango"];
fruits5.splice(2, 0, "orange", "grape");
console.log(fruits5);

// hw39
let arr7 = ["a", "b", "c", "d"];
arr7.splice(3, 1, "mango");
console.log(arr7);

// hw40
let nums13 = [1, 2, 3, 4, 5, 6];
nums13.splice(-3);
console.log(nums13);

// hw41
let nums14 = [10, 20, 30, 40];
nums14.splice(2, 0, 99);
console.log(nums14);

// hw2
let obj = {};

// hw3
let obj1 = {
    name: "tarieli",
    age: 25,
    city: "tbilisi"
};

// hw4
console.log(obj1.name);

// hw5
obj1.country = "georgia";
console.log(obj1.country);

// hw6
let user = {
    id: 0,
    profile: {
        username: "EZ",
        email: "XXXX@example.com"
    }
};
console.log(user.profile.username);

// hw7 
myInfo.age = 26;
console.log(myInfo.age);

// hw8
let num1 = 15;
let num2 = 20;
let GreaterThan10 = num1 > 10 && num2 > 10;
console.log("numbers greater than 10?:",GreaterThan10); // true

// hw9
let isSunny = false;
let isWeekend = true;
let goOutside = isSunny || isWeekend;
console.log("Go outside:", goOutside); // true

// hw10
let isTired = true;
let isAwake = !isTired;
console.log(isAwake); // false

// hw11
let age = 22;
let hasID = true;
let canEnterClub = (age >= 18 && hasID) || (age >= 16 && hasID && !isTired);
console.log("Can enter club:", canEnterClub); // true

// hw12
let num = 123;
let strNum = String(num);
console.log(strNum);

// hw13
let True = true;
let strBool = String(True);
console.log(strBool);

// hw14
let NS = "456";
let CN = Number(NS);
console.log(CN);

// hw15
let BV = false;
let NFB = Number(BV);
console.log(NFB);

// hw16
let IS= "hello";
let result = Number(IS);
console.log(result);

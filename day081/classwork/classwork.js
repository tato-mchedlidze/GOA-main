// cw 1

let total = 0;
let num;
do {
    num = prompt("Enter a number:");
    num = Number(num);
    if (!isNaN(num)) {
        total += num;
    }
} while (total <= 100);
alert("Total exceeded 100: " + total);

// cw2
let myObj = {
    name: "David",
    surname: "Tezelashvili",
    academy: "GOA",
    isMentor: true,
    num: 100,
    hobbies: ["programming", "bike", "basketball"],
    favColor: "Blue"
};

let list = document.getElementById("myList");
for (let key in myObj) {
    let liKey = document.createElement("li");

    liKey.textContent = "Key: " + key;

    let liValue = document.createElement("li");

    liValue.textContent = "Value: " + myObj[key];

    list.appendChild(liKey);

    list.appendChild(liValue);
}

// cw3
let myArray = ["hello", "world", 5, 10, true, false];
for (let item of myArray) {
    if (typeof item === "string") {
        console.log("String:", item);
    } 
    else if (typeof item === "number") {
        console.log("Number + 10:", item + 10);
    } 
    else if (typeof item === "boolean") {
        console.log("Opposite Boolean:", !item);
    }
}
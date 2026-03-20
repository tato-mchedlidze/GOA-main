// cw 1
function sumNumbers() {
    let sum = 0;
    let i = 0;

    while (i <= 10) {
        if (i % 2 !== 0) {
            i++;
            continue;
        }

        sum += i;
        i++;
    }

    console.log("Sum of even numbers from 0 to 10 is:", sum);
}


// cw 2
let week = Number(prompt("number through 1 to 7"));
let day;

switch (week) {
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
        break;
    case 7:
        day = "Sunday";
        break;
    default:
        console.log("wrong day")
}

console.log(day);


// cw 3
let number = number(prompt("Enter a number:"));

const isEven = num => {
    if (num % 2 === 0) {
        return true;
    }

    else {
    return false;
    }
};

console.log(isEven(number));
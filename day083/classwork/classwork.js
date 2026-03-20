// cw 1
let numbers = [5, 10, 7, 12, 9, 15, 6, 3];

let sum = 0;

for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
    if (sum > 50) {
        break;
    }
}
console.log("full", sum);


// cw 2
const filterLongStrings = (strings) => {
    for (let i = 0; i < strings.length; i++) {
        if (strings[i].length <= 5) {
            continue;
        }
        console.log(strings[i]);
    }
};

const myList = [
    "apple", 
    "banana", 
    "cat", 
    "elephant", 
    "dog", 
    "strawberry", 
    "sun", 
    "mountain", 
    "pen", 
    "school"
];

filterLongStrings(myList);


// cw 3

const printFirstFiveEvens = () => {
    let count = 0;

    for (let i = 1; ; i++) {

        if (i % 2 !== 0) {
            continue;
        }

        console.log(i);
        count++;
        
        if (count === 5) {
            break;
        }
    }
};

printFirstFiveEvens();

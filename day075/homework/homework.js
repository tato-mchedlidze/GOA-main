// hw 1 
let count = 1

const countdown = setInterval(()=>{
    console.log(count);
    count++

    if (count > 5) {
        clearInterval(countdown)
    }
})


// hw 2
const message = setInterval(()=>{
    console.log("hallo goa");
    
}, 2000);

setTimeout(()=>{
    clearInterval(message);
    console.log("stop")
}, 10000)


// hw 3 
let changes = 0;

const colors = [
    "lightblue", 
    "lightgreen", 
    "lightpink", 
    "lightyellow", 
    "lightgray"
];

const changeC = setInterval(() => {
    document.body.style.backgroundColor = colors[changes % colors.length];
    changes++;

    if (changes === 5) {
    clearInterval(changeC);
    }
}, 3000);


// hw 4
const interval = setInterval(() => {
    const now = new Date();
    console.log(now.toLocaleTimeString());
}, 1000);

setTimeout(() => {
    clearInterval(interval);
    console.log("Stopped showing time");
}, 15000);


// hw 5
let time = 1

const timer = setInterval(()=>{
    console.log(time);
    time++

    if (time > 10) {
        clearInterval(timer)
    }
})


// hw 6
const numbers = [10, 20, 30, 40];

console.log(numbers[1]);


// hw 7
const arr = [5, 10, 15, 20];
arr[0] = 100;
console.log(arr);


// hw 8
const fruits = ["Apple", "Banana", "Cherry"];

console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);


// hw 9
const nums = [3, 6, 9, 12, 15];
const sum = nums[0] + nums[4];
console.log("Sum of first and last:", sum);
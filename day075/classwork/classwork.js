// cw 1
function namePrint() {
    let name = "tato_mchedlidze"
    console.log(name);
}

const interval = setInterval(namePrint, 10000)

document.getElementById("stopButton").addEventListener("click", function(){
    clearInterval(interval)
    console.log("interval stop")
})


// cw 2
const myArray = [
    "Hello",           // String
    42,                // Number
    true,              // Boolean
    { name: "Ana" },   // Object
    [1, 2, 3]          // Array
];

console.log(myArray);


// cw 3
function travserseArr(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}
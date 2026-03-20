// hw 2
let num1 = 5;
let num2 = 5;
console.log(num1 == num2); // true


// hw 3
let num3 = 10;
let num4 = 7;
console.log(num3 > num4); // true


// hw 4
let num5 = 8;
let num6 = 8;
console.log(num5 <= num6); // true


// hw 5
let num7 = 3;
let num8 = 9;
console.log(num7 != num8); // true


// hw 6
let num9 = 150;
console.log(num9 >= 100); // true


// hw 7
const result7 = confirm("Do you like JavaScript?");
console.log(result7);

// hw 8
let result8;

function showConfirm() {
    result8 = confirm("Are you sure?");
    console.log(result8);
}

// Add a button directly in HTML or create it like this:
const btn = document.createElement("button");
btn.textContent = "Click me";
btn.onclick = showConfirm;
document.body.appendChild(btn);


// hw 9
window.onload = () => {
    const result9 = confirm("Do you want to proceed?");
    alert(result9); // true or false
};


// hw 10
document.getElementById("myForm").onsubmit = function(e) {
    e.preventDefault();
    console.log(this.username.value);
};


// hw 11
document.getElementById("clearEmailBtn").onclick = function() {
    document.querySelector('input[name="email"]').value = "";
};


// hw 12
document.getElementById("showPhoneBtn").onclick = function() {
    alert(document.querySelector('input[name="phone"]').value);
};

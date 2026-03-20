// hw 2
for (let i = 1; i <= 10; i++) {
    console.log(i);
}


// hw 3
let num = 2;
while (num <= 20) {
    console.log(num);
    num += 2;
}


// hw 4
for (let i = 10; i >= 1; i--) {
    console.log(i);
}


// hw 5
let count = 1;
while (count <= 5) {
    console.log(count * 3);
    count++;
}


// hw 6
let str = prompt("say somthing (only words)")
for (let i = 0; i < str.length; i++) {
    console.log(str[i]);
}


// hw 7
function changeText() {
    document.getElementById("myParagraph").textContent = "Text has been changed!";
}


// hw 8
function changeBackground() {
    document.getElementById("colorDiv").style.backgroundColor = "orange";
}


// hw 9
function changeFontSize() {
    document.getElementById("myHeading").style.fontSize = "40px";
}


// hw 10
function hideDiv() {
    document.getElementById("hideDiv").style.display = "none";
}


// hw 11
function showAlert() {
    alert("This is a custom alert message!");
}

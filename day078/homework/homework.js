// hw2
let allP = document.querySelectorAll("p");
alert("Total <p> tags: " + allP.length);


// hw3
let allH2 = document.querySelectorAll("h2");
for (let i = 0; i < allH2.length; i++) {
    allH2[i].style.color = "blue";
}


// hw4
let allLi = document.querySelectorAll("li");
for (let i = 0; i < allLi.length; i++) {
    console.log(allLi[i].textContent);
}


// hw5
let allDiv = document.querySelectorAll("div");
for (let i = 0; i < allDiv.length; i++) {
    allDiv[i].style.backgroundColor = "lightgray";
}


// hw6
let firstImg = document.querySelector("img");
if (firstImg) {
    firstImg.src = "https://via.placeholder.com/150"; // example image
}


// hw7
let highlights = document.querySelectorAll(".highlight");
for (let i = 0; i < highlights.length; i++) {
    highlights[i].style.backgroundColor = "yellow";
}


// hw8
let cards = document.querySelectorAll(".card");
console.log("Total .card elements:", cards.length);


// hw9
let errors = document.querySelectorAll(".error");
for (let i = 0; i < errors.length; i++) {
    errors[i].style.color = "red";
}


// hw10
let items = document.querySelectorAll(".item");
for (let i = 0; i < items.length; i++) {
    console.log(items[i].innerHTML);
}


// hw11
let firstBtn = document.querySelector(".button");
if (firstBtn) {
    firstBtn.textContent = "Clicked!";
}


// hw12
let movingDiv = document.querySelector(".move"); // Make sure the <div> has class "move"
let position = 0;
if (movingDiv) {
    setInterval(function () {
        position += 5;
        movingDiv.style.position = "relative";
        movingDiv.style.left = position + "px";
    }, 100);
}
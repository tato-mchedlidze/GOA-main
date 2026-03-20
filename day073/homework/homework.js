// hw2
let p1 = document.createElement("p");

p1.textContent = "This is a new paragraph.";
document.body.appendChild(p1);


// hw3
let h1 = document.createElement("h1");
h1.textContent = "Hello from H1";

let div = document.createElement("div");
div.appendChild(h1);

document.body.appendChild(div);


// hw4
let img = document.createElement("img");
img.src = "https://via.placeholder.com/150";

document.body.appendChild(img);


// hw5
let button = document.createElement("button");
button.textContent = "Click me";

document.body.appendChild(button);


// hw6
let ul = document.createElement("ul");

let li1 = document.createElement("li");
li1.textContent = "Item 1";

let li2 = document.createElement("li");
li2.textContent = "Item 2";

let li3 = document.createElement("li");
li3.textContent = "Item 3";
ul.append(li1, li2, li3);
document.body.appendChild(ul);


// hw7
let contentDiv = document.getElementById("content");

if(contentDiv.firstChild) {
    contentDiv.removeChild(contentDiv.firstChild);
}


// hw8
let ul2 = document.createElement("ul");

let liA = document.createElement("li");
liA.textContent = "One";

let liB = document.createElement("li");
liB.textContent = "Two";

let liC = document.createElement("li");
liC.textContent = "Three";
ul2.append(liA, liB, liC);
document.body.appendChild(ul2);
ul2.removeChild(liC);


// hw9
let textContainer = document.getElementById("textContainer");

let newP = document.createElement("p");
newP.textContent = "New paragraph replacing old one";

if(textContainer.firstChild) {
    textContainer.replaceChild(newP, textContainer.firstChild);
}


// hw10
let buttonDiv = document.getElementById("buttonDiv");

let newSpan = document.createElement("span");
newSpan.textContent = "New Span";

let oldButton = buttonDiv.querySelector("button");

if(oldButton) {
    buttonDiv.replaceChild(newSpan, oldButton);
}


// hw11
let singleLiUl = document.getElementById("singleLiUl");

let newLi = document.createElement("li");
newLi.textContent = "New single li";

let oldLi = singleLiUl.querySelector("li");

if(oldLi) {
    singleLiUl.replaceChild(newLi, oldLi);
}


// hw12
let oldH2 = document.querySelector("h2");
let newH1 = document.createElement("h1");
newH1.textContent = "New H1 Heading";

if(oldH2 && oldH2.parentNode) {
    oldH2.parentNode.replaceChild(newH1, oldH2);
}
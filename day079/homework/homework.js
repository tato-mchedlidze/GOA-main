// hw1
const h1s = document.querySelectorAll("h1");
const h3s = document.querySelectorAll("h3");

h1s.forEach(h1 => {
    h1.style.color = "green";
    h1.style.border = "1px solid black";
    h1.style.fontSize = "30px";
});

h3s.forEach(h3 => {
    h3.style.color = "green";
    h3.style.border = "1px solid black";
    h3.style.fontSize = "24px";
});


// hw2
const paragraphs = document.querySelectorAll("p");
paragraphs.forEach((p, index) => {
    const wordCount = p.innerText.trim().split(/\s+/).length;
    console.log(`Paragraph ${index + 1} has ${wordCount} words`);
});


// hw3
const images = document.querySelectorAll("img");
images.forEach(img => {
    img.style.width = "200px";
    img.style.borderRadius = "10px";
    if (img.alt.toLowerCase().includes("cat")) {
        img.style.border = "3px solid orange";
    }
});


// hw4
for (let i = 0; i < 3; i++) {
    const circle = document.createElement("div");
    circle.classList.add("circle");
    document.body.appendChild(circle);

    let position = 0;
    setInterval(() => {
        position += 10;
        circle.style.left = position + "px";
    }, 200);
}


// hw5
const listItems = document.querySelectorAll("li");
listItems.forEach((li, index) => {
    li.style.backgroundColor = index % 2 === 0 ? "skyblue" : "lightgray";
});


// hw6
const box = document.createElement("div");
box.classList.add("box");
document.body.appendChild(box);

const moveBtn = document.createElement("button");
moveBtn.textContent = "Move Box";
document.body.appendChild(moveBtn);

let boxPosition = 0;
moveBtn.addEventListener("click", () => {
    boxPosition += 20;
    box.style.left = boxPosition + "px";
    box.style.backgroundColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
});


// hw7
const inputs = document.querySelectorAll('input[type="text"]');
inputs.forEach(input => {
    input.addEventListener("input", () => {
        if (input.value.length > 20) {
            input.style.backgroundColor = "red";
                } else {
            input.style.backgroundColor = "white";
        }
    });
});


// hw8
const messageList = document.createElement("ul");
document.body.appendChild(messageList);

let msgCount = 0;

const msgInterval = setInterval(() => {
    msgCount++;
    const li = document.createElement("li");
    li.textContent = "Message " + msgCount;
    messageList.appendChild(li);

    if (msgCount >= 10) clearInterval(msgInterval);
}, 2000);


// hw9
const hideDiv = document.createElement("div");
hideDiv.textContent = "I will hide and reappear";
hideDiv.style.background = "lightgreen";
hideDiv.style.padding = "10px";
document.body.appendChild(hideDiv);

const toggleBtn = document.createElement("button");
toggleBtn.textContent = "Hide Me";
document.body.appendChild(toggleBtn);

toggleBtn.addEventListener("click", () => {
    hideDiv.style.display = "none";
    setTimeout(() => {
        hideDiv.style.display = "block";
    }, 5000);
});


// hw10
const tagName = prompt("Enter a tag name to count (e.g., div, p, img):");
if (tagName) {
    const count = document.getElementsByTagName(tagName).length;
    alert(`There are ${count} <${tagName}> elements on this page.`);
}
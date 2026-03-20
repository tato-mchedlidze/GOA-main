// cw1
const images = document.getElementsByTagName("img");
for (let i = 0; i < images.length; i++) {
    images[i].src = "https://yandex.ru/images/search?text=cat+imgs+with+short+links&pos=1&rpt=simage&img_url=https%3A%2F%2Flady-dog.ru%2Fwp-content%2Fuploads%2Fc%2F3%2F6%2Fc36aaa558dd64cbf0be63f37b2ad26c1.jpeg&from=tabbar&lr=10277";
    break;
}


// cw2
let boxes = document.querySelectorAll(".box");

for (let i = 0; i < boxes.length; i++) {
    boxes[i].style.width = "100px";
    boxes[i].style.height = "100px";
    boxes[i].style.background = "orange";
    boxes[i].style.margin = "10px";
    boxes[i].style.borderRadius = "15px";
    boxes[i].style.position = "relative";
}   

for (let i = 0; i < boxes.length; i++) {
    let pos = 0;
    setInterval(function() {
        pos = pos + 5;
        boxes[i].style.left = pos + "px";
    }, 100);
}


// cw3
const moveBtn = document.getElementById("moveBtn");
const movingBox = document.getElementById("movingBox");
let moveCount = 0;

moveBtn.addEventListener("click", () => {
    moveCount++;
    movingBox.style.left = (moveCount * 10) + "px";

    let intervalTime = 0;
    const colorInterval = setInterval(() => {
        let color = "#" + Math.floor(Math.random()*16777215).toString(16);
        movingBox.style.backgroundColor = color;

        intervalTime += 1000;
        if (intervalTime >= 10000) {
            clearInterval(colorInterval);
        }
    }, 1000);
});


// cw4
let box4 = document.getElementById("box4");
let btn4 = document.getElementById("btn4");
let pContainer = document.getElementById("pContainer");

btn4.onclick = function () {
    box4.style.background = "green";
    let count = 1;

let shrink = setInterval(() => {
    let p = document.createElement("p");
    p.textContent = "p" + count;
    pContainer.appendChild(p);

    let w = parseInt(box4.style.width) || 100;
    let h = parseInt(box4.style.height) || 100;

    w -= 10;
    h -= 10;

    box4.style.width = w + "px";
    box4.style.height = h + "px";

    if (w <= 0 || h <= 0) {
        box4.style.display = "none";
        clearInterval(shrink);
        }

        count++;
    }, 3000);
};


// cw5
let items = document.querySelectorAll("li");
for (let i = 0; i < items.length; i++) {
    if (items[i].textContent.length > 10) {
        items[i].style.background = "lightpink";
    } else {
        items[i].style.background = "lightgreen";
    }
}
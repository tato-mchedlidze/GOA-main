// hw 1
let alertButton = document.getElementById("alertBtn");
alertButton.addEventListener("click", function () {
    alert("You clicked the button!");
});

// hw 2
let hoverParagraph = document.getElementById("hoverText");
hoverParagraph.addEventListener("mouseover", function () {
    hoverParagraph.textContent = "The text has changed!";
});

// hw 3
let box = document.getElementById("colorBox");
let isBlue = true;

box.addEventListener("click", function () {
    if (isBlue) {
        box.style.backgroundColor = "tomato";
    } else {
        box.style.backgroundColor = "lightblue";
    }
    isBlue = !isBlue;
});

// hw 4
let input = document.getElementById("textInput");
input.addEventListener("click", function () {
    console.log("Input value is: " + input.value);
});

// hw 5
let imageButton = document.getElementById("toggleImageBtn");
let image = document.getElementById("myImage");

imageButton.addEventListener("click", function () {
    if (image.style.display === "none") {
        image.style.display = "block";
    } else {
        image.style.display = "none";
    }
});

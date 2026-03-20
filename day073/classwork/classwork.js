// cw 1
function addNewElement() {
    let div = document.getElementById("div1");

    let button = document.createElement("button");

    let buttonText = document.createTextNode("Click me");
    button.appendChild(buttonText)

    div.appendChild(button)
}

addNewElement();


// cw 2
function modifyContent() {
    const div = document.getElementById("content");

    const button = document.getElementById("removeBtn");
    if (button) {
        div.removeChild(button);
    }

    const paragraph = document.getElementById("text");

    const italic = document.createElement("i");

    italic.textContent = "This text is now italic.";

    div.replaceChild(italic, paragraph);
}
window.onload = modifyContent;

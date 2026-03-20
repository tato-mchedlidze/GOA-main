// hw2
function askHobby() {
    const hobby = prompt("favorite hobby?");
    alert("favorite hobby is: " + hobby);
}

// hw3
function getFullName() {
    const firstName = prompt("first name:");
    const lastName = prompt("last name:");
    alert("full name: " + firstName + " " + lastName);
}

// hw4
function updateParagraphWithMessage() {
    const message = prompt("display:");
    document.getElementById("userMessage").textContent = message;
}

// hw5
function askForEmoji() {
    const emoji = prompt("favorite emoji?");
    alert("favorite emoji is: " + emoji);
}

// hw6
function setTitleFromInput() {
    const titleWord = prompt("the page title:");
    document.title = titleWord;
}

// hw7
function showTextInput(event) {
    event.preventDefault();
    const input = document.getElementById("textInput").value;
    alert("You entered: " + input);
}

// hw8
function changeBackgroundColor(event) {
    event.preventDefault();
    const color = document.getElementById("colorInput").value;
    document.body.style.backgroundColor = color;
}

// hw9
function displayFullName(event) {
    event.preventDefault();
    const first = document.getElementById("firstName").value;
    const last = document.getElementById("lastName").value;
    const fullName = `${first} ${last}`;
    document.getElementById("fullNameDisplay").textContent = fullName;
}
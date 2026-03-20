// cw 1
function handleSubmit(event) {
    event.preventDefault();
    let input = document.getElementById('username');
    console.log('input:', input.value);
}

// cw 2
function concStrings() {
    let firstString = prompt("string one:");
    let secondString = prompt("string two:");
    
    let result = firstString + secondString;
    
    alert("you made: " + result);
}
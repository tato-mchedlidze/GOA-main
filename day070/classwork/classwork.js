// cw1
function userLoop() {
    let fis = Number(prompt("number 1"));
    let sec = Number(prompt("number 2"));

    if (fis > sec) {
        [fis, sec] = [sec, fis];
    }

    for (let i = fis; i <= sec; i++) {
        console.log(i);
    }
}
window.onload = userLoop;


// cw2
function changeElements() {
    const input = document.getElementById("myInput");
    console.log(input.value);

    const button = document.getElementById("myButton");
    button.style.backgroundColor = "black";
    button.style.color = "white";

    const title = document.getElementById("myTitle");
    title.style.textAlign = "center";

    document.body.style.backgroundColor = "green";
}
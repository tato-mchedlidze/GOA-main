// cw 1
let p = document.getElementById("myP");

p.onmouseover = function() {
    document.body.style.textAlign = "center";
}


// cw 2
let button = document.getElementById("myButton");

button.addEventListener("click", function(event) {
    console.log(event);

    document.body.style.backgroundColor = "black";

    document.body.style.color = "white";
});

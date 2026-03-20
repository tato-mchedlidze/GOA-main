// cw 1
function discountFunc() {
    let age = prompt("age?");

    if (age < 18) {
        alert("junior discount 20%");
    } else if (age >= 18 < 60 ) {
        alert("senior discount 5%");
    } else {
        alert("regular discount 10%");
    }
}


// cw2
let number = 0;

while (number < 100) {
    document.write(number + "<br>");
    number = number + 5;
}


// cw3
for (let i = 0; i < 10; i++) {
    console.log("hello");
}
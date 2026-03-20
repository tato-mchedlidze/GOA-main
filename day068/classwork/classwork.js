function compareNums() {
    let num1 = prompt("numb uno:");
    let num2 = prompt("numb dos:");

    if (num1 > num2) {
        console.log(num1);
    } 
    else if (num2 > num1) {
        console.log(num2);
    } 
    else {
        console.log("Numbers are equal");
    }
}
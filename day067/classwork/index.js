// cw1
let obj = {
    name : "Tarieli",
    surname : "mchedlidzw",
    academy : "GOA",
    city : "axalcixe",
    role : "Student",
    favColor : "Red",
    fullname(){
        console.log(this.name + " " + this.surname)
    }
}

console.log(this.name)

console.log(obj["surname"])

console.log(obj.academy)

console.log(obj.city)

console.log(obj.role)

console.log(obj.favColor)
obj.favColor = "Blue"
console.log(obj.favColor)

console.log(obj.fullname)

// cw2
function userOperations() {
    let answer1 = confirm("ok to answer uno?");
    let answer2 = confirm("oke to answer dos?");

    console.log("AND:", answer1 && answer2);
    console.log("OR:", answer1 || answer2);
}

    window.onload = userOperations;
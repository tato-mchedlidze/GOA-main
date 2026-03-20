// cw1
function myFunc() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let num = Math.random()
            if (num > 0.5) {
                resolve("Resolve: " + num)
            } else {
                reject("Reject: " + num)
            }
        }, 1000)
    })
}

myFunc()
    .then(res => console.log(res))
    .catch(err => console.log(err))


// cw2
function myFunc() {
    return new Promise((resolve) => {
        resolve("resolved")
    })
}

let p1 = myFunc()
let p2 = myFunc()
let p3 = myFunc()

Promise.all([p1, p2, p3])
    .then(result => console.log(result))


// cw3
function workingOnPromise(str) {
    new Promise((resolve, reject) => {
        setTimeout(() => {
            if (str.length > 5) {
                resolve("String is long enough: " + str);
            } else {
                reject("String too short: " + str);
            }
        }, 500);
    })
    .then(msg => console.log(msg))
    .catch(err => console.log(err));
}

workingOnPromise("hello");
workingOnPromise("javascript");
workingOnPromise("cat");

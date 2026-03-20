// hw1
function coinFlip() {
    return new Promise((resolve, reject) => {
        const random = Math.random()

        if (random < 0.5) {
            resolve ("heads")
        } else {
            reject ("tails")
        }
    })
}

coinFlip()
    .then( result => 
        console.log(result)
    )
    .catch(error =>
        console.log(error)
    )


// hw2
function randomString() {
    return new promise((resolve, reject) => {
        const strings = ["tato", "luka", "banana", ":D"]
        const randomindex = Math.floor(Math.random() * strings.length)
        const selected = strings[randomindex]

        console.log(selected);
        
        if (selected.length % 2 == 0) {
            resolve("succses")
        } else {
            reject("faliure")
        }
    })
}

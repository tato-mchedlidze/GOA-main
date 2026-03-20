// cw1
function checkStr(s){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            if(s.length%2==0) res(s)
            else rej(s)
        },2000)
    })
}

let arr=[
    checkStr("apple"),
    checkStr("banana"),
    checkStr("kiwi")
]

Promise.all(arr)
.then(r=>console.log(r))
.catch(e=>console.log(e))


// cw2

// cw1
function test(n){
    return new Promise((res,rej)=>{
        setTimeout(()=> n>10 ? res("resolve") : rej("reject"),2000)
    })
}

async function run(){
    try{
        let r = await test(5)
        console.log(r)
    }
    catch(e){
        console.log(e)
    }
}

run()

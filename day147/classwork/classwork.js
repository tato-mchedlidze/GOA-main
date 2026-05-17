// cw1
// import express from "express"
// const app = express()

// app.get("/items", (req, res)=> {
//     console.log(req.query)
//     res.send("ok")
// })

// app.listen(3000)


// cw2
import express from "express"
const app = express()

app.use(express.json())

app.post("/items", (req, res)=> {
    console.log(req.query)
    res.send("ok")
})

app.listen(3000)

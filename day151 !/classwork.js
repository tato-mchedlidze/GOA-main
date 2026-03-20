// cw1
const express = require("express")
const bodyParser = require("body-parser")

const app = express()

app.use(bodyParser.json())

app.post("/user", (req, res) => {
    console.log(req.body)
    res.json(req.body)
})

app.listen(3000)


// cw2
// app.use((err, req, res, next) => {
//     const status = err.status || 500

//     res.status(status).json(err.message)
// })

const errorhandler = require("errorhandler")

app.use(errorhandler())

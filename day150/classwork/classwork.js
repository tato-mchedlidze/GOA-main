// cw1
const express = require("express")
const app = express()

app.use("/isWorking", (req, res, next) => {
    console.log(req.path);
    console.log(req.query)

    res.status(200).json([
        req.path,
        req.query
    ])
    next()
})

app.listen(3000)


// cw2
const app1 = express()

app1.use((req, res, next) => {
    console.log(req.method);
    console.log(req.url);
    console.log(new date().toLocaleString());
    next()
})

app1.listen(3000)


// cw3
const morgan = require("morgan")
const app2 = express

app2.use(morgan("dev"))

app2.listen(3000)

// cw1
express = require("express")
const { log } = require("console")
const usersRouter = require("../classwork/routers/users.route")

const app = express()

app.use("/users", usersRouter)

app.listen(3000)


// cw2
const app1 = express()

app1.use(express.json())

app1.use((req, res, next) => {
    console.log(req.method);
    console.log(req.body);
    next()
})

app.listen(3000)

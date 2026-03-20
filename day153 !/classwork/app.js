// cw1
const express = require("express")
const morgan = require("morgan")

const app = express()

app.use(morgan("dev"))

const books = [
    { name:"1987", author: "jhon", year: 1986},
    { name:"1989", author: "jin", year: 1988}
]

app.get("/books", (req, res) => {
    res.status(200).json(books)
})

app.get("/books/:name", (req, res) => {
    const name = req.params.name

    const book = books.find(i => i.name === name)

    res.status(200).json(book)
})

app.listen(3000)

const users = [
    {Id: 1, name: "tato"},
    {Id: 2, name: "saba"}
]

const getUsers = (req, res) => {
    res.status(200).json(users)
}

MediaSourceHandle.exports = { getUsers }
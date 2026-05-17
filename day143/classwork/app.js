const http = ("http")

const server = http.createServer((req, res) => {
    console.log("request URL", req.url)

    const myURL = new URL("http://localhost:3000${req.url}")

    console.log(myURL.hostname);
    console.log(myURL.pathname);
    console.log(myURL.searchParams);

    res.end("server work")
})

server.listen(3000, () => {
    console.log("running on port 3000");
})

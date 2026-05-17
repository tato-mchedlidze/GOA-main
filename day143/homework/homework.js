// hw3 + hw4
const http = require("http");
const querystring = require("querystring");

const PORT = 3000;

const server = http.createServer((request, response) => {

  // hw3
  const method = request.method;

  let message = "";

  if (method === "GET") {
    message = "GET request received.\n";
  } else if (method === "POST") {
    message = "POST request received.\n";
  } else if (method === "PUT") {
    message = "PUT request received.\n";
  } else if (method === "DELETE") {
    message = "DELETE request received.\n";
  } else {
    message = "Method not supported: " + method + "\n";
  }

  // hw4
  const fullUrl = "http://localhost:" + PORT + request.url;
  const parsedUrl = new URL(fullUrl);
  const pathname = parsedUrl.pathname;
  const queryObject = querystring.parse(parsedUrl.search.slice(1));

  message += "\nPathname: " + pathname + "\n";
  message += "\nQuery Parameters:\n";

  for (const key in queryObject) {
    message += "  " + key + " = " + queryObject[key] + "\n";
  }

  response.writeHead(200, { "Content-Type": "text/plain" });
  response.end(message);
});

server.listen(PORT, () => {
  console.log("Server is running on http://localhost:" + PORT);
});

import http from 'http';

// hw7
const server = http.createServer((req, res) => {
  const infoArray = [
    "Name: John",
    "Age: 25",
    "Country: USA",
    "Language: English",
    "Hobby: Reading"
  ];

  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(infoArray));
});

server.listen(3000, () => {
  console.log('Server is running on port 3000');
});

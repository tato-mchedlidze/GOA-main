// cw1
import http from 'http';

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Tato mchedlidze');
});

server.listen(3000, () => {
  console.log('Server is running on port 3000');
});


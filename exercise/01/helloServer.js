const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

function hello(req, res) {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\nHello World\nHello World\n');
}

const server =http.createServer(hello);

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
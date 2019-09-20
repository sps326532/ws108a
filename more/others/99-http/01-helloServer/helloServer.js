const http = require('http');

const port = 3000, hostname = 'localhost'

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.write('Hello World\n');
  res.end()
});

server.listen(port, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
const http = require('http');

const port = 3000, hostname = 'localhost'

const server = http.createServer((request, response) => {
  console.log('url:', request.url);
  console.log('  method:', request.method); //method:GET
  console.log('  headers', request.headers); //headers=host:'localhost:3000'
  response.statusCode = 200;//回應狀態200成功
  response.setHeader('Content-Type', 'text/plain'); //text/plain 字串
  response.write('Hello World\n');
  response.end() // 宣告主程式結束，這要記得加上
});

server.listen(port, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
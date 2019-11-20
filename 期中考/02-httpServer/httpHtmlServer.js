const http = require('http');   //宣告所需套件

const port = 3000, hostname = 'localhost' //加上''代表宣告為字串!

const server = http.createServer((request, response) => {
  console.log('url:', request.url);
  console.log('  method:', request.method);
  console.log('  headers', request.headers);
  response.statusCode = 200;
  response.setHeader('Content-Type', 'text/html');  //text/html 超連結 
  response.write('Hello World <a href="http://tw.youtube.com">YouTube</a>\n');//response.write(填內容)
  response.end() //宣告主程式結束，記得要加
});

server.listen(port, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

// response.setHeader('Content-Type', 'text/html')設定標頭,參數1:標頭型別(不分大小寫),參數2:標頭值
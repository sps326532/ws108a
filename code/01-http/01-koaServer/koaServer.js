const Koa = require('koa');
const app = module.exports = new Koa();

app.use(async function(ctx) {
  console.log('url:', ctx.url)     //網址是根目錄
  console.log('  method:', ctx.method)    //傳輸方法是GET
  console.log('  headers:', ctx.headers)  //表頭，執行後出現的表頭很長
  ctx.type = 'text/html'
  ctx.body = 'Hello World';
});

if (!module.parent) {
  app.listen(3000)
  console.log(`Server running at http://localhost:3000/`)
}

//ctx.url永遠都可以拿它來取網址
//ctx意思，當有一個瀏覽器連接到你的伺服器的時候，那伺服器會把所有傳來的資訊傳到ctx傳給你，回應給瀏覽器也是放到ctx某些欄位給他就可以了

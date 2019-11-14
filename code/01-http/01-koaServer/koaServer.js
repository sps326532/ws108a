const Koa = require('koa');
const app = module.exports = new Koa();

app.use(async function(ctx) {
  console.log('url:', ctx.url)     //會印出網址
  console.log('  method:', ctx.method)    //傳輸方法是GET
  console.log('  headers:', ctx.headers)  //表頭
  ctx.type = 'text/html'
  ctx.body = 'Hello World';
});

if (!module.parent) {
  app.listen(3000)
  console.log(`Server running at http://localhost:3000/`)
}

const Koa = require('koa');   //K大寫代表類別，類別可以new物件
const app = module.exports = new Koa();  

app.use(async function(ctx) {
  console.log('url=', ctx.url)
  ctx.body = 'Hello World'; //設定傳回訊息，ctx.type可以設定html
});

if (!module.parent) app.listen(3000); 
console.log('server run at http://localhost:3000/')
const Koa = require('koa');     // Koa 用大寫代表const  用小寫代表一般變數
const app  = new Koa();         //要用koa前要先new，new完後會的到程式中寫的app(不一定要用這個名詞)

app.use(async function(ctx) {     //請求對方給你回應的訊息
  console.log('url=', ctx.url)    //請求中會送一些訊息過來，就是ctx.url
  ctx.body = '哈哈C:' + ctx.url   //想要回應的東西塞到body裡面
});

app.listen(3000)
console.log(`Server running at http://localhost:3000/`)

//去網頁執行後就會出現body裡寫的東西
//koa是一個最基礎的server的基礎框架
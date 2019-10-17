const Koa = require('koa')
const koaLogger = require('koa-logger')
const app = new Koa()

app.use(koaLogger()) // 使用 koa-logger 紀錄那些網址曾經被訪問過
app.listen(3000) // 啟動 Server
console.log('server run at http://localhost:3000/')



//koa-logger 執行後就會告訴你執行時花了多少時間，
//logger會告訴你網站的網址也會告訴你網站當下執行的網頁花了多少時間
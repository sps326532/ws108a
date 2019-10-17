const Koa = require('koa')
const KoaRouter = require('koa-router')
const koaLogger = require('koa-logger')

const app = module.exports = new Koa()
const router = new KoaRouter()

router.get('/blog/:file', async (ctx) => {         //blog只是單存字串
  ctx.body = 'file:' + ctx.params.file            //params是logger產生的參數
})

app.use(koaLogger()) // 使用 koa-logger 紀錄那些網址曾經被訪問過
app.use(router.routes()) // 使用 koa-router 路由
app.listen(3000) // 啟動 Server
console.log('server run at http://localhost:3000/')



//koa logger 其實就是路由器，在網站上對於路近的處理都用koa logger
//執行時如果只是localhost:3000就還是會只出現nodfund
//所以就要在localhost:3000後面加上你在程式中的字串名稱
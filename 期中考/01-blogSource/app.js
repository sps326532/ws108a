const fs = require('fs')
const path = require('path')
const Koa = require('koa')
const KoaRouter = require('koa-router')
const koaLogger = require('koa-logger')

const app = module.exports = new Koa()
const router = new KoaRouter()

router
.get('/', async (ctx) => {        //router接到一個更目錄請求的時候，我就把他轉到blog/Home.md上面去
  ctx.redirect('/blog/Home.md')    //redirect=我現在雖然是更目錄，但我現在不想再更目錄我想要去別的地方
})
.get('/blog/:file', async (ctx) => { // 處理 GET 顯示檔案的請求
  let file = ctx.params.file // 取得 param 中的 file 參數
  let fpath = path.join(__dirname, 'blog', file) // 取得 blog 資料夾下 file 路徑指定的檔案。
  let ext = path.extname(file) // 取得副檔名
  ctx.type = ext // 設定傳回型態為《副檔名》對應的型態。
  ctx.body = fs.createReadStream(fpath) // 直接傳回該檔案串流
})

app.use(koaLogger()) // 使用 koa-logger 紀錄那些網址曾經被訪問過
app.use(router.routes()) // 使用 koa-router 路由
app.listen(3000) // 啟動 Server
console.log('server run at http://localhost:3000/')

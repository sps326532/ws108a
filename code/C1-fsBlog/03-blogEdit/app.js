const fs = require('fs')
const path = require('path')
const Koa = require('koa')
const KoaRouter = require('koa-router')
const koaLogger = require('koa-logger')
const koaBody = require('koa-body')
const MarkdownIt = require('markdown-it')
const mdit = new MarkdownIt({ // 創建 markdown 的轉換物件！
  html: true,
  linkify: true,
  typographer: true
})

const app = module.exports = new Koa()
const router = new KoaRouter()

router
.get('/', async (ctx) => {
  ctx.redirect('/blog/Home')
})
.get('/blog/:file', async (ctx) => { // 處理 GET 顯示檔案的請求
  let file = ctx.params.file // 取得 param 中的 file 參數
  let op = ctx.query.op || 'view' // 取得 query 中的 op 參數
  let fpath = path.join(__dirname, 'blog', file) // 取得 blog 資料夾下 file 路徑指定的檔案。
  let ext = path.extname(file) // 取得副檔名
  ctx.type = 'text/html'
  switch (op) {
    case 'view': // 顯示檔案
      if (file.indexOf('.') >= 0) { // 第一種情形：有指定副檔名，那麼直接傳回該檔案串流。
        ctx.type = ext // 設定傳回型態為《副檔名》對應的型態。
        ctx.body = fs.createReadStream(fpath) // 直接傳回該檔案串流
      } else { // 第二種情形：沒有副檔名，那麼預設是要呈現 .md 檔案
        let md = await fs.promises.readFile(fpath+'.md', 'utf8') // 讀取該 .md 檔案
        ctx.body = mdRender(md, file) // 將 markdown 轉為 HTML 傳回
      }
      break
    case 'edit': // 編輯檔案
      let md = await fs.promises.readFile(fpath+'.md', 'utf8') // 如果找到該 .md 檔案
      ctx.body = mdEdit(md, ctx.path); break // 回應編輯畫面
      break
  }
})
.post('/blog/:file', async (ctx) => { // 處理 POST 儲存檔案的請求
  let file = ctx.params.file // 取得 param 中的 file 參數
  let fpath = path.join(__dirname, 'blog', file) // 取得 blog 資料夾下 file 路徑指定的檔案。
  let mdText = ctx.request.body.mdText // 取得使用者修改過的檔案字串
  await fs.promises.writeFile(fpath+'.md', mdText) // 寫入檔案系統
  ctx.redirect('/blog/'+file) // 顯示儲存完成後的檔案
})

app.use(koaLogger()) // 使用 koa-logger 紀錄那些網址曾經被訪問過
app.use(koaBody({ jsonLimit: '1kb' })) // 使用 koa-body 自動將 POST 訊息轉為物件方便存取。
app.use(router.routes()) // 使用 koa-router 路由
app.listen(3000) // 啟動 Server
console.log('server run at http://localhost:3000/')

function layout (path, body) { // 套用 HTML 樣板 (有 css 與 header 區塊)
  let html = `
<html>
<head>
  <link rel="stylesheet" type="text/css" href="theme.css">
</head>
<body>
  <header>
    <a href="/">首頁</a> / 
    <a href="${path}?op=edit">編輯</a> / 
    <a href="${path}?op=view">檢視</a>
  </header>
  <div class="main">
    <div class="content">
      ${body}
    </div>
  </div>
</body>
</html>
`
  return html
}

function mdRender (md, path) { // 呈現 .md 檔案的畫面
  return layout(path, `${mdit.render(md)}`)
}

function mdEdit (md, path) { // 編輯 .md 檔案的畫面
  return layout(path, `
    <form action="${path}?op=save" method="post">
      <textarea name="mdText">${md}</textarea>
      <br/><br/>
      <button>儲存</button>
    </form>
  `)
}

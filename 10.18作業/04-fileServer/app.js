const Koa = require('koa')
const fs = require('fs')
const app = new Koa()
const path = require('path')

app.use(async function(ctx) {
  const fpath = path.join(__dirname, ctx.path)
  console.log('__dirname=', __dirname)    //dirname就是更目錄
  console.log('fpath=', fpath)            //fpath就是file path檔案路徑，檔案路徑是_dirname跟ctx.path連接起來的結果
  const fstat = await fs.promises.stat(fpath)
  console.log('fstat=', fstat)    //file state檔案狀態，會印出一大堆的檔案資料
  if (fstat.isFile()) {
    ctx.type = path.extname(fpath)
    console.log('ctx.type=', ctx.type)  //type是檔案類型(副檔名)
    ctx.body = fs.createReadStream(fpath) //讀完檔案用串流方式傳回，可以節省記憶體
  }
})

app.listen(3000)
console.log('server run at http://localhost:3000/')
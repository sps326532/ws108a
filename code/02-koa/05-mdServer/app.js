const Koa = require('koa')
const fs = require('fs')
const MarkdownIt = require('markdown-it')     //用markdown-it這個套件把md轉換成html
const mdit = new MarkdownIt()

const app = new Koa()
const path = require('path')

app.use(async function(ctx) {
  const fpath = path.join(__dirname, ctx.path)      //取得檔案狀態
  const fstat = await fs.promises.stat(fpath)       //讀取檔案狀態，放在fstat
  console.log('fpath=', fpath)
  if (fstat.isFile()) {                             //有了檔案狀態就可以判斷是不是一個檔案
    let ext = path.extname(fpath)                   //如果他是markdown-it我就轉成html
                                                    //如果他不是markdown-it我就直接儲存
    // console.log('ext=', ext)
    if (ext === '.md') {                            //這裡就是要加if去判斷是不是markdown-it
      let md = await fs.promises.readFile(fpath, 'utf8')  //如果他是markdown-it就先把整個檔案讀近來，但這樣就會耗掉比較多的記憶體
      //把整個檔案讀下來後放到md變數
      let html = mdit.render(md)      //呼叫mdit，把上頭markdown-it字串md，轉換成html
      ctx.type = '.html'              //type正確描述他的屬性，ctx是物件
      ctx.body = html                 //body正確反應檔案的內容
    } else {
      ctx.type = ext
      ctx.body = fs.createReadStream(fpath)
    }
  }
})

app.listen(3000)
console.log('server run at http://localhost:3000/')
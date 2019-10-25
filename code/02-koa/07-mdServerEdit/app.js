const Koa = require('koa')
const fs = require('fs')
const koaBody = require('koa-body')
const MarkdownIt = require('markdown-it')
const mdit = new MarkdownIt()

const app = module.exports = new Koa()
const path = require('path')
const extname = path.extname

app.use(koaBody({ jsonLimit: '1kb' }))

app.use(async function (ctx) {
  const fpath = path.join(__dirname, ctx.path)
  const fstat = await fs.promises.stat(fpath)
  console.log('fpath=', fpath)
  if (fstat.isFile()) {
    let ext = extname(fpath)
    if (ext === '.md') {
      let md = await fs.promises.readFile(fpath, 'utf8')
      let op = ctx.query.op     //這章節多在一個op運算 
      ctx.type = '.html'
      switch (op) {         //處理編輯跟處存的地方
        case 'edit': ctx.body = mdEdit(md, ctx.path); break  //如果在edit可以編輯就是用後面的函數寫
        case 'save':        //他邊完就是要存，在網頁裡按下存後會送一個op=save網址給他
        //儲存完後，會把網頁上編輯裡面的文字附上去給他，附在pos訊息
          let mdText = ctx.request.body.mdText
          await fs.promises.writeFile(fpath, mdText)
          ctx.redirect(ctx.path)
          break
        default: ctx.body = mdRender(md, ctx.path)
      }
    } else {
      ctx.type = ext
      ctx.body = fs.createReadStream(fpath)
    }
  }
})

if (!module.parent) {
  app.listen(3000)
  console.log('server run at http://localhost:3000/')
}

function layout (html) {
  return `
<html>
<head>
  <link rel="stylesheet" type="text/css" href="theme.css">
</head>
<body>
${html}
</body>
</html>
`
}

function mdRender (md, path) {
  return layout(`
  <div><a href="${path}?op=edit">Edit</a></div>
  ${mdit.render(md)}
  `)
}

//mdit.render(md)，是轉檔

function mdEdit (md, path) {
  return layout(`
  <div>
    <form action="${path}?op=save" method="post">
      <h2>Path: ${path}</h2>
      <textarea name="mdText">${md}</textarea>
      <br/><br/>
      <button>Save</button>
    </form>
  </div>
  `)
}

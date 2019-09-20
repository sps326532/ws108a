const Koa = require('koa')
const fs = require('fs')
const fsp = fs.promises
const app = module.exports = new Koa()
const path = require('path')
const extname = path.extname
const MarkdownIt = require('markdown-it')
const mdit = new MarkdownIt({linkify: true})

app.use(async function(ctx) {
  const fpath = path.join(__dirname, ctx.path)
  const ext = extname(fpath)
  console.log('ext=', ext)
  const fstat = await stat(fpath)
  if (fstat != null && fstat.isFile()) { // 檔案存在，傳回該檔案的串流
    ctx.type = ext
    ctx.body = fs.createReadStream(fpath)
  } else if (ext.trim().length === 0) { // 沒有副檔名
    let mdPath = fpath+'.md'
    let mdStat = await stat(mdPath)
    if (mdStat != null && mdStat.isFile()) { // 看看是否 '.md' 檔存在，是的話就轉成 html 傳回。
      ctx.type = 'html'
      let mdBuffer = await fsp.readFile(mdPath)
      let mdText = mdBuffer.toString()
      console.log('mdText=', mdText)
      ctx.body = md2html(mdText)
    }
  }
})

async function stat(fpath) {
  try {
    const fstat = await fsp.stat(fpath)
    return fstat
  } catch (error) {
    return null
  }
}

function md2html(md) {
  return `
<html>
<head>
<link rel="stylesheet" type="text/css" href="https://ccc-js.github.io/pp6/doc/main.css">
</head>
<body>
<article>
${mdit.render(md)}
</article>
</body>
</html>`
}

if (!module.parent) {
  app.listen(3000)
  console.log('host at http://localhost:3000/')
}

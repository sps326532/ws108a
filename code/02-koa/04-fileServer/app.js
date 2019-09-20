const Koa = require('koa');
const fs = require('fs')
const app = module.exports = new Koa();
const path = require('path');
const extname = path.extname;

app.use(async function(ctx) {
  const fpath = path.join(__dirname, ctx.path);
  const fstat = await fs.promises.stat(fpath);

  if (fstat.isFile()) {
    ctx.type = extname(fpath);
    ctx.body = fs.createReadStream(fpath);
  }
});

if (!module.parent) app.listen(3000);

const Koa = require('koa');
const app = module.exports = new Koa();

app.use(async function(ctx) {
  console.log('url:', ctx.url)
  console.log('  method:', ctx.method)
  console.log('  headers:', ctx.headers)
  ctx.body = 'Hello World';
});

if (!module.parent) {
  app.listen(3000)
  console.log(`Server running at http://localhost:3000/`)
}

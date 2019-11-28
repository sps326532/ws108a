const serve = require('koa-static');  //把目前資料夾匯出，匯出的意思就是讓他在網上能被取用及看到
const Koa = require('koa');
const app = new Koa();

app.use(serve('.'));  //目前資料夾

module.exports = app.listen(3000);

console.log('listening on port 3000');

//執行後會有兩個按鈕，fetchReadme按下去後會出現一堆文字，那些文字在程式中是找不到的
//那些一堆文字是像server發出請求，我要README.md的檔案，server就會把README.md丟回去給前端你的js抓到程式碼後，在丟到網頁程式中
//fetchJson
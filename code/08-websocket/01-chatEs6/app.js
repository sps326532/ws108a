var Koa = require('Koa')
var app = new Koa()
var fs = require('fs')
const server = require('http').createServer(app.callback())
var io = require('socket.io')(server)
var port = process.env.PORT || 3000

app.use(async function(ctx, next){                  //這裡的app.use就是純粹index.html這個檔案傳送出去
  ctx.type = 'html'
  ctx.body = fs.createReadStream(__dirname + '/index.html')
})

io.on('connection', function(socket){    ////on是當連接的事項發生的時候，就要呼叫後面的函數，這就是一個回屋的做法
  socket.on('chat message', function(msg){   //當有人發了chat message事件之後，我就會去觸發一個函數
    console.log('msg:', msg)                 //chat message 的後面還會跟著一個參數
    io.emit('chat message', msg)            //在發送一次chat message 訊息出去，給所有其他人
  })    //io.on connection 是事件導向
})      //chat message也是個物件導向

module.exports = server.listen(port, function(){
  console.log('listening on *:' + port)
})


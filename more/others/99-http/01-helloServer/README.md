## 用 HTTP 模組建立簡單的伺服器 

先執行 helloServer.js

```
PS D:\ccc\course\nodejs\code\02-http\01-helloServer> node helloServer
Server running at http://localhost:3000/

```

然後用 curl 抓取該網址


```
PS D:\ccc\course\nodejs\code\02-http\01-helloServer> curl http://localhost:3000

StatusCode        : 200
StatusDescription : OK
Content           : Hello World

RawContent        : HTTP/1.1 200 OK
                    Connection: keep-alive
                    Content-Length: 12
                    Content-Type: text/plain
                    Date: Wed, 03 Jul 2019 08:14:47 GMT

                    Hello World

Forms             : {}
Headers           : {[Connection, keep-alive], [Content-Length, 12], [Content-Type, text/plain], [Date, Wed, 03 Jul 2019 08:14:47 GMT]}
Images            : {}
InputFields       : {}
Links             : {}
ParsedHtml        : System.__ComObject
RawContentLength  : 12
```


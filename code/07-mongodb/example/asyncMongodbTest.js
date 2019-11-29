const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';  //連線的時候要給網址，如過啟動mongodb的時候沒有設定特定的port的時候就會設定預設的port

// Database Name
const dbName = 'mytest';


async function main() {       //只要主程式
  // Use connect method to connect to the server
  var client = await MongoClient.connect(url)  //先連線到資料庫伺服器
  console.log("Connected successfully to server")
  const db = client.db(dbName)  //取出資料庫，把目前的資料庫設定在這裡
  const collection = db.collection('documents')  //取出表格
  var iresult = await collection.insertMany([ {a : 1}, {a : 2}, {a : 3} ]) //可以增加新增查詢刪除的動作
  console.log("iresult=", iresult)
  var docs = await collection.find({}).toArray()
  console.log('docs=', docs)
  client.close();  //關閉連線
  return docs
}

main().catch(function (error) {
  console.log('error=', error)
})

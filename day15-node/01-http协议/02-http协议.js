const express = require('express')
const app = express()

app.get('/', (req, res) => {
  console.log(req.query)
  res.send('响应的数据')
})
app.post('/abc', (req, res) => {
  res.send('post响应的数据')
})
app.listen(5000, (err) => {
  if (err) console.log('失败')
  else console.log('成功')
})

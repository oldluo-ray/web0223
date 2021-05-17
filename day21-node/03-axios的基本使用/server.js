const express = require('express')

const cors = require('cors')

const app = express()

// 用来处理post请求上传的数据
// 只处理post请求上传的数据为键值对的字符串的形式 '键=值&键=值'
// 他处理不了json
app.use(express.urlencoded({ extended: true }))

// 由于使用axios发送的请求,axios发送请求上传数据的格式是json格式.所以需要配置一个处理json的中间件
app.use(express.json())
// 用来实现跨域资源共享
app.use(cors())

app.get('/test', (req, res) => {
  console.log(req.query)
  res.send('get')
})

app.post('/test', (req, res) => {
  console.log(req.body)
  res.send('post')
})

app.listen(5000, (err) => {
  if (err) console.log('服务器开启失败')
  else console.log('服务器开启成功')
})

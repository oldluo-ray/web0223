/**
 * 
1. 引入express
const express = require('express')
2. 使用express创建一个应用对象
const app = express()
// 在响应头中不显示后台是使用哪种开发语言或库
app.disable('x-powered-by')

3.监听get请求 第一个参数是请求的路径
app.get('/', (request, response) => {
  request.query //获取get请求的查询字符串
  // 响应数据
  response.send('<h3>express返回的数据</h3>')
})
4. 监听post请求
app.post('/',(request,response)=>{
  response.body 获取post请求上传的数据,但是默认拿不到,需要使用中间件配合
  response.send('接收到了post请求')
})

5. 开启服务器
app.listen(5000, err => {
  if (err) console.log(err)
  else console.log('服务器启动成功')
})
*/
// 1. 引入包(express)
const express = require('express')
// 2. 创建应用对象
const app = express()

// 处理请求:
// app.get专门处理get请求,只要是get请求,并且路径是指定的这一个,这个回调就会被调用
app.get('/', (request, response) => {
  console.log('/', request.query)
  response.send('中文')
})
//注意: 服务器端区分多个请求,是利用请求方式和请求的路径.当前情况下,发过来的都是get请求,所以就只使用路径来区分
app.get('/abc', (request, response) => {
  console.log('/abc-get', request.query)
  response.send('<h1>/abc的get请求响应的内容</h1>')
})
// 虽然路径和上面的是一样的,但是请求方式不同
app.post('/abc', (request, response) => {
  console.log('post请求/abc')
  response.send('<h1>post请求响应的数据</h1>')
})
// 3. 开启服务器
app.listen(5000, (err) => {
  if (err) console.log('服务器启动失败', err)
  else console.log('express服务器启动成功')
})

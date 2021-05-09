//#region
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


* 一、请求对象（request）
*     request.query  获取GET请求的查询字符串参数获取到的是一个对象
*     request.params 获取GET请求的参数路由中的参数，拿到的是一个对象
*     request.body   获取POST请求的请求体中的参数（必须要借助一个中间件才可以）
*     request.get('xxx') 获取请求头中指定的信息
*
* 二、响应对象（response）
*     response.send('xxxxx') 给客户端一个回应
*     response.download('相对路径') 给浏览器返回一个下载的响应
*     response.sendFile('绝对路径') 给浏览器发送一个文件，浏览器根据文件的种类，决定如何去展示。
*     response.redirect('网址') 重定向到一个新的网址
*     response.set('key','value') 自定义响应头
*     response.get('key') 获取响应头中的指定内容
*
* 
*/
//#endregion
const express = require('express')
const app = express()

// 配置路由(后端路由:url和资源的对应关系):
//  路由是: 资源和请求资源地址的一一对应关系

// 以get请求为例: 给服务器上传数据的方式: 1. 查询字符串 2. 路由参数(get/post都可以用)
// 路由参数: 其实就是将要上传的参数.写在路径里面

// http://127.0.0.1:5000/getUsers/1/10

app.get('/', (req, res) => {
  res.send('红苹果')
})

app.get('/abc', (req, res) => {
  res.send('绿苹果')
})
// 定义路由参数: /:参数名
// 注意:
// 1. 定义了路由参数之后,默认参数必须传递,如果不传,就无法匹配到这个路由
app.get('/getUsers/:page?/:pageSize', (req, res) => {
  console.log(req.params) // 拿到的数据,一定是字符串
  res.send('绿苹果')
})

app.post('/getUsers/:id', (req, res) => {
  console.log(req.params)
  console.log('post')
})

app.listen(5000, (err) => {
  if (err) console.log('错误')
  else console.log('成功')
})

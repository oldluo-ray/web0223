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

    对象上所有属性和方法,统一叫成员
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
// node中有一个内置的模块 path. 这个模块专门帮我们拼接路径
// path.resolve('','','') 会自动拼接/. 也支持../这些路径的写法
const path = require('path') //
const express = require('express')
const app = express()

// 配置路由(后端路由:url和资源的对应关系)
// 路由: 是资源和请求资源地址的一一对应关系

app.get('/', (req, res) => {
  res.send('红苹果')
})
app.get('/abc', (req, res) => {
  // res.send('./队列.jpg') // send 用来响应字符串
  // __dirname 返回当前执行的js文件所处的文件夹的路径
  // console.log(__dirname)
  // res.download(__dirname + '/队列.jpg') //让浏览器直接下载某个文件(可以写相对路径,也可以写绝对路径)
  // console.log(__dirname + '../队列.jpg')
  //C:\Users\luodi\Desktop\教学资料\教学代码\day15-node\02-express路由../队列.jpg
  // res.sendFile(path.resolve(__dirname, '../队列.jpg'))  // 如果浏览器可以识别则直接展示,否则,下载
  // res.redirect('http://www.atguigu.com')  //重定向

  // res.set('属性', 值)
  // res.set('aaa', '123') //设置响应头,要在响应之前设置

  res.send('响应')
  console.log(res.get('x-powered-by')) //获取响应头的信息
})
app.post('/abc', (req, res) => {
  const header = req.get('content-type') // 用来获取请求头中的信息
  console.log(header)
  res.send('post请求')
})

app.listen(5000, (err) => {
  if (err) console.log('错误')
  else console.log('成功')
})

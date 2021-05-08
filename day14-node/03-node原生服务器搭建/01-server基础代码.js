/** 
1. 引入http模块,用于搭建服务器
   const http = require('http')
2. 创建服务器对象
   const server = http.createServer((request, response) => {
   2.0 
   客户端的所有请求,都会被这个回调函数监听到
   2.1
   request 是请求对象,包含客户端传递过来的所有数据
   response 是响应对象,用于给客户端响应数据
   2.2 
   request.url 可以获取客户端通过get请求传递过来的数据
   2.3
   const queryString = require('querystring') querystring可以将查询字符串,转成一个对象
   const obj = queryString.parse(str) 将查询字符串转成对象的方法
   2.4 设置响应头
   response.setHeader('content-type', 'text/html;charset=utf-8')
   2.5 设置响应信息,并且响应给客户端
   response.end('<h3>服务器返回的结果</h3>')
})

3. 开启服务器
server.listen(5000, err => {
  if (err) console.log(err)
  else console.log('服务器启动成功')
})
*/

// 1. 引入http模块
const http = require('http')
const queryString = require('querystring')
// queryString.parse('查询字符串') //将查询字符串转成一个对象
// 2. 创建服务器对象
const server = http.createServer((request, response) => {
  // 当客户端发送请求过来的时候,这个回调函数就会被调用
  // 当这个回调函数被调用的时候,会传过来两个对象. 第一个是请求对象, 第二个是响应对象
  // 请求对象(request)记录了请求的信息
  // 响应对象(response)可以用来响应客户端
  //   console.log('客户端请求了')
  //end方法可以响应客户端
  // 这句话,可以解决中文乱码的问题
  let str = request.url // /?name=zs&age=18
  let arr = str.split('?')
  const res = queryString.parse(arr[1])
  console.log(res)
  response.setHeader('content-type', 'text/html;charset=utf-8')
  response.end('hahaahh')
})
// 3. 开启服务器
server.listen(5000, (err) => {
  if (err) console.log('服务器启动失败', err)
  else console.log('服务器启动成功')
})

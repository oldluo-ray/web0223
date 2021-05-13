;(async function () {
  const express = require('express')

  //引入router
  const logicRouter = require('./router/logicRouters')
  
  // 由于服务器中大部分的操作都是要操作数据库,如果当数据库连接成功之后,再去开启服务器
  await require('./db/condb')
  console.log('数据库连接成功')
  const app = express()

  // 是为了让我们可以在浏览器的地址栏中直接通过http://127.0.0.1:5000/login/index.html. 可以直接访问到登录/注册的页面
  app.use(express.static('../public'))
  // 处理post请求上传上来的数据
  app.use(express.urlencoded({ extended: true }))

  // 使用路由器中间件
  app.use(logicRouter)

  app.listen(5000, (err) => {
    if (err) console.log('错误', err)
    else console.log('服务器开启成功')
  })
})()

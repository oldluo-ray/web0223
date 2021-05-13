;(async function () {
  const express = require('express')

  //引入router
  const logicRouter = require('./router/logicRouters')
  const uiRouter = require('./router/uiRouter')

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
  app.use(uiRouter)

  // 配置ejs模板
  // 告诉express,当前我们服务器中使用的是ejs这个模板引擎
  app.set('view engine', 'ejs')

  // 告诉express,我们定义的模板在哪个文件夹下面
  // 所有的.ejs文件就是所谓的模板
  app.set('views', '../views/home')

  app.listen(5000, (err) => {
    if (err) console.log('错误', err)
    else console.log('服务器开启成功')
  })
})()

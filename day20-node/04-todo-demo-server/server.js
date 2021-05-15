;(async function () {
  const express = require('express')
  const router = require('./routers/logicRouter')

  //引入连接数据库的代码
  await require('./db/db')
  console.log('数据库连接成功')

  const app = express()

  app.use(express.urlencoded({ extended: true }))

  app.use(router)
  // 配置路由(接口)

  app.listen(5000, (err) => {
    if (err) console.log('服务器开启失败')
    else console.log('服务器开启成功')
  })
})()

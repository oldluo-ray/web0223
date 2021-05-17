;(async function () {
  const express = require('express')
  const router = require('./routers/logicRouter')
  const cors = require('cors')

  //引入连接数据库的代码
  await require('./db/db')
  console.log('数据库连接成功')

  const app = express()

  // 用来处理post请求上传的数据
  app.use(express.urlencoded({ extended: true }))
  // 用来实现跨域资源共享
  app.use(cors())

  //将路由拆分到别的模块
  app.use(router)

  app.listen(5000, (err) => {
    if (err) console.log('服务器开启失败')
    else console.log('服务器开启成功')
  })
})()

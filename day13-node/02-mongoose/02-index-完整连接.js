;(async function () {
  // 1. 引入mongoose
  const mongoose = require('mongoose')

  // 2. 连接数据库mongodb
  // 前提: mongodb数据库处于启动的状态
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/web0223test', {
      //   解决警告的问题
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })

    console.log('mongodb数据库连接成功')
  } catch (error) {
    console.log('mongodb数据库连接失败', error)
  }
})()

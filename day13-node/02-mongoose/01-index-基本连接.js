// 1. 引入mongoose
const mongoose = require('mongoose')

// 2. 连接数据库mongodb
// 前提: mongodb数据库处于启动的状态
const connectPromise = mongoose.connect(
  'mongodb://127.0.0.1:27017/web0223test',
  {
    //   解决警告的问题
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
)

console.log(connectPromise)

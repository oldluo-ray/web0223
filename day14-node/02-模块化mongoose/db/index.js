// 用于连接数据库
const mongoose = require('mongoose')

// 连接成功之后,会返回一个promise,其他的js中,需要知道promise的状态,所以要将这个promise导出
module.exports = mongoose.connect('mongodb://127.0.0.1:27017/web0223test', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

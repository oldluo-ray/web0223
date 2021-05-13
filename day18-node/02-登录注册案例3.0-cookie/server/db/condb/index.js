//连接数据库
const mongoose = require('mongoose')
module.exports = mongoose.connect('mongodb://127.0.0.1:27017/web0223login', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

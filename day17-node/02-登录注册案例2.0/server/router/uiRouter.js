const express = require('express')

// 创建路由对象
const uiRouter = express.Router()

uiRouter.get('/home', (req, res) => {
  // 将.ejs里面的代码,进行拼接,然后响应给浏览器
  res.render('index', { username: 'zs' })
})

module.exports = uiRouter

const express = require('express')
const { findUserById } = require('../db/crud/login')

// 创建路由对象
const uiRouter = express.Router()

uiRouter.get('/home', async (req, res) => {
  // 要获取到当前用户的信息
  // 想在这里拿到当前登录的用户信息,就需要去数据库中查找,但是查找,需要有一个查询条件
  // console.log(req.query)
  // 去数据库中根据_id,找到指定的用户信息
  const _id = req.query._id
  const user = await findUserById(_id)
  // 将.ejs里面的代码,进行拼接,然后响应给浏览器
  res.render('index', { username: user.name })
})

module.exports = uiRouter

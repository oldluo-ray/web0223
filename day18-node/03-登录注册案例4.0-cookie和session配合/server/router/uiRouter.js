const express = require('express')
const { findUserById } = require('../db/crud/login')

// 创建路由对象
const uiRouter = express.Router()

// 响应首页
uiRouter.get('/home', async (req, res) => {
  // 当访问首页/详情页时, 执行req.session.userId的时候,服务器会自动从session中,根据上传上来的sessionid,去找对应的数据,找到了,就表示登录成功,否则就是没有登录
  console.log(req.session.userId)
  if (req.session.userId) {
    // 要获取到当前用户的信息
    // 想在这里拿到当前登录的用户信息,就需要去数据库中查找,但是查找,需要有一个查询条件
    // console.log(req.query)
    // 去数据库中根据_id,找到指定的用户信息
    const _id = req.query._id // 属性=值&属性=值 ==> {属性: 值, 属性:值}
    console.log('1232131231', req.query) //{_id: 609b....}
    const user = await findUserById(_id)
    // 将.ejs里面的代码,进行拼接,然后响应给浏览器
    res.render('index', { username: user.name })
  } else {
    res.redirect('http://127.0.0.1:5000/login/index.html')
  }
})

// 用于响应详情页面
uiRouter.get('/detail', (req, res) => {
  // 判断,有没有小卡片,如果有则响应,如果没有就重定向到登录页面
  // 通过req.cookies可以获取到登录成功之后,服务器给浏览器发的下卡片
  // 如果之前登录过,req.cookies就是一个对象,并且对象里面有数据
  // 如果之前没有登录过,或者已经退出了,cookie里的数据删除了,意味着小卡片没有了
  // 没有了req.cookies就拿到的是一个空对象

  // console.log(req.cookies)
  console.log(req.session.userId)
  if (req.session.userId) {
    //说明之前登录过,登录过就有cookie信息
    res.render('detail', {})
  } else {
    // 说明之前没登录/退出了
    res.redirect('http://127.0.0.1:5000/login/index.html')
  }
})

module.exports = uiRouter

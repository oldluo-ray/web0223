const express = require('express')
// 引入往数据库中添加用户信息的方法
const { registerUser } = require('../db/crud/register')
// 引入查找用户信息的方法
const { findUser } = require('../db/crud/login')
// 1. 创建路由器对象
const router = express.Router()
// 2. 利用路由器对象配置路由(这个路由器对象,简单理解就是app.js中app)
// 处理注册的逻辑
router.post('/register', async (req, res) => {
  //1. 获取用户上传的用户名和密码
  const { username, password } = req.body
  //2. 根据用户名和密码,创建一个用户,将这个用户信息,存储到数据库中
  await registerUser(username, password) // 数据库中添加成功,表示用户注册成功
  res.send(
    '注册成功,<a href="http://127.0.0.1:5000/login/index.html">点击登录</a>'
  )
})

// 处理登录的逻辑
router.post('/login', async (req, res) => {
  //  1. 获取用户上传的用户名和密码
  const { username, password } = req.body

  // 2. 去数据库中查找对应的数据,有则登录成功,如果找不就登录失败
  const user = await findUser(username, password)
  if (user) {
    // 登录成功之后,给浏览器发送小卡片
    // 这行代码其实就是修改了响应头

    // 登录成功之后,要将用户id,存储到session中
    // 这行代码做的事情:
    // 1. 在session中开辟空间,存储用户id
    // 2. 生成了一个sessionid
    // 3. 在响应头中添加一个set-cookie.让浏览器将sessionid存到cookie中
    req.session.userId = user._id

    // console.log(user)
    // 登录成功
    // 成功要跳转到一个登录之后才可以访问的页面(首页)
    // http://127.0.0.1:5000/home/index.html?username=hahahaha'
    res.redirect('http://127.0.0.1:5000/home?_id=' + user._id)
  } else {
    //登录失败
    res.send('登录失败,用户名或密码错误')
  }
})

//3. 将router导出
module.exports = router

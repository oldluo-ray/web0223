// 将具体往数据库中添加数据的create方法封装起来
const userModel = require('../model')
function registerUser(name, password) {
  return userModel.create({
    name,
    password,
  })
}

module.exports.registerUser = registerUser

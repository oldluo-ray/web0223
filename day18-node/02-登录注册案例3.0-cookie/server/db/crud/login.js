// 将具体在数据库中查找用户的方法
const userModel = require('../model')
function findUser(name, password) {
  return userModel.findOne({ name, password })
}

function findUserById(_id) {
  return userModel.findOne({ _id })
}

module.exports.findUser = findUser
module.exports.findUserById = findUserById

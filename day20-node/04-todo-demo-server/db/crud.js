const todoModel = require('./model')
// 查询所有任务列表数据的方法
function findAllTodos() {
  return todoModel.find()
}

module.exports.findAllTodos = findAllTodos

const todoModel = require('./model')
// 查询所有任务列表数据的方法
function findAllTodos() {
  return todoModel.find()
}

// 添加数据的方法
function addTodoFn(document) {
  return todoModel.create(document)
}

// 更新数据的方法
function updateTodos(ids, isDone) {
  return todoModel.updateMany({ _id: { $in: ids } }, { $set: { isDone } })
}

//删除数据的方法
function deleteTodos(ids) {
  return todoModel.deleteMany({ _id: { $in: ids } })
}

module.exports.findAllTodos = findAllTodos
module.exports.addTodoFn = addTodoFn
module.exports.updateTodos = updateTodos
module.exports.deleteTodos = deleteTodos

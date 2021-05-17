const express = require('express')
//引入查询任务列表的方法
const {
  findAllTodos,
  addTodoFn,
  updateTodos,
  deleteTodos,
} = require('../db/crud')
const router = express.Router()

// 返回所有todo数据
router.get('/findTodos', async (req, res) => {
  // 去数据库中,找到所有的任务列表.然后响应给浏览器吧
  const todoList = await findAllTodos()

  // 配合前端,完成jsonp跨域请求
  // 1. 先获取函数名
  const { callback } = req.query

  // 将数据响应给浏览器
  // 直接将数组传入send.express会自动将数组转成json格式的字符串.
  // 但是现在要解决跨域问题,所以要自己拼接函数调用的字符串.就必须先将todoList里面存储的数据,转成json格式的字符串,然后再拼接,最后响应回去
  let dataStr = JSON.stringify(todoList)
  // 拼接函数调用的字符串
  let cbStr = `${callback}(${dataStr})`
  res.send(cbStr)
})

// 新增数据的接口
router.post('/addTodo', async (req, res) => {
  // 获取用户上传的数据
  const { todoName } = req.body

  // 将任务名上传到数据到中
  await addTodoFn({ todoName })

  //由于添加完成之后,前端还是要更新列表,所以需要添加之后的最新的数据,我们现在要将最新的数据,响应给浏览器
  const todoList = await findAllTodos()
  // send里面直接传数组,express会将todoList自动转成json字符串
  res.send(todoList)
})

//更新数据的接口
router.post('/updateTodos', async (req, res) => {
  // 由于这个接口,用于更新一条或多条 ,所以上传数据要是一个数组,里面存储了所有要修改的数据的id. 即便只修改一条,也必须是一个数组,数组中存放了一个id
  let { ids, isDone } = req.body
  // 传上来的ids是字符串数组.所以要转成字符串
  ids = JSON.parse(ids)
  // 调用更新的方法
  await updateTodos(ids, isDone)
  // //由于修改完成之后,前端还是要更新列表,所以需要修改之后的最新的数据,响应给浏览器
  const todoList = await findAllTodos()
  // // send里面直接传数组,express会将todoList自动转成json字符串
  res.send(todoList)
})

// 删除数据的接口
router.post('/deleteTodos', async (req, res) => {
  // 接收用户上传上来的要删除的数据的id
  let { ids } = req.body
  // 传上来的ids是字符串数组.所以要转成字符串
  ids = JSON.parse(ids)

  //调用方法,对数据进行删除
  await deleteTodos(ids)
  // //由于删除完成之后,前端还是要更新列表,所以需要删除之后的最新的数据,响应给浏览器
  const todoList = await findAllTodos()
  // // send里面直接传数组,express会将todoList自动转成json字符串
  res.send(todoList)
})

module.exports = router

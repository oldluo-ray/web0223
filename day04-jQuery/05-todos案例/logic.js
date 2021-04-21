// 主要定义todos案例中的业务逻辑
var todolist = [
  {
    id: 1,
    todoName: '吃饭',
    isDone: true,
  },
  {
    id: 2,
    todoName: '睡觉',
    isDone: true,
  },
  {
    id: 3,
    todoName: '敲代码',
    isDone: false,
  },
]

// 1. 将数据渲染到页面上
// 1.1 根据数据,动态的创建html字符串
// 1.1.1. 遍历数组,根据数组元素的个数,动态的创建多个字符串

var htmlArr = todolist.map(function (item, index) {
  //判断:
  // 如果item.isDone的值是true,就给input加checked, 如果没有就不加
  if (item.isDone) {
    return (
      '<li><label><input type="checkbox" checked/><span class="done">' +
      item.todoName +
      '</span></label><button class="btn btn-danger">删除</button></li>'
    )
  } else {
    return (
      '<li><label><input type="checkbox" /><span>' +
      item.todoName +
      '</span></label><button class="btn btn-danger">删除</button></li>'
    )
  }
})

// 1.2 然后将拼接好的html字符串,添加到todo-main中
$('.todo-main').html(htmlArr.join(''))

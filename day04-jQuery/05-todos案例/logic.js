// 主要定义todos案例中的业务逻辑
var todolist = [
  {
    id: 1,
    todoName: '123',
    isDone: true,
  },
  {
    id: 2,
    todoName: '456',
    isDone: false,
  },
]

// 0.判断数组中是否有数据,如果有,则展示todo-main和todo-footer.如果没有数据就不展示
if (todolist.length) {
  // 1. 将数据渲染到页面上
  // 1.1 根据数据,动态的创建html字符串
  // 1.1.1. 遍历数组,根据数组元素的个数,动态的创建多个字符串

  var htmlArr = todolist.map(function (item, index) {
    //判断:
    // 1.1.2 如果item.isDone的值是true,就给input加checked, 如果没有就不加
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
  showListNum()
} else {
  // 没有数据,就不展示todo-main和todo-footer,并且提示一句话,提示恭喜你,没有任务
  hide()
  //提示
}

// 2. 实现添加任务的逻辑
// 2.1 给input注册键盘抬起事件
$('.todo-header input').on('keyup', function (e) {
  // 2.2 在事件处理函数中,判断按下抬起的按键是否是回车(keyCode === 13)
  if (e.keyCode === 13) {
    // 2.2 如果按下回车了,就根据输入的内容,动态的创建li的字符串,然后,添加到到todo-main中
    // 进行健壮性处理:
    var value = $(this).val().trim()
    // 如果分支结构中只有一行代码,那么花括号就可以省略,然后把那一行代码,直接写在if后面
    if (!value) return

    // 清空添加任务的表单项
    $('.todo-header input').val('')
    var str =
      '<li><label><input type="checkbox" /><span >' +
      value +
      '</span></label><button class="btn btn-danger">删除</button></li>'

    $('.todo-main').append(str)

    show()

    // 调用修改全选的方法
    changeAllCheckbox()
    showListNum()
  }
})

// 3. 更新任务项的状态
// 3.1 获取所有的任务项的input[checkbox]
// 3.2 注册点击事件
// 注意: 由于有新的任务项,所以需要事件委托
$('.todo-main').on('click', 'li>label>input', function () {
  // 3.3 在事件处理函数中,获取input[checkbox]的状态,然后给span添加或删除类名done
  var isChecked = $(this).prop('checked')
  if (isChecked) {
    $(this).next().addClass('done')
  } else {
    $(this).next().removeClass('done')
  }

  // 4.点击之后,要动态的判断每一个任务项是否都选中了,如果都选中了,就将todo-footer中的全选也选中,否则不选中
  // 4.1 获取所有的任务项的个数
  // var allItems = $('.todo-main>li>label>input').length
  // // 4.2 获取所有选中的任务项的个数
  // var allCheckedItems = $('.todo-main>li>label>input:checked').length
  // console.log(allItems, allCheckedItems)
  // // 4.3 通过判断这两个数是否相同,来决定全选是否选中
  // allItems === allCheckedItems
  //   ? $('.todo-footer input').prop('checked', true)
  //   : $('.todo-footer input').prop('checked', false)
  changeAllCheckbox()
  showListNum()
})

//5. 点击任务项的删除按钮,删除当前任务项
$('.todo-main').on('click', 'li>button.btn-danger', function () {
  //删除li
  $(this).parent().remove()
  // 没有删除完所有的li的时候,要判断全选是否选中
  changeAllCheckbox()
  // 如果删除完毕,要判断todo-main和todo-footer是否要展示
  isShow()
  showListNum()
})

// 6. 全选按钮的点击事件逻辑,全选选中了,每一个任务项也都选中,全选取消,每一个任务项也都取消
$('.todo-footer input').on('click', function () {
  // 先获取全选按钮的状态
  var isChecked = $(this).prop('checked')
  // 如果全选选中,就让每一个都选中,全选取消就让每一个都取消
  if (isChecked) {
    //都选中
    $('.todo-main li label input').prop('checked', true).next().addClass('done')
  } else {
    //都取消
    $('.todo-main li label input')
      .prop('checked', false)
      .next()
      .removeClass('done')
  }

  showListNum()
})

//7.动态的展示所有任务项的个数和已经完成的任务项的个数
function showListNum() {
  var totalNum = $('.todo-main>li').length
  var doneTotalNum = $('.todo-main>li>label>input:checked').length
  $('#doneNum').text(doneTotalNum)
  $('#totalNum').text(totalNum)
}

// 8.删除所有选中的任务项
$('.todo-footer button.btn-danger').on('click', function () {
  $('.todo-main>li>label>input:checked').parent().parent().remove()
  //展示数字
  showListNum()
  // 展示todo-main和todo-footer
  isShow()
})

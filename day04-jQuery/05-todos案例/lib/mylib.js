function changeAllCheckbox() {
  // 4.1 获取所有的任务项的个数
  var allItems = $('.todo-main>li>label>input').length
  // 4.2 获取所有选中的任务项的个数
  var allCheckedItems = $('.todo-main>li>label>input:checked').length
  console.log(allItems, allCheckedItems)
  // 4.3 通过判断这两个数是否相同,来决定全选是否选中
  allItems === allCheckedItems
    ? $('.todo-footer input').prop('checked', true)
    : $('.todo-footer input').prop('checked', false)
}

//判断列表中是否有数据
function isShow() {
  // 判断todo-main下面有没有li标签,如果有则展示todo-main和todo-footer.如果没有则不展示
  $('.todo-main').children().length ? show() : hide()
}

// 这是让todo-main和todo-footer隐藏的函数
function hide() {
  $('.todo-main, .todo-footer').hide()
  $('.todo-wrap').append('<h1>恭喜你,没有任务</h1>')
}
// 这是让todo-main和todo-footer展示的函数
function show() {
  $('.todo-main, .todo-footer').show()
  $('h1').remove()
}

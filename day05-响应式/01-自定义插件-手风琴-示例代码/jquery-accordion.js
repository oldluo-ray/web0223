/**
 * Created by luodianlei on 2018/4/27.
 */
//由于我们封装的是jquery插件,我们对应的方法需要使用jquery对象调用
// 所以应该把方法添加到jquery的原型上
// $.fn === $.prototype
$.fn.accordion = function (obj) {
  var lis = this.find('li')

  // 计算li标签,在初始化页面时的宽度
  var avgWidth = this.width() / lis.length
  lis.css({ width: avgWidth })
  // 给li加颜色
  lis.each(function (index, element) {
    $(element).css({ backgroundColor: obj.colors[index] })
  })
  // 给li的最小宽度设置默认值
  obj.minWidth = obj.minWidth || 100
  // 根据最小值计算最大值
  // 当鼠标移入li的时候,所有的兄弟要变成最小值
  var maxWidth = this.width() - (lis.length - 1) * obj.minWidth
  // 业务逻辑:
  //  1. 找到所有的li标签,然后给li注册鼠标移入事件

  // 注册事件
  lis.on('mouseenter', function () {
    // 让移入的li,宽度变大,其他的里宽度变小
    $(this)
      .stop(true)
      .animate({ width: maxWidth })
      .siblings()
      .stop(true)
      .animate({ width: obj.minWidth })
  })

  // 鼠标移除手风琴,所以的li的宽度,恢复到平均值
  this.on('mouseleave', function () {
    lis.stop(true).animate({ width: avgWidth })
  })
}

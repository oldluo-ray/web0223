// 1. 如何遍历jquery中的dom对象
$('选择器').each(function (index, element) {})

// 2. 例: div>span  $('div').children().css('color','red') 继续链式编程如何获取div
$('div').children().css('color', 'red').end()
// 3. 网页中引入了其他库(先)和jquery库(后),其他库中定义了一个$函数, 如何解决其他库的$被jquery的$覆盖的问题?
// 解决方式: 释放jquery中对于$的控制权: $.noConflict()
// jquery中使用jQuery这个函数

// 4. jquery中的插件,是为了完成jquery中无法完成的工作
// 如果使用jquery插件.就需要先引入jquery, 后引入jquery插件

// 自定义插件的原理: 就是往jquery的原型上添加方法

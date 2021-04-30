console.log('module1')
let a = 1
let b = 2

// module1.js中声明的变量不是全局变量,其实是一个局部变量
//如果想在其他的js中使用,就首先需要在当前的js文件中将a,b导出
// node 让每一个js文件都形成一个局部作用域,其他文件想要使用当前文件的数据,就需要在当前文件中先将数据导出去,然后在使用的文件中引入即可
module.exports = {
  a,
  b,
}

//#region
/**
 * 按照commonjs模块化的方式:
 * 1. 在一个js文件中,引入另一个js文件
 * require('js文件的路径') 返回对应js文件中导出的结果
 * 2. 在具体的js文件中,一定要通过module.exports将需要暴露的数据,导出来.这样其他js中才可以导入,并且使用
 *
 * 注意点:
 * 1. commonjs底层实现: exports = module.exports = {}
 * 合法的书写方式
 * module.exports = {xxx: 值}
 * moudle.exports = 值
 * exports.xxx = 值
 *
 * 2.如果直接个module.exports赋值,只需要写一次,如果写多次,后面的会覆盖前面的
 *
 */
//#endregion

console.log('app')

// 想让module1执行,就在入口文件中引入module1
// module1 没有导出的时候,接收到的是一个空对象
// module1 导出之后,接收到一个对象,对象里面是module1中导出的数据
// node平台中,提供了一个require方法,可以让引入的文件执行,并且返回这个文件导出的数据
// const module1 = require('./module1')
// const module2 = require('./module2')
// const module3 = require('./module3')
// console.log(module1)
// console.log(module2)
// console.log(module3)

// let { a, b } = module1

// console.log(a)
// console.log(b)

const module4 = require('./module4')
console.log(module4)

//#region
//  * 1.在NodeJS中，所有的模块（js文件），都被自动包裹了一个外层函数
//  * 2. 外层函数：function (exports, require, module, __filename, __dirname) {...}
//  *       -- exports : 用于暴露模块
//  *       -- require ：用于引入模块
//  *       -- module ： 用于暴露了模块
//  *       -- __filename ：当前文件的路径（绝对路径）
//  *       --__dirname ：当前文件所在文件夹的路径（绝对路径）
//  *
//  * 3.这个外层函数有什么用？
//  *     1.让我们可以直接使用CommonJs语法。
//  *     2.隐藏内部实现（作用域）
//  *     3.处于安全性考虑
//  *
//  * arguments.callee.toString 在函数内部执行,用于查看当前函数
//  *
//  * */
//#endregion

// 在node中,每一个js文件,就是一个模块.在这个模块中定义的变量,是局部变量
// 当一个js文件,在node中执行的时候,node会自动创建一个函数,然后用这个函数来包裹当前js文件中的所有代码

// console.log(arguments.callee.toString()) //返回的是当前node中包裹代码的函数
console.log(__filename) // 返回当前文件的绝对路径
console.log(__dirname) // 返回当前文件所处的文件夹的绝对路径

// function (exports, require, module, __filename, __dirname) {

//     console.log(arguments.callee.toString())

// }

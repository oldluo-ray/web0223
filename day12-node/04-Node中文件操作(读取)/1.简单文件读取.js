/*
 * 简单文件读取：
 *   fs.readFile(path[, options], callback)
 *           --path:要写入的文件路径+文件名+文件后缀
 *           --options：配置对象
 *               --flag：打开文件要进行的操作，默认值：'r'
 *                     'w' : 写入
 *                     'r' ：读取
 *                     'a' ：追加
 *               --encoding ：编码，默认是：'utf-8'
 *           --callback：回调函数
 *
 */

// fs模块是node中的内置模块,这个模块用来读写文件. 由于是内置模块,所以不需要下载,但是要导入
const fs = require('fs')

// 错误优先原则: 回调函数中第一个参数是错误信息,第二个参数才是读取到的信息
// 如果读取出错了,err就是一个错误对象,如果没有出错err就是一个null
fs.readFile('./hello.tx', (err, data) => {
  console.log(err, data) // data是一个buffer
  console.log(data.toString())
})
console.log('123123')

let a = 1
let b = 2
let c = 3
module.exports.b = b
//exports = module.exports = {}
// 这里module.exports指向一个新的对象
//所以现在是 exports 指向原来的对象,而module.exports指向新的对象
module.exports = {
  a,
}
// console.log(exports === module.exports)

// 这行代码执行, module.exports已经指向一个新对象了,exports也执行一个新对象了
// exports = {
//   c,
// }

exports.c = c

// 注意: module.exports指向谁,就导出谁

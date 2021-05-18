// 要在app.js中使用module1.js模块中的代码
// 这是统一导出的引入代码
import { fn, arr } from './module1'
// 分别导出的引入代码
import { fn2, arr2, a2 } from './module2'

// 默认导出的引入方式
import xxx from './module3'

// 导入module4. module4中使用了三种导出方式
// 1. 如果一个模块中三种导出方式都使用了,则按照下面的方式引入.需要注意,默认导出的写在最前面
// 2. 如果导出的数据的名字和当前模块中其他的变量重名了,可以使用as重命名
import bol, { fn as fn4, arr as arr4, obj } from './module4'

fn()
console.log(arr)
console.log('========================')
fn2()
console.log(arr2)
console.log(a2)
console.log('========================')
console.log(xxx)

console.log('========================')
fn4()
console.log(arr4)
console.log(obj)
console.log(bol)

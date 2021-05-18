'use strict';

var _module = require('./module1');

var _module2 = require('./module2');

var _module3 = require('./module3');

var _module4 = _interopRequireDefault(_module3);

var _module5 = require('./module4');

var _module6 = _interopRequireDefault(_module5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 默认导出的引入方式
// 要在app.js中使用module1.js模块中的代码
// 这是统一导出的引入代码
(0, _module.fn)();

// 导入module4. module4中使用了三种导出方式
// 1. 如果一个模块中三种导出方式都使用了,则按照下面的方式引入.需要注意,默认导出的写在最前面
// 2. 如果导出的数据的名字和当前模块中其他的变量重名了,可以使用as重命名

// 分别导出的引入代码

console.log(_module.arr);
console.log('========================');
(0, _module2.fn2)();
console.log(_module2.arr2);
console.log(_module2.a2);
console.log('========================');
console.log(_module4.default);

console.log('========================');
(0, _module5.fn)();
console.log(_module5.arr);
console.log(_module5.obj);
console.log(_module6.default);
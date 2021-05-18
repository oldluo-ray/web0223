(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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
},{"./module1":2,"./module2":3,"./module3":4,"./module4":5}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
function fn() {
  console.log('module1-fn');
}

var arr = [1, 2, 3];

// 统一导出
exports.fn = fn;
exports.arr = arr;
},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fn2 = fn2;
// 分别导出
function fn2() {
  console.log('module2-fn');
}
var arr2 = exports.arr2 = ['a', 'b', 'c'];

var a2 = exports.a2 = 1;
},{}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// 默认导出

var a = 1;
// export default ['hehe']
exports.default = a;
},{}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
function fn() {
  console.log('module4-fn');
}

var arr = ['module4', 'es6'];

// 统一导出
exports.fn = fn;
exports.arr = arr;
// 分别导出

var obj = exports.obj = { name: 'module4'
  // 默认导出
};exports.default = true;
},{}]},{},[1]);

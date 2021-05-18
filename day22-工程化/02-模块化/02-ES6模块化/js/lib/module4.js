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
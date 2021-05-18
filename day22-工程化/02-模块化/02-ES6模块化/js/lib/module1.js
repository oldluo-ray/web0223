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
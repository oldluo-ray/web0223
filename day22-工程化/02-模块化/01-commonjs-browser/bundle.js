(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const module1 = require('./modules/module1')
const module2 = require('./modules/module2')

console.log(module1)
console.log(module2)

},{"./modules/module1":2,"./modules/module2":3}],2:[function(require,module,exports){
const arr = [1, 2, 3]

function fn() {
  console.log('test')
}

module.exports = {
  arr,
  fn,
}

},{}],3:[function(require,module,exports){
const obj = { name: 'zs' }

module.exports = {
  obj,
}

},{}]},{},[1]);

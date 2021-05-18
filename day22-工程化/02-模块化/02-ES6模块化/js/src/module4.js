function fn() {
  console.log('module4-fn')
}

let arr = ['module4', 'es6']

// 统一导出
export { fn, arr }
// 分别导出
export let obj = { name: 'module4' }
// 默认导出
export default true

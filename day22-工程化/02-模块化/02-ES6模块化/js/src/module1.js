function fn() {
  console.log('module1-fn')
}

let arr = [1, 2, 3]

// 统一导出
export { fn }
export { arr }

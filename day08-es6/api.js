function a() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('异步操作a完成了')
      resolve()
    }, 1000)
  })
}

function b() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('异步操作b完成了')
      resolve()
    }, 1000)
  })
}

function c() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('异步操作c完成了')
      resolve()
    }, 1000)
  })
}

;(function () {
  let obj = { name: 'xw' }
  let x = 0
  function fn() {
    console.log('xw-fn')
  }

  function add(y) {
    return x + y
  }

  window.modulexw = {
    obj,
    fn,
    add,
  }
})()

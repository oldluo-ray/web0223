// 1. xhr默认没有promise
// 2. 我们要自己封装函数,将xhr和promise配合起来
// 3. 当代用了这个myAjax方法的时候,会返回一个promise对象.如果请求成功了,promise的状态被修改为成功,如果请求失败了,将promise的状态改成失败
function myAjax(options) {
  return new Promise((resolve, reject) => {
    if (!options || typeof options !== 'object') return
    // 1. 一上来要把所有的属性都结构出来
    let { url, data, type = 'get', timeout, dataType = 'json' } = options
    // 2. 判断url有没有传,没有就return
    if (!url) return
    // 3. 创建xhr对象
    const xhr = new XMLHttpRequest()
    // 设置超时时间
    xhr.timeout = timeout // 设置超时时间,单位是毫秒
    // 4. 将传入的data对象,转成键值对的字符串
    let paramStr = obj2str(data)
    // 5. 调用open方法
    if (type === 'get') {
      url += '?' + paramStr //127.0.0.1:5000/xxx?username=zs
      paramStr = null
    }
    xhr.open(type, url)
    // 6. 设置请求头
    if (type === 'post')
      xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded')

    xhr.send(paramStr)

    // 8. 监听readyState的变化
    xhr.onreadystatechange = function () {
      //9. 判断是否完成
      if (xhr.readyState === 4) {
        //10. 判断是否成功
        if (xhr.status === 200) {
          let value
          if (dataType === 'json') {
            value = xhr.responseText
            value = JSON.parse(value)
          } else if (dataType === 'text') {
            value = xhr.responseText
          }
          resolve(value)
        } else {
          // 表示失败
          reject('失败')
        }
      }
    }
  })
}

// 由于在maAjax中要将一个对象,转成键值对的字符串,所以单独封装一个函数,存放转化的代码,封装好之后,在myAjax中,调用一下就可以了,所以myAjax里面一行代码就搞定了转换的需求
function obj2str(obj) {
  if (!obj || typeof obj !== 'object') return

  // {
  //     name: 'zs',
  //     age: 18
  // }

  // 转成: name=zs&age=18

  let arr = []
  for (let key in obj) {
    arr.push(`${key}=${obj[key]}`)
  }

  return arr.join('&')
}

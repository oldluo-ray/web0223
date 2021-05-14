// 1. 函数名 取决于函数的作用,要见名知意
// 2. 如果这个函数传入的数据较多,一般超过三个,就应该以对象的形式传入(优点: 不需要记住传参的顺序,只需要直到的属性代表的内容就可以了)
function myAjax(options) {
  // 0. 先判断有没有传入对象
  // 如果没有传数据,直接return.这样就能提高性能
  // 如果判断的太复杂,真正要执行的业务代码还都没有写,就先进行了复杂的验证.其实也会影响性能. 所以一般要验证,但是不会验证的太复杂
  if (!options || typeof options !== 'object') return

  // 1. 一上来要把所有的属性都结构出来
  let {
    url,
    data,
    type = 'get',
    success,
    error,
    complete,
    beforeSend,
    timeout,
    dataType = 'json',
  } = options

  // 2. 判断url有没有传,没有就return
  if (!url) return

  // 3. 创建xhr对象
  const xhr = new XMLHttpRequest()

  // 设置超时时间
  xhr.timeout = timeout // 设置超时时间,单位是毫秒
  // 4. 将传入的data对象,转成键值对的字符串
  let paramStr = obj2str(data)
  // 5. 调用open方法
  // if (type === 'get') {
  //   xhr.open(type, url + '?' + paramStr)
  // } else {
  //   xhr.open(type, url)
  // }
  if (type === 'get') {
    url += '?' + paramStr //127.0.0.1:5000/xxx?username=zs
    paramStr = null
  }
  xhr.open(type, url)

  // 6. 设置请求头
  if (type === 'post')
    xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded')

  // 7. 设置请求主体并且发送请求
  // if (type === 'get') {
  //   xhr.send(null)
  // } else {
  //   xhr.send(paramStr)
  // }
  // 关于beforeSend:
  // 1. 如果beforeSend没有写,正常发送请求     undefined
  // 2. beforeSend写了,里面没有写return. 也是正常发送请求 undefined
  // 3. beforeSend写了,里面写了return true. 也是正常发送请求 true
  // 4. beforeSend写了,里面写了return false. 不发送请求 false
  const isSend = beforeSend && beforeSend()
  // 经过上面的分析,只有beforeSend中显式的返回了false,才不发请求,其他情况都发送请求
  if (isSend === false) return
  xhr.send(paramStr)

  // 8. 监听readyState的变化
  xhr.onreadystatechange = function () {
    //9. 判断是否完成
    if (xhr.readyState === 4) {
      complete && complete()
      //10. 判断是否成功
      if (xhr.status === 200) {
        // 表示成功
        //如果用户传入了success函数,才调用,否则就不调用
        // if (success) {
        //   success(xhr.responseText)
        // }
        // 如果没有写dataType,默认值就是json
        //如果dataType的值是json,那么将获取到的json字符串转成js对象
        //如果dataType的值是text,那么直接传入字符串就可以了
        let value
        if (dataType === 'json') {
          value = xhr.responseText
          value = JSON.parse(value)
        } else if (dataType === 'text') {
          value = xhr.responseText
        }
        success && success(value)
      } else {
        // 表示失败
        error && error(xhr)
      }
    }
  }
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

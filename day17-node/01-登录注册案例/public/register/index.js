// 对表单进行校验

// 1. 获取表单元素
const username = document.querySelector('input[name=username]')
const password = document.querySelector('input[name=password]')
const repassword = document.querySelector('input[name=repassword]')
const userSpan = document.querySelector('#tip-username')
const pswSpan = document.querySelector('#tip-password')
const repswSpan = document.querySelector('#tip-repassword')
const registerBtn = document.querySelector('input[type=submit]')
// 2. 给表单元素注册失去焦点的事件 blur
username.oninput = function (e) {
  // 3. 在事件处理函数中,获取用户输入的内容,然后进行校验
  const value = this.value.trim()
  if (!value) return
  // 4. 使用正则去校验(可以是数字,字符,下划线)8~16位
  let reg = /^\w{8,16}$/
  if (reg.test(value)) {
    // 说明符合要求
    userSpan.textContent = '输入正确'
    userSpan.style.color = 'green'
  } else {
    // 不符合要求
    // 说明符合要求
    userSpan.textContent = '输入错误'
    userSpan.style.color = 'red'
  }
}

password.oninput = function (e) {
  // 3. 在事件处理函数中,获取用户输入的内容,然后进行校验
  const value = this.value.trim()
  if (!value) return
  // 4. 使用正则去校验(字母,数字)8~16位
  let reg = /^[A-Z]+\w{7,15}$/
  if (reg.test(value)) {
    // 说明符合要求
    pswSpan.textContent = '输入正确'
    pswSpan.style.color = 'green'
  } else {
    // 不符合要求
    // 说明符合要求
    pswSpan.textContent = '输入错误'
    pswSpan.style.color = 'red'
  }
}
repassword.oninput = function (e) {
  // 3. 在事件处理函数中,获取用户输入的内容,然后进行校验
  const value = this.value.trim()
  if (!value) return

  if (value === password.value.trim()) {
    // 说明符合要求
    repswSpan.textContent = '输入正确'
    repswSpan.style.color = 'green'
  } else {
    // 不符合要求
    // 说明符合要求
    repswSpan.textContent = '输入错误'
    repswSpan.style.color = 'red'
  }
}

// 当点击登录按钮的时候,依然要校验两个输入框中的内容是否正确,如果都正确才可以将请求发送给服务器.
registerBtn.onclick = function (e) {
  // 先判断有没有style属性,如果没有style属性,就直接return. 后面的代码也没有必要执行
  // 两个里面只要有一个不行

  if (!userSpan.style.color || !pswSpan.style.color || !repswSpan.style.color)
    return e.preventDefault()
  //  !userSpan.style.color || !pswSpan.style.color ? return: null 注意: 三元运算符中不能写return

  //判断颜色.如果两个都是是green,就可以发送请请求,如果有一个不是,就不能发送请求
  if (
    !(
      userSpan.style.color === 'green' &&
      pswSpan.style.color === 'green' &&
      repswSpan.style.color === 'green'
    )
  )
    e.preventDefault()

  // userSpan.style
  // pswSpan
}

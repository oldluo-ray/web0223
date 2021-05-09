//#region
/*
* 中间件（middleWare）？
*   本质就是一个函数，有三个参数（request,response,next）
   app.use(中间件)
*
* 组成：
*   1.request对象
*   2.response对象
*   3.next函数
*
* 作用：
*   1)	执行任何代码。
    2)	修改请求和响应对象。
    3)	终结请求-响应循环。（当一个请求来到服务器的时候，服务器开始处理，终结本次请求）
    4)	调用（堆栈中的）下一个中间件。

  分类：
      1.应用级中间件
          --1.修改请求和响应对象  2.拦截非法请求
      2.第三方中间
          --不是express提供的，使我们自己下载的
          app.use(bodyParser.urlencoded({extended:true}))
      3.express内置中间件
          --express给我们提供的中间件
          --app.use(express.urlencoded({extended:true}))
          --app.use(express.static('public'))
      4.路由器中间件
          --后期在路由器章节详细解释


  备注：
      1.在服务器中，客户端的一个请求达到服务端后，服务器只会做出一次响应，做出响应以后，不可以再修改request，和response
      2.在express中，当你定义路由和中间件的时候，会把你定义的东西按照定义的顺序（代码的顺序）放在类似于数组的容器中
        当请求过来的时候，依次从类数组的容器中拿出进行匹配，一旦匹配成功交给当前的处理，后续的都失效。
      3.当一个请求到达express服务器时，不管经过多少次的加工，所有路由和中间件中的request以及response，都是对第一次的引用。
*
* */
//#endregion

const express = require('express')
const app = express()

////所有的中间件,都要在路由前使用
// express.urlencoded({ extended: true })返回一个新的函数,这个新的函数,才是真正的中间件.
// 这个中间件已经写好, 将post请求的数据解析成一个对象,然后添加给request.body
// app.use(express.urlencoded({ extended: true }))

// 第三方中间件 body-parser
// 1 下载 npm i body-parser
// 2 引入 const bodyParser = require('body-parser')
const bodyParser = require('body-parser')
// 3 使用 app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.urlencoded({ extended: true }))

//定义路由
app.get('/', (req, res) => {
  res.send('get-/')
})

// 路由中的回调函数,其实就是一个中间件
app.post('/abc', (req, res) => {
  // 其实默认情况下req对象并没有body属性. 之所以一直说使用body获取post上传的数据,是因为,开发中都是使用中间件,将上传的数据,进行解析.然后添加到了req的body属性上上
  console.log(req.body) //获取post请求上传上来的数据.默认拿不到
  res.send('post-/abc')
})

app.listen(5000, () => {
  console.log('成功')
})

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

//使用中间件,要写在路由的前面

// 应用级中间件(自定义中间件)
// app.use里面函数,就是一个中间件. app.use(中间件) 表示使用这个中间件
app.use((request, response, next) => {
  // 这个回调函数会在接收到任何请求的情况下调用
  // request就是请求对象
  // response就是响应对象
  // next就是下一个中间件
  console.log('执行了')
  request.a = 1
  response.a = 2
  next() //next其实就是这次请求,对应的那个路由的回调函数.
})

//定义路由
app.get('/', (req, res) => {
  res.send('get')
  // 注意: 路由中的中间件接收到的请求对象和响应对象,和前面的中间件中的请求/响应对象是一样的
  console.log(req.a)
  console.log(res.a)
})

// 路由中的回调函数,其实就是一个中间件
app.post('/', (req, res) => {
  res.send('post')
})

app.listen(5000, () => {
  console.log('成功')
})

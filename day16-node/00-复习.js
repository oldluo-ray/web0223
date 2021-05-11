/**
 1.  http协议

  http协议:规定了客户端和服务器之间交互信息的规则

  请求报文:
    请求首行 请求方式  url地址  http协议版本
        url地址: 协议://域名:端口号/路径?查询字符串#哈希值
    请求头
    请求空行
    请求主体 get请求没有请求主体,数据实际是在url中,查询字符串就是get请求上传的数据. post请求是,上传的数据,在请求主体中
    
  响应报文: 
    响应首行 
        状态码:  
            200 成功(2xx 都表示成功)
            301/302 重定向 304 缓存 (3xx 表示重定向)
            404 地址写错了 (4xx客户端错误)
            500 服务器内部错误 (5xx服务器错误)
    响应头

    响应空行
    响应主体
        服务器要发送给浏览器的数据


    get和post的区别: 
    1. get不安全,post相对安全
    2. get请求的数据会显示在地址栏, post不会
    3. 由于地址栏有大限限制,所以get请求上传的数据也是有限制的,但是post理论上没有

    get和post的使用场景:
    get主要用来请求数据, post主要用来上传数据


 2. express路由

    路由: 请求的地址和资源的一一对应关系 

    express路由属于后端路由: url地址和网络具体的资源的一一对应关系 


    app.get('路径',回调)
    app.post('路径',回调)

    请求对象的成员:
    
        request.query  获取查询字符串中的数据
        request.params 获取路由参数
                如何定义路由参数: 在定义路由的时候,定义路由参数 app.get/post('/路径/:参数名?',回调)
                如何传递数据参数: 发请求时的url地址中 协议://域名:端口号/路径/路由参数
        request.body 获取post请求上传的数据 
        request.get() 获取请求头的的信息


    响应对象的成员:

        response.send()  响应字符串
        response.download() 让客户端直接下载文件 可以传入相对和绝对路径
        response.sendFile() 只能传递绝对路径, 如果能识别则展示,否则下载
            path.resolve(__dirname,路径) 用来拼接绝对路径 
        response.redirect() 重定向
        response.set() 设置响应头
        response.get() 获取响应头的信息


 3. express中间件

        中间件是啥?  就是一个函数
        中间件的分类: 
            express内置中间件 
            应用级中间件(自定义)
            第三方(别人写的,需要下载)
            路由器中间件 


        app.use('路径',(request, response, next)=>{
            next表示下一个中间件
        })


        //实现静态资源服务器 
        app.use(express.static('静态资源所处的文件夹的路径'))

        // 处理post请求上传的数据: 
        app.use(express.urlencoded({extended: true}))



        express中间件事线性模式:所以要写中间件的时候,要注意顺序
        

        




 */

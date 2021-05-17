
1. 同源: 是浏览器的一个安全策略: 
     同源的的规则: 要求发送请求的地址和页面来源的地址的协议,域名,端口号完全一致才可以

     限制了: ajax 和 cookie

2. 跨域: 

     给不同源的地址发送ajax请求,就是跨域 

     解决跨域:  
        1. jsonp 
        2. cors(跨域资源共享)


        两者的相同点和不同点: 
        相同点: 
            1. 都需要后端配合
            2. 都用来解决跨域
        不同点: 
            1. jsonp没有兼容问题. cors 有兼容问题
            2. jsonp只能发送get请求, cors都可以 

        jsonp的原理: 
            利用script标签不受同源策略影响发送请求.定义一个函数,然后将这个函数,通过查询字符串,上传给服务器.服务器响应这个函数的调用.要响应的数据,就是函数调用的实参
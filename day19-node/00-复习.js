/*
    1. cookie和session的区别: 

        1. cookie是存储在浏览器中, session存储在服务器端

        2. cookie有限制, session理论上没有

        3. cookie不安全, session相对安全



    2. 利用cookie是如何解决http协议无状态的问题?

        1. 登录成功之后,服务器设置响应头,让浏览器往cookie中存储数据
        2. 浏览器接收到响应之后,根据响应头中的set-cookie.往cookie中存储数据
        3. 浏览器再次给服务器发请求(还是之前的那个服务器),会自动将cookie中的数据,添加到请求头中,发送给服务器
        4. 服务器接收cookie数据,进行验证 

        问题: 由于cookie存储到客户端(浏览器中),导致cookie数据,可以被任意的修改和窃取



    3. 利用cookie和sessoin是如何解决http协议无状态的

        1. 登录成功之后,服务器开启session.将用户的信息(用户的id),存储到sesion空间中
        2. 服务器开启一块空间存储指定的数据,这块空间有一个唯一标识符,就是sessionid 
        3. 让浏览器将sessionid存储到浏览器的cookie 
        4. 下次浏览器再次给这个服务器发送请求,会自动将cookie上传给服务器
        5. 服务器会根据上传上来的sessionid,去session空间中,查找对应的数据
        6. 如果找到数据,就表示登录成功,否则就表示没有登录/已经退出了 





    4. ajax的特点是什么? js中通过哪个对象来实现ajax


        特点: 
        1. 页面不会切换
        2. 异步发送请求
        3. 任何请求方式都可以


        使用: 
            XMLHttpRequest  xhr






*/

/*

    利用原生ajax发送请求的过程: 
    1. 创建xhr对象
        const xhr = new XMLHttpRequest()

    2. 设置请求首行的信息
        xhr.open(请求方式, url地址)
            如果是get请求,上传的参数应该拼接在url中(查询字符串)

    3. 设置请求头
        post请求才要设置请求头
        如果不设置也可以请求响应,但是服务器无法获取到数据
        xhr.setRequestHeader('content-type','application/x-www-form-urlencoded')

    4. 设置请求主体并且发送请求 
        xhr.send()
        get: 不写参数/null
        post: 数据是 '键=值&键=值' 这样的字符串


    5. 监听readyStated的变化
       xhr.onreadystatechange = function(){
           // 这个回调会被调用三次
           当readyState的值变成4的时候,表示响应完成了
           if(xhr.readyState === 4){
             // 完成不代表是成功,因为失败也是完成

             if(xhr.status === 200){
                //表示成功 

                //获取响应主体中的信息
                xhr.responseText 返回的一定是字符串

             }

           }
       }














*/

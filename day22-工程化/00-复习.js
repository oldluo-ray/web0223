/*
    前端发送请求的方式:

    1. 浏览器的地址栏 get  也会跳转页面
    2. form   get/post  同步的,会跳转页面
    3. script标签 实现jsonp跨域
    4. xhr 异步请求的方式
    5. $.ajax  就是对于xhr的封装 
    6. axios 也是对xhr的封装.但是支持promise (目前主流的使用方式)
         axios({
             method: 请求方式
             params: get请求上传数据的参数
             data: post或其他请求上传数据的参数
             url: 请求地址
         }) 
         执行完毕之后,返回一个promise. 请求成功promise成功,请求失败,promise失败
         axios中有其他的一些配置内容,后面会说 
    7. fetch es6+新增的发送请求的方式,支持promise(目前有兼容问题,所以暂时没有被广泛使用)






*/

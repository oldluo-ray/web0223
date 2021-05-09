/**

    1. mongoose如何使用

        下载 npm i mongoose 
        引入 const mongoose = require('mongoose')
        连接 mongoose.connect('mongodb://127.0.0.1:27017/数据库名') 返回一个promise.当连接成功,promise状态修改为成功 
        创建Schema   const Schema = mongoose.Schema  cosnt xxxSchema = new Schema({},{collectoin: 集合名})
        创建model对象 const xxxModel = mongoose.model('集合名', xxxSchema)

        create 
        find/findOne find返回数组 findOne返回一条数据,找不到就是null
        updateOne/updateMany 
        deleteOne/deleteMany

    2. node原生搭建服务器

            1. 引入包 const http = require('http')
            2. 创建服务器对象  const server = http.createServer((req, res)=>{})
            3. 开启服务器 server.listen(端口号,(err)=>{})

    3. express搭建服务器

            1. 下载 express   npm i express 
            2. 引入 express  const express = require('express')
            3. 创建应用对象   const app = express()
            4. 配置接收请求响应的代码(配置路由)
                app.get(路径, (req, res)=>{})
                app.post(路径, (req, res)=>{})
                接收get请求的数据,使用req.query 拿到上传上来的查询字符串的数据,直接就是一个对象
                响应: res.send(内容)
            5. 开启服务器
                app.listen(端口号, (err)=>{})

 */

/*

 1. 如何手动启动mongodb数据库? 
    配置了环境变量之后,在命令行窗口执行mongod  
 2. 如何验证mongodb数据库是否已经启动?
    可以在浏览器中输入127.0.0.1:27017按下回车键,如果展示了一行文字,表示mongodb正在正常运行,如果是404表示mongodb数据库没有启动成功
 
 3. 操作mongodb数据库的方式有哪些? 

     1. 命令行窗口的客户端(mongo) 

        show dbs  所有有数据的数据库
        use 数据库名 切换到指定数据库,如果没有会自动创建
        db  查看当前使用的数据库 
        CRUD(增删改查):
            db.集合名.insert(文档)
            db.集合名.find({查询条件},{投影}) 查询条件决定了查找到多少数据,投影决定了有多少信息
            db.集合名.find({age: {$gt: 18}},{age: 1, _id: 0}) 查找年龄大于18的数据,只看age信息

            db.集合名.update({查询条件}, {$set:{age:18}})
            db.集合名.remove({查询条件})
     2. GUI(可视化工具) bootster 
     3. mongoose(重要)

         使用: 
            1. 下载mongoose   npm i mongoose 
            2. 引入 const mongoose = require('mongoose')
            3. 连接数据库(注意: 连接成功之后,再操作数据库)
               await  mongoose.connect('mongodb://127.0.0.1:27017/数据库名')
            4. 创建Schema对象(对文档对象进行约束)
            const xxxSchema = new mongoose.Schema({
                属性名: {
                    type: 数据类型,
                    required: 必填
                    unique: 表示值是唯一的
                    default: 默认值
                }
            })

            5. 创建model对象 
                const xxxModel = mongoose.model('集合名', schema对象)
                注意: 如果集合名不带s.创建出来之后,会自动加一个s




*/

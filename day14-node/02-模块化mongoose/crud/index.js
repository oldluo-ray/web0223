;(async function () {
  // 具体增删改查的代码

  // 注意: 对数据库进行操作,要先保证数据库连接成功
  // 让db下的index.js执行以下,要引入就可以执行了
  const db = require('../db')

  await db
  console.log('数据连接成功')
  // 引入model对象
  // 注意: 如果要引入的文件路径是 model/index.js(文件夹里面是一个index.js文件)那么index.js可以忽略
  const userModel = require('../model')

  //添加一条数据
  // 所以的增删改查操作都是异步操作
  //   userModel.create(
  //     {
  //       name: '海静',
  //       age: 38,
  //     },
  //     () => {
  //       // 具体的增删改查
  //       userModel.find({}, {}, (err, data) => {
  //         if (err) console.log(err)
  //         else console.log(data)
  //       })
  //     }
  //   )

  // 所有的增删改查方法,如果不写回调函数,返回值是一个promise对象,操作成功之后,promise的状态就被修改为成功
  await userModel.create({
    name: 'haha',
    age: 18,
  })

  // find返回的promise,如果成功了,值就是查询到的数据
  const users = await userModel.find()
  console.log(users)
})()

// 1. cj项目
// 2. 初始化项目
// 3. 下载mongoose
// 4. 分成三个文件(连接数据库的文件, 创建model的文件, 增的文件)

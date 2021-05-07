// 插入数据
// db.users.insert({name: 'zs', age: 19, gender: '女'})
// db.users.insertOne({name: '海静', age: 38, gender: '男'})
// db.users.insertMany([{name: '沛华', age: 28, gender: '男'},{name: '彤彤', age: 48, gender: '女'}])

// 查看所有数据
// 查看当前集合中的所有数据
// db.users.find({查询条件},{投影}) // 查询条件,决定了查看到哪些数据, 投影决定了查找到的数据,展示哪些信息
// db.users.find() // 查看所有数据
// db.users.find({age: 18, gender: '男'}) // 年龄是18岁并且性别是男
// db.users.find({age: {$gt: 18}}) // 年龄大于18岁
// db.users.find({age: {$in: [38,48]}}) //找到年龄是38或48的数据
// db.users.find({$or:[{age: 38},{name: '沛华'}]}) 找到年龄是38,name是沛华的所有的 数据
// db.users.find({name: {$ne: '彤彤'}}) // 找到所有name不是彤彤的数据
// db.users.find({name: /^\w{2}$/}) // 找到姓名是字母并且姓名长度是2的数据(通过正则查看的)
// db.users.find({$where: function(){ // 如果返回true,则当前信息属于要查看的信息

//     return true

// }})
// db.users.find({},{age: 1}) // 只看所有新的age部分.默认_id一定会展示
// db.users.find({},{age:1, _id: 0}) // 只看age, _id也不看
// db.users.find({age: {$gt:38}}, {gender: 0}) // 只看年龄大于38的数据,但是数据中不查看性别的信息

// 修改
// db.集合.update({查询条件}, {$set: {要修改的属性}}, {multi: true})
// db.users.update({name: 'ls'},{$set: {gender: '未知'}}) // 修改一个
// db.users.update({age: 18},{$set: {gender: '刚成年'}}) //多个符合条件,但只修改第一个
// db.users.update({age: 18},{$set: {gender: '刚成年'}},{multi: true}) //多个符合条件,修改符合条件的所有信息

// 删除
// db.users.remove({ age: 18 })

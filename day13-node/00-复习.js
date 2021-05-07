/**
 * 1. npm需要安装吗?
 *
 *        安装了node,就自动安装了npm.不需要额外安装
 *
 * 2. 如何初始化一个包?
 *
 *          npm init
 *          包名的注意点: 1. 不能有中文 2. 不能有大写字母 3. 不能和其他的包名冲突
 *
 *          npm init -y  文件夹的名称默认就是包的名称
 *
 *
 *          package.json文件:
 *              name:  包名
 *              dependencies: 记录了当前项目在生产环境下依赖的第三方包
 *              devDependencies: 记录了当前项目在开发环境下依赖的第三方包
 *
 *          代码写完了,也测试完成了. 要打包项目, 生产环境的包会打包进去,开发环境的包不会
 *          node全局中有一个process对象,未来可以通过这个对象获取当前执行环境
 *
 * 3. 如何下载第三方包?
 *
 *          - 下载jquery,下载1.12.4版本 下载到生产环境下
 *
 *              npm i jquery@1.12.4
 *              npm i jquery@1.12.4 --save
 *              npm i jquery@1.12.4 -S
 *
 *          - 下载jquery 和 uniq ,但是jquery要下载指定版本,下载到生产环境下
 *              npm i jquery@x.x.x uniq
 *
 *          - 下载babel,要下载到开发环境下, 要下载最新版
 *
 *              npm i babel -D
 *              npm i babel --save-dev
 *
 *
 *          - 第一天进公司,从git上,把公司的代码下载下来,下载下来没有node_modules,需要下载所有的依赖包
 *
 *              在项目的根目录下面,执行npm i. 会自动下载所有的依赖项
 *
 *              package.json
 *              package-lock.json
 *
 *              优先根据package-lock.json下载,如果没有,才根据package.json下载.
 *
 *              package.json 和  package-lock.json的区别:
 *              1. package-lock.json 会下载指定版本. package.json下载最新版本
 *              2. package-lock.json里面记录的包的下载地址,所以相对下载更快一点
 *              3. package.json中记录当前项目中依赖的包. 而package-lock.json中记录了我们依赖的包所依赖的所有的包
 *
 *
 *
 *              - 什么是全局包,什么是本地包?
 *                  全局包是下载到电脑的c盘指定目录下的包(工具)
 *                  本地包是下载到当前项目的node_modules中的包(js库)
 *
 *                  npm i 包名 -g
 *
 *
 *
 *               - node_modules中有一个jquery包,想要在代码中使用jquery的$这个函数?
 *
 *
 *                  const $ = require('jquery')
 *
 *                  当我们引入(require('jquery'))的时候,是如何查找包的?
 *                  先从当前项目的根目录找node_modules,如果有,则进去找具体的包.如果没有,则沿着目录层级往上找,一直找到盘符的根目录.如果还没有就报错,说找不到指定包
 *
 *
 *
 *
 * 4. 如何移除第三方包?
 *
 *
 *              npm remove 包名
 *              npm r 包名
 *
 *              注意: 千万不要自己手动去node_modules中删除包
 *
 *
 *
 *
 * 5. 数据库的分类
 *
 *      关系型数据库 mySQL, Oracle
 *
 *             数据库
 *             表 (表和表之间有关系)
 *              字段
 *              数据行
 *
 *              sql语句对关系型数据库进行增删改查
 *
 *      非关系型数据 mongodb, redis  (nosql)
 *
 *              数据库
 *              集合
 *              文档(一条数据 json)
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 */

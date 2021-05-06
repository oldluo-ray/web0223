/*
* 1.什么是包？
*   你写的代码（你的项目），符合了一些规范之后，就能称之为包。
*
* 2.包的结构：
    1)	package.json 	描述文件--------------必不可少的！！！
    2)	bin 	可执行二进制文件
    3)	lib 	js代码
    4)	doc	文档
    5)	test	单元测试
    如何创建一个属于自己的包？使用命令：npm init
    包名：不能使用中文、不能包含大写字母, 不能和其他的包重名
    package-lock.json:用于缓存已经下载过的包的下载地址，使下一次下载安装时速度更快（缓存文件）


  3.npm与node是什么关系？
     安装node之后，自动默认安装了一个npm包管理器

  4.npm常用的命令：
     
      一、安装：

            1.npm install xxx --save 或 npm i xxxx -S  或 npm i xxx
            （下载并安装xxx包到当前工程的node_modules文件夹中，并且将该包写入包说明文件（pacjage.json），并添加到生产依赖（dependencies）中）

            2.npm install xxx --save-dev 或 npm i xxxx -D
            （下载并安装xxx包到当前工程的node_modules文件夹中，并且将该包写入包说明文件（pacjage.json），并添加到开发依赖（devDependencies中）

            3.npm install 或 npm i
            （安装所有在package.json或package-lock.json中声明的包）
            如果有package-lock.json 优先按照这个文件中的包和指定版本去下载(一定是指定版本)
            如果没有package-lock.json 那就按照package.json这个文件中的的描述信息去下载指定的包和指定包的最新版本(比package-lock.json慢)

            4.npm install xxxxx@1.2.3 :安装xxxx包的指定版本

            5.npm install xxx@1.0.0 yyy zzz 可以同时下载多个包

            5.npm install xxxx -g:全局安装xxxx包（一般来说有指令的包，要进行全局安装，全局安装之后的包，在任意位置都能使用） C:\Users\username\AppData\Roaming\npm\node_modules

            全局包: 指工具.不是开发中使用的js代码 
            本地包: 指别人写好的js, 要在代码中使用(项目中的node_modules)

      二、移除：

            1.npm remove xxx
            （从当前的工程，移除指定的包）注意:千万不要再node_modules中手动移除



      开发环境: 代码还没有写完,还处于开发的状态. 要使用的包记录到devDependencies中
      生产环境: 代码已经写完,并且测试完毕,已经开发上线使用了. 要使用的包记录在dependencies中
* */

// 1. 引入要使用的第三方的包
// 注意:当引入第三方包的时候,会自动去当前项目的根目录找node_modules,找到了,就进去找uniq包,然后找到对应的js文件,去执行,并且返回导出的内容.如果当前目录下没有node_modules.就沿着目录层级一直往上找,直接当前盘符的根目录.如果还没有就报错,报错信息就是找到指定包
const uniq = require('uniq')

let arr = [1, 1, 4, 4, 5, 6, 1, 2, 5]

let newArr = uniq(arr)

console.log(newArr)

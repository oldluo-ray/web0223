响应式
主要就是写一套页面, 可以适配pc端和移动端
响应式原理: 
    1. 手机(小于768)  平板(768~992)  普通pc(992~1200)  超大pc(大于1200)
    2. 媒体查询,查看当前设备的尺寸(宽度),根据不同的尺寸设置不同的样式
        @media and screen (min-width: px值){样式}

bootstrap 是一个响应式框架 

    容器 
        .container(自带内边距 有一个版心的效果) .container-fluid (占满整个屏幕)
    栅格系统 
        // 有一个盒子在平板上占6份 col-sm-6 
        // 手机: xs 
        // 平板: sm 
        // 普通pc: md 
        // 超大屏幕: lg 
        // 栅格系统把一行分成12份 

        注意: 栅格系统在使用的时候: 一定要包裹在容器中,而且要使用.row来表示一行

    响应式工具: 
        控制盒子的展示和隐藏: 

        // 展示: visible-尺寸-block  
        // 隐藏: hidden-尺寸

es6: 
    es5+: 
        1. 严格模式: js不是一个特别规范的语言,但是在开发中希望开发者书写代码时更加规范.所以要使用严格模式. 'use strict' 开启严格模式 要写在第一行
        2. json(重要)
            json是一个javascript object notation. 
            作用: 1. 存储数据(xxx.json) 2. 数据交互(服务器和客户端之间交互)

            需求1: 要把json格式的字符串转成js对象
            JSON.parse(json格式的字符串) 返回一个js对象 
            需求2: 把json对象转成json字符串 
            JSON.stringify(json对象) 返回一个字符串

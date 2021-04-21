1. 操作属性
    attr  可以操作所有的属性,如果是disabled这种返回的是字符串
    prop 主要用于属性的值是布尔值的属性 返回的结果是true/false 

    都可以进行设置和获取

    设置 attr/prop({
        属性: 值
    })

    获取 attr/prop('属性名')


2. 操作标签内容 

    获取内容,要识别html html()
    获取内容,只获取文本 text()
    获取内容,表单项的值 val()

    设置 html('字符串')/text('字符串')/val('字符串')

3. 操作尺寸
     width()/height() content
     innerWidth()/innerHeight()  content + padding
     outerWidth()/outerHeight()  content + padding + border 
     outerWidth(true)/outerHeight(true) content + padding + border + margin
     
4. 操作坐标

     offset 获取到元素相对于文档的坐标 {left: 值, top:值} 设置 offset({left: 值, top: 值})
     position 相对于离的最近的定位父元素 只能获取,不能设置
     scrollLeft  元素内容左侧滚动出去的距离  设置 scrollLeft(值)
     scrollTop   元素内容顶部滚动出去的距离  设置 scrollTop(值)

5. jquery注册事件

    基础: click(cb)/mouseenter(cb)/keyup()

    推荐方式: on('事件名 事件名 事件名'[, 选择器][, 传入到处理函数的数据], 事件处理函数)
    注意点: 1. 选择器和传入事件处理函数的数据是可选的
            2. 如果写了选择器,就是事件委托 
            3. 第三个参数,使用e.data接收
    
    假如: div#far>div#son+p 
    需求: 事件委托,只允许son可以触发这个事件 
    $('#far').on('click','#son', function(){})
    $('#far').on('click', function(){}) //只给far注册点击事件 

    移除事件: off() 
    off() 移除所有事件
    off('事件名') 移除指定事件
    off('事件名', '**') 移除事件委托

6. 触发事件 
     click() 触发click事件,会冒泡
     trigger() 触发指定的一个事件, 会冒泡
     triggerHandler() 触发指定的一个事件,不会冒泡
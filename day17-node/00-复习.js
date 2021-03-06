/*

    正则的创建:

        校验邮箱: 
        /\w+@\w+\.(com|cn)/gi 
        new RegExp(正则规则, 参数)

    正则的操作: 
        匹配: 正则对象.test(字符串)
        提取: 字符串.match(正则)
        替换: 字符串.replace(正则, 替换的字符)

    正则的特殊字符:

        元字符:  \s \d \w \S \D \W  .  ^ $
        限制符:  ? * + {n} {n, } {n,m}
        其他的特殊字符: [A-Za-z] [^A-Za-z] /^a|bc$/ /^a(e|b)c$/ /^\.$/ 



*/

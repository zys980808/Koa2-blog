# 剑龙迭代

## Koa-blog

[Github](https://github.com/zys980808/Koa2-blog)

## npm

- 安装并添加到依赖 ```npm install [pkgname] --save```
- 安装并添加到开发依赖 ```npm install [pkgname] --save-dev```
- 安装指定版本的包 ```npm install [pkgname@version]```
- 
- 淘宝镜像
```
$ npm install -g cnpm --registry=https://registry.npm.taobao.org
$ cnpm install [name]
```

## mysql 

- Ubuntu上配置 [链接](https://www.cnblogs.com/zhuyp1015/p/3561470.html)
- 没有设置密码的环节？
- [SQL语法](http://www.w3school.com.cn/sql/sql_syntax.asp) 
- 编码问题：
```
Illegal mix of collations (latin1_swedish_ci,IMPLICIT) and (utf8_general_ci,COERCIBLE) for operation '='
```
[解决方法](https://blog.csdn.net/hotlinhao/article/details/9048803)
## node

- 更新软件树 
```sudo apt-get install```

## es6
- [学习链接](http://es6.ruanyifeng.com/#docs/let)
- lambda?
- promise、async await?
- =>
## nodejs 

- 异步
- SetTimeOut 模拟异步，async 有什么用？
- [学习连接](https://www.cnblogs.com/chrischjh/p/4667713.html)

```Javascript
var b = function(afunc){
    console.log("同步")
    afunc()
}

var a = function(){
    setTimeout(function(){
        console.log("不好")
    },0);
}

b(a)
console.log("test")
```

```Javascript
const fs = require('fs')

var a = function(){
    console.log("1")
    for(var i = 0; i < 3; ++i){
        console.log("loop beigin")
        fs.open('test.txt','r',(err,fd)=>{

            if(err){
                console.log("丢你")
            }else{
                console.log(fd)
            }
        })
        console.log("loop end")
    }
}

a()
console.log("outside")
```

- JS 单线程-伪高并发的例子
```Javascript
const fs = require('fs')

var a = function(){
    console.log("1")
    for(var i = 0; i < 3; ++i){
        console.log("loop beigin")
        fs.open('test.txt','r',(err,fd)=>{

            if(err){
                console.log("丢你")
            }else{
                console.log(fd)
            }
        })
        console.log("loop end")
    }
}

a()
console.log("outside")
while(true){
    
}
```

# 其他

## cmder - github

## ssh 传文件 - scp 命令 （文件夹-r)

## ssh 连接电脑

- 端口转发
- 钟文谦

## pm2

后台挂载项目
```
npm install -g pm2
```

## 后续学习

- Javascript异步，ES6认真学

- Vue 玩具项目 [github](https://github.com/bailicangdu/vue2-happyfri)

- Vue-Webpack 打造 Todo 应用
[慕课](https://www.imooc.com/learn/935)
[Youtube](https://www.youtube.com/watch?v=5MHnvXD4VIY&list=PLGNVlSJ5fH_UAYjoyIKOcyjxNEIav4o0E)
[Github](https://github.com/niuyi1017/imooc/tree/master/vue-webpack-todo)

- Vue + express + Mongodb 饿了么
[总](https://github.com/bailicangdu/node-elm)
[前端](https://github.com/bailicangdu/vue2-elm)
[后台](https://github.com/bailicangdu/vue2-manage)

# 项目介绍
 使用到的库：
>* bootstrap
>* jquery
>* angular.js




集成 [angular-ui/bootstrap](https://github.com/angular-ui/bootstrap) （angular对bootstrap组件的封装）
>* github:  https://github.com/angular-ui/bootstrap
>* 使用手册：[http://angular-ui.github.io/bootstrap/](http://angular-ui.github.io/bootstrap/)


<!-- 网络请求进行了简单的封装 -->
```javascript
// 提示 
//successDo回调只有一个参数，alwaysDo回调两个参数，第一个参数来标示进入success还是error
//如果值需要处理正确可以只用successDo,如果还需要单独处理错误可以添加errorDo方法，如果需要同时处理正确和错误方法，可以放到alwaysDo中（如果用到了alwaysDo就没有必要再用successDo和errorDo了，因为alwaysDo的第一个参数就一个可以判断了）

httpBase.get({
    url: '/api/users/login',
    params: params,
    successDo: function(data){
        console.log(data);
    },
    errorDo: function(data){
        console.log(data);
    },
    alwaysDo: function(isErr,data){
        if(!isErr){
            console.log(data); // 这里的datasuccessDo中的data一样
        }else{
            console.log(data); // 这里的data和errorDo中的data一样
        }
    }
});
```
require.config({
    baseUrl: 'js',
    paths: {
        angular: "./lib/angular/angular.min",
        "angular-route": "./lib/angular-ui-router/angular-ui-router.min",
        jquery: "./lib/jquery/jquery.min",
        app: './app',
        routes: './routes',
        testController: './controllers/testController',
        controllers: './controllers/controllers'
    },
    //这个配置是你在引入依赖的时候的包名
    shim:{
        "angular":{
            exports:"angular"
        },
        "angular-route": {
            deps: ["angular"],
            exports: 'angular-route'
        }
    },
    // deps：['jquery']，就是告诉我们要先加载jquery.min.js文件。
    deps:['jquery'],
    urlArgs: "bust=" + (new Date()).getTime()  //防止读取缓存，调试用
});

// 这里依赖于app.js和router.js jquery.js
require(['angular',  'angular-route', 'jquery', 'app', 'routes'], function (angular) {
    console.log('_main');
    angular.element(document).ready(function () {
        angular.bootstrap(document, ['app']);
        // angular.element(document).find('html').addClass('ng-app');
    });
});
define(["app"], function (app) {
    return app.run(function () {
        console.log('run');
    }).config(["$stateProvider", "$urlRouterProvider", "$locationProvider", "$uiViewScrollProvider", function($stateProvider, $urlRouterProvider, $locationProvider, $uiViewScrollProvider){
        console.log('config');
        //用于改变state时跳至顶部
        $uiViewScrollProvider.useAnchorScroll();
        // 默认进入先重定向
        $stateProvider.state('test', {
            url:'/test',
            templateUrl:'test.html',
            controller:'testController'
        });
        $urlRouterProvider.otherwise('/test');
    }])
});


// var routes = angular.module('routes', ['ui.router']);
// routes.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
// 	console.log('111');
//     $stateProvider.state('test', {
//         url:'/test',
//         templateUrl:'test.html',
//         controller:'testController'
//     });
//      $urlRouterProvider.otherwise('/test');
// }]);
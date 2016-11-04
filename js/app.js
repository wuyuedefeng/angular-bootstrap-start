define(["angular", 'mainController'],function(angular){
    console.log('app');
    return angular.module("app",['ui.router', 'app.controllers']);
});


// var app = angular.module('myApp', ['ui.bootstrap', 'routes', 'controllers', 'filters']);
// app.run(['$rootScope', function($rootScope){
//
// }]);
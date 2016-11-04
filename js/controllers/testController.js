define(['controllers', 'jquery'],function(controllers, $){
    'use strict';
     controllers.controller('testController',function($scope){
        //控制器的具体js代码
        console.log(123);
        $scope.test = 123;
        console.log($scope.test);
    });
});
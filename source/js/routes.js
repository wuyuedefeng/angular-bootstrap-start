var routes = angular.module('routes', ['ui.router', "oc.lazyLoad"]);
routes.config(['$stateProvider', '$urlRouterProvider', '$ocLazyLoadProvider', function($stateProvider, $urlRouterProvider, $ocLazyLoadProvider){
	console.log('111');
    $stateProvider.state('test', {
        url:'/test',
        views:{
            "":{
                templateUrl:"views/test.html",
                controller:"testCtrl",
                controllerAs:"testCtrl"
            }
        },
        resolve:{
            deps: ['$ocLazyLoad', function($ocLazyLoad) {
                return $ocLazyLoad.load('js/controllers/testCtrl.js');
            }]
        }
    });
     $urlRouterProvider.otherwise('/test');
}]);
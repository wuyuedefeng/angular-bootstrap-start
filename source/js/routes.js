var routes = angular.module('routes', ['ui.router']);
routes.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
	console.log('111');
    $stateProvider.state('test', {
        url:'/test',
        templateUrl:'test.html',
        controller:'testController'
    });
     $urlRouterProvider.otherwise('/test');
}]);
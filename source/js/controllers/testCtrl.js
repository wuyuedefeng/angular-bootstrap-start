angular.module('myApp', [[ // you don't even need to set the name of the module that you want to lazy load !
    // 'bower_components/angular-ui-grid/ui-grid.js',
    // 'bower_components/angular-ui-grid/ui-grid.css'
    ]])
    .controller('testCtrl',['$scope', function($scope) {
        $scope.test = 'abc';
    }])
    .config(function() {
        console.warn('config gridModule');
    }).config(['$ocLazyLoadProvider', function($ocLazyLoadProvider) {
        console.warn('config 2 gridModule');
    }]).run(function() {
        console.warn('run gridModule');
    });
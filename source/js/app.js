var app = angular.module('myApp', ['routes'])
    .config(['$ocLazyLoadProvider', function($ocLazyLoadProvider) {
        $ocLazyLoadProvider.config({
            debug: true,
            events: true,
            modules: [{
                name: 'directives',
                files: ['modules/directives.js']
            },{
                name: 'filters',
                files: ['modules/filters.js']
            }, {
                name: 'services',
                files: ['modules/services.js']
            }]
        });
    }]);
app.run(['$rootScope', function($rootScope){

}]);
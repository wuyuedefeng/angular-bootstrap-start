var controllers = angular.module('controllers', ['services', 'directives']);
controllers.controller('testController', ['$scope', 'orderHttp', function($scope, orderHttp){
	 $scope.alerts = [
	    { type: 'danger', msg: 'Oh snap! Change a few things up and try submitting again.' },
	    { type: 'success', msg: 'Well done! You successfully read this important alert message.' }
	  ];
	
	  $scope.addAlert = function() {
	    $scope.alerts.push({msg: 'Another alert!'});
	  };
	
	  $scope.closeAlert = function(index) {
	    $scope.alerts.splice(index, 1);
	  };

    //params:{}, successDo, errorDo
	orderHttp.get_test({a:1, b:2}, function(dataObj){
		console.log(dataObj);
	}, function(errorObj){
		console.log(errorObj);
	})
}]);
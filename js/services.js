var services = angular.module('services', []);
//公共服务,处理网络请求异常或者程序异常等等情况
// params{result, status, headers, congfig, paramsObj}
services.factory("handleHttpError",["$timeout",function($timeout){
    return {
        deal_app_error: function(params) {
            if (!params.result || !params.result.success) {
                console.log(params.result || params.params.result.msg);
                params && params["paramsObj"] && (params["error_code"] = "app_error") && params["paramsObj"]["errorDo"](params);
                return false;
            }
            return true;
        },
        deal_network_error: function(params){
            console.log("错误码:"+status);
            params && params["paramsObj"] && (params["error_code"] = "network_error") && params["paramsObj"]["errorDo"](params);
            return false;
        }
    }
}]);

// paramsObj {url: '/', params:{a:1, b:1}, successDo:function(handleResult), errorDo:(handleResult)   }
services.factory('httpBase', ['$http', 'handleHttpError', function($http, handleHttpError){
    return{
        get: function(paramsObj){
            $http({
                method:'GET',
                url: paramsObj.url,
                params: paramsObj.params
            }).success(function(result,status,headers,congfig){
                var handleResult = {result: result,status: status,headers: headers,congfig:congfig, paramsObj:paramsObj};
                if(handleHttpError.deal_app_error(handleResult)){
                    paramsObj["successDo"] && paramsObj["successDo"](handleResult);
                }
            }).error(function(result,status,headers,congfig){
                handleHttpError.deal_network_error({result: result,status: status,headers: headers,congfig:congfig, paramsObj:paramsObj});
            })
        },

        post: function(paramsObj, url, params, successFunc, errorFunc, alwaysFunc){
            $http({
                method:'POST',
                url: paramsObj.url,
                data: paramsObj.params
            }).success(function(result){
                var handleResult = {result: result,status: status,headers: headers,congfig:congfig, paramsObj:paramsObj};
                if(handleHttpError.deal_app_error(handleResult)){
                    paramsObj["successDo"] && paramsObj["successDo"](handleResult);
                }
            }).error(function(result,status,headers,congfig){
                handleHttpError.deal_network_error({result: result,status: status,headers: headers,congfig:congfig, paramsObj:paramsObj});
            })
        },
        put: function(paramsObj){
            $http({
                method:'PUT',
                url: paramsObj.url,
                data: paramsObj.params
            }).success(function(result){
                var handleResult = {result: result,status: status,headers: headers,congfig:congfig, paramsObj:paramsObj};
                if(handleHttpError.deal_app_error(handleResult)){
                    paramsObj["successDo"] && paramsObj["successDo"](handleResult);
                }
            }).error(function(result,status,headers,congfig){
                handleHttpError.deal_network_error({result: result,status: status,headers: headers,congfig:congfig, paramsObj:paramsObj});
            })
        }
    }
}]);

// custom orderHttp demo
services.factory('orderHttp', ['httpBase', function(httpBase){
    return {
        get_test: function(successDo, errorDo){
            httpBase.get({
                url: '/api/orders/list',
                params: {a: 1, b: 2},
                successDo: successDo,
                errorDo: errorDo
            });
        }
    }
}]);
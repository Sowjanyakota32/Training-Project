/**
 * Created by lenovo on 18-01-17.
 */
(function() {
    'use strict';

    angular
        .module('myshoppingcart.home')
        .factory("homefactory", ['$http',function($http){
            var obj = {};
            obj.Details = function(){
            return $http.get('app.json');
            }
        return obj;
    }])
}());

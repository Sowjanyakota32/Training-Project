/**
 * Created by lenovo on 27-01-17.
 */
(function() {
    'use strict';

    angular.module('myshoppingcart.view')
        .service('viewservice' ,viewservice );

    viewservice.$inject = ['$rootScope','$stateParams'];

    function viewservice($rootScope ,$stateParams ) {

        var vm = this;
        return {
            top : function() {
                for (var i = 0; i < $rootScope.userDetail.length; i++) {

                    if (($rootScope.userDetail[i].name == $stateParams.name)) {
                        console.log("name   "+$rootScope.userDetail[i].name)
                        console.log("name1   "+$stateParams.name)
                        console.log("items   " + $rootScope.userDetail[i] )
                        return $rootScope.userDetail[i];
                    }
                }

            }
        };

    }



}());
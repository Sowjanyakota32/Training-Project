/**
 * Created by lenovo on 27-01-17.
 */
(function() {
    'use strict';

    angular.module('myshoppingcart.view')
        .service('similarproducts' , similarproducts);

    similarproducts.$inject = ['$rootScope','$stateParams'];

    function similarproducts($rootScope ,$stateParams ) {
        var vm = this;
        var list = [];
        console.log("hello sowji")
        return {

            similar : function() {
                for(var i = 0 ; i < $rootScope.userDetail.length ; i++){
                    if(($rootScope.userDetail[i].type == $stateParams.type) &&
                        ($rootScope.userDetail[i].name != $stateParams.name)&&
                        ($rootScope.userDetail[i].subType == $stateParams.subtype) ) {
                        console.log($rootScope.userDetail[i].subType + "   subtype1")
                        console.log($stateParams.subtype + "          subtype2")
                        vm.type = $rootScope.userDetail[i];
                        list.push(vm.type);


                    }
                }

                return list;

            }

        };

    }
}());
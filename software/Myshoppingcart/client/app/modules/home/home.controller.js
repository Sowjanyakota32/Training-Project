/**
 * Created by lenovo on 17-01-17.
 */
(function(){
    'use strict';
    angular
        .module('myshoppingcart.home')
        .controller('homeController', homeController);
        //.directive('myCustomUrl',myCustomUrl);


    homeController.$inject = ['homeservice','$rootScope'];
    function homeController(homeservice , rootScope) {
        var vm = this;
        homeservice.news().then(function (data) {
            rootScope.userDetail = data;

        });
        vm.select = function(lettertyped) {
            if(lettertyped.length > 2) {
                vm.limit = 500;
            }
            else {
                vm.limit = 0;
            }
        }


        vm.onSelected = function($item) {
            console.log("hi hello")
            //$state.go('root');

        }
    }

    //function myCustomUrl() {
    //    return {
    //        templateUrl : '/app/partials/home.html'
    //
    //    };
    //}





}());


/**
 * Created by lenovo on 27-01-17.
 */
(function() {
    'use strict';

    angular.module("myshoppingcart.home.directive")
        .directive('topProductDirective' ,topProductDirective);


    function topProductDirective() {
        console.log("sfkjmknkm")

        return {
            restrict : "E",
            templateUrl : '/app/partials/display.html'
        };
    }
}());


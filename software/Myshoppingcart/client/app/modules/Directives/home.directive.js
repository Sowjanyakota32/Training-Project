/**
 * Created by lenovo on 27-01-17.
 */
(function() {
    'use strict';

    angular.module("myshoppingcart.home.directive")
        .directive('myHomeDirective' ,myHomeDirective);


    function myHomeDirective() {
        console.log("sfkjmknkm")

        return {
            restrict : "E",
            templateUrl : '/app/partials/home.html'
        };
    }
}());


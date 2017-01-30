(function() {
    'use strict';
    angular
        .module("myshoppingcart" ,[
            "ui.router" ,"ui.select",
            "myshoppingcart.home",
            "myshoppingcart.view",
            "myshoppingcart.search",
            "myshoppingcart.home.directive"

        ])
}());
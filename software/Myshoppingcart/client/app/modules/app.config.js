(function(){
    "use strict";
    angular
        .module("myshoppingcart")
        .config(appConfig);
    appConfig.$inject = ['$stateProvider', '$urlRouterProvider' , '$locationProvider'];

    function appConfig(stateprovider , urlprovider , locationprovider) {
        locationprovider.html5Mode(true);

        stateprovider
            .state('home' , {
                url: '/home',
                controller : 'homeController',
                controllerAs: 'hc',
                templateUrl: '/app/partials/electronics.html'
            })

            .state('books' , {
                url: '/books',
                controller : 'homecontroller',
                controllerAs: 'hc',
                templateUrl: '/app/partials/books.html'
            })


        urlprovider.otherwise('/');
    }
}());
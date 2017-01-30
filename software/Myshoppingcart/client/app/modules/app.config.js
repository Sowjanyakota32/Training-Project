(function(){
    "use strict";
    angular
        .module("myshoppingcart")
        .config(appConfig);
    appConfig.$inject = ['$stateProvider', '$urlRouterProvider' , '$locationProvider'];

    function appConfig(stateprovider , urlprovider , locationprovider) {
        locationprovider.html5Mode(true);
        locationprovider.hashPrefix("!");

        stateprovider

            .state('display', {
                url: '/',
                templateUrl: '/app/partials/mobiles.html'
            })
            .state('imageurl' , {
                url: '/one:name',
                controller : 'viewcontroller',
                controllerAs: 'vc',
                params: { type: { value: -1 } ,subtype : {value : -1}},
                templateUrl: '/app/partials/view.html'

            })

            .state('mobile' , {
                url: '/mobiles',
                controller : 'searchcontroller',
                controllerAs: 'sc',
                templateUrl: '/app/partials/search.html'
            })
            .state('laptops' , {
                url: '/laptops',
                controller : 'searchcontroller',
                controllerAs: 'sc',
                templateUrl: '/app/partials/laptops.html'
            })
            .state('books' , {
                url: '/books',
                controller : 'searchcontroller',
                controllerAs: 'sc',
                templateUrl: '/app/partials/books.html'
            });


        urlprovider.otherwise('/');
    }
}());

/*
 <my-home-directive></my-home-directive>
 <top-product-directive></top-product-directive>
*/
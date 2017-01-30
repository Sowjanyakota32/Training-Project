/**
 * Created by lenovo on 18-01-17.
 */
(function() {
    'use strict';

    angular
        .module('myshoppingcart.home')
        .service('homeservice', ['$http',
            function($http) {
                this.news = function() {
                    return $http.get('app.json', {
                        //cache: true
                    }).then(function(res) {

                        return res.data;

                    });
                }
            }
        ])
}());

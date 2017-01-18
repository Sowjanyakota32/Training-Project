/**
 * Created by lenovo on 17-01-17.
 */
(function(){
    'use strict';
    angular
        .module('myshoppingcart.home')
        .controller('homeController', homeController)
        .controller('uiselectcontr',uiselectcontr);

    homeController.$inject = ['homefactory'];
    function homeController(homefactory) {
        console.log("hjggggggggggggg")
        var v = this;
        homefactory.Details().success(function(response){
            v.userDetail = response;
        });
    }

    //function  uiselectcontr(){
    //    vm = this;
    //    vm.isLoaded = false;
    //    vm.values = [{
    //        'key': 22,
    //        'value': 'Kevin'
    //    }, {
    //        'key': 24,
    //        'value': 'Fiona'
    //    }];
    //    vm.selected;
    //}


}());


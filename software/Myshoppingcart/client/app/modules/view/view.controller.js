/**
 * Created by lenovo on 19-01-17.
 */

(function() {
    angular.module("myshoppingcart.view")
        .controller("viewcontroller", viewcontroller)
        //.service("viewservice" , viewservice)
        .filter("viewfilter" , viewfilter);
    viewcontroller.$inject = ['viewservice','similarproducts'];
    console.log("in ctlr");
    function viewcontroller(viewservice,similarproducts ) {

        var vm = this;
        vm.k = viewservice.top();
        vm.productdetails = similarproducts.similar();
        vm.current = 0;
        vm.size = 5;

    }

    function viewfilter() {
        return function(input, start) {

            console.log("input  "+input)
            console.log("start  "+start)
            start = +start; //parse to int
            return input.slice(start);
        }
    }

     /*
        rootScope.[is/do]show

    */






}());



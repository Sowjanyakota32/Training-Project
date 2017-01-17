/**
 * Created by lenovo on 17-01-17.
 */
(function(){

    angular
        .module('myshoppingcart.home')
        .controller('homeController', homeController);

    function homeController() {
        var vm = this;
        console.log("In controller");
        vm.welcomeTxt = "I'm in home page";
    }
}());
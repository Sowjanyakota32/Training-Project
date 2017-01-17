(function(){

    angular
        .module('myshoppingcart.home')
        .controller('homecontroller', homeController);

    function homeController() {
        var vm = this;
        vm.welcomeTxt = "I'm in home page";
    }
}());
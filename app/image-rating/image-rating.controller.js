(function() {
    'use strict';
    angular
    	.module('myApp')
    	.controller('ImageRatingController', ImageRatingController);

    ImageRatingController.$inject = ['$rootScope', '$http', '$scope', 'imageService', '$timeout'];

    function ImageRatingController($rootScope, $http, $scope, imageService, $timeout) {

        //setting up bindable variables

        var vm = this;
        vm.title = 'ImageRatingController';
        vm.currentImage = '';
        vm.empty = '';

        vm.currentImageIndex = 0; 
        vm.images = [];
        vm.disabled = false;
        vm.imageAmount;

        vm.checkEmpty = checkEmpty;
        vm.nextImage = nextImage;
        vm.previousImage = previousImage;

        activate();

        $timeout(function(){
            vm.imageAmount = vm.images.length;
            if(!vm.checkEmpty()) {
                vm.currentImage = vm.images[vm.currentImageIndex].title;
            } 
        }, 2000);

        function activate() {
            return imageService.getImages().then(function(data) {
                vm.images = data;
            });
        }

        function checkEmpty() {
            var isEmpty = false;
            console.log(vm.imageAmount);
            if (vm.imageAmount == 0) {
                vm.empty = "No images left in que!";
                isEmpty = true;
            }
            return isEmpty;
        }

        function nextImage() {

            vm.currentImageIndex++;
            vm.currentImage = vm.images[vm.currentImageIndex].title;
            vm.imageAmount--;
        }

        function previousImage() {
            vm.currentImageIndex--;
            vm.currentImage = vm.images[vm.currentImageIndex].title;    
        }
    }

})();

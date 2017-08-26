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

        vm.isEmpty = isEmpty;
        vm.nextImage = nextImage;
        vm.previousImage = previousImage;

        vm.count = 55;

        activate();

        function activate() {
            return imageService.getImages().then(function(data) {
                vm.images = data;
                vm.imageAmount = vm.images.length;
                $timeout(function(){
                    if(!vm.isEmpty()) {
                        vm.currentImage = vm.images[vm.currentImageIndex].title;
                    } 
                }, 2000);
            });
        }

        function isEmpty() {
            var isEmpty = false;
            if (vm.imageAmount <= 1) {
                vm.empty = "No images left in que!";
                isEmpty = true;
            }
            return isEmpty;
        }

        function submitEntry() {
            
        }

        function nextImage() {
            if (!isEmpty()) {
                vm.currentImageIndex++;
                vm.currentImage = vm.images[vm.currentImageIndex].title;
                vm.imageAmount--;
            }
        }

        function previousImage() {
            vm.currentImageIndex--;
            vm.currentImage = vm.images[vm.currentImageIndex].title;    
        }
    }

})();

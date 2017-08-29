(function() {
    'use strict';

    angular
        .module('myApp')
        .service('imageService', imageService);

    imageService.$inject = ['$http'];

    function imageService($http) {

        var vm = this;
        vm.getImages = getImages;
        vm.gallery = [];

        ////////////////

        function getImages() {
            //STEP 2: ask data service for data, wait for promise
        	return $http.get('data/gallery.json').then( function successCallback(response) {
                //STEP 3: set data, resolve promise
               vm.gallery = response.data.gallery
               return response.data.gallery;
            }, function errorCallback(response) {
               return response;
            });;
        }

        function saveComment() {
            return $http.post('data/feedback.json').then (function successCallback(response) {
                
            });
        }
    }

})();
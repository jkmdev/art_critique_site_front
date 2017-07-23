(function() {
    'use strict';

    angular
        .module('myApp')
        .directive('imgRating', imgRating);

    //directive.$inject = ['dependencies'];

    function imgRating() {

        var directive = {
            bindToController: true,
            templateUrl: 'image-rating/rating.directive.html',
            controller: 'ImageRatingController',
            controllerAs: 'vm',
            link: link,
            restrict: 'E',
            scope: {
            	max: '='
            }
        };

        return directive;

        function link(scope, element, attrs) {
        }
    }

})();
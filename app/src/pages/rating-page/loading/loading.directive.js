(function() {
    'use strict';

    angular
        .module('myApp')
        .directive('imgLoading', imgLoading);

    imgLoading.$inject = ['$animate'];

    /* @ngInject */
    function imgLoading($animate) {

        var directive = {
            bindToController: true,
            templateUrl: 'rating-page/image-rating/loading.directive.html',
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
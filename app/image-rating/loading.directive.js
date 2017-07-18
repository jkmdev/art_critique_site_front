(function() {
    'use strict';

    angular
        .module('myApp')
        .directive('imgLoading', imgLoading);

    //imgLoading.$inject = ['dependencies'];

    /* @ngInject */
    function imgLoading() {

        var directive = {
            bindToController: true,
            templateUrl: 'image-rating/loading.directive.html',
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
            element.addClass('loading-anim');
            element.addClass('animated');
            element.addClass('flash');
            element.addClass('absolute-center');
        }
    }

})();
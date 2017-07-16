(function() {
    'use strict';

    angular
        .module('myApp')
        .directive('imgLoading', imgLoading);

    //img-loading.$inject = ['dependencies'];

    /* @ngInject */
    function imgLoading() {

        var directive = {
            bindToController: true,
            templateUrl: 'loading.directive.html',
            controller: ImageRatingController,
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

    /* @ngInject */
    function imgLoading() {

    }
})();
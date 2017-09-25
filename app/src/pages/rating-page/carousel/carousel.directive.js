(function() {
    'use strict';

    angular
        .module('app.rating-page')
        .directive('imgCarousel', imgCarousel);

    //directive.$inject = [];

    function imgCarousel() {

        var directive = {
            // bindToController: true,
            templateUrl: "src/pages/rating-page/carousel/carousel.view.html",
            // controller: CarouselCtrl,
            require: '^imgRatingPage',
            controllerAs: 'vm',
            link: link,
            restrict: 'EA',
            scope: {
                contentTitle: '=', 
                uploaderText: '='
            }
        };

        return directive;

        function link(scope, element, attrs, ctrl) {

            scope.nextImage = function() {
                ctrl.nextImage();
            }

            scope.changePanel = function(panel) {
                if (panel == 1) {
                    ctrl.uploaderText = ctrl.uploaderComments.goal;
                } else if (panel == 2) {
                    ctrl.uploaderText = ctrl.uploaderComments.need;
                } else if (panel == 3) {
                    ctrl.uploaderText = ctrl.uploaderComments.other;
                }
            }

        }

	}

})();

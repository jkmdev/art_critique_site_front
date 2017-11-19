(function() {
    'use strict';

    //Function: To control functions related to the image carousel

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
                    ctrl.content.uploaderText = ctrl.content.uploaderComments.goal;
                } else if (panel == 2) {
                    ctrl.content.uploaderText = ctrl.content.uploaderComments.need;
                } else if (panel == 3) {
                    ctrl.content.uploaderText = ctrl.content.uploaderComments.other;
                }
            }

        }

	}

})();

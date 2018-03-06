(function() {
    'use strict';

    //Function: To control functions related to the image carousel

    angular
        .module('app.rating-page')
        .directive('imgCarousel', imgCarousel);

    //imgCarousel.$inject = [];

    function imgCarousel() {

        var directive = {
            // bindToController: true,
            templateUrl: "pages/rating-page/carousel/carousel.view.html",
            // controller: CarouselCtrl,
            require: '^^imgRatingPage',
            link: link,
            restrict: 'EA',
            scope: {
                contentTitle: '=',
                uploaderComment: '='
            }
        };

        return directive;

        function link(scope, element, attrs, ctrl) {

            scope.$watch(attrs.uploaderComment, function (value){
      				console.log(value);
      			});

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

            scope.changeUploaderTextTo = function(text) {
              if (text !== null) {
                scope.uploaderText = text;
              } else {
                scope.uploaderText = '---';
              }
            }

        }

	}

})();

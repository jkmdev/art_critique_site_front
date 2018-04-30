(function() {
    'use strict';

    //Function: To control functions related to the image carousel

    angular
        .module('app.rating-page')
        .directive('imgCarousel', imgCarousel);

    imgCarousel.$inject = ['$sce'];

    function imgCarousel($sce) {

        var directive = {
            // bindToController: true,
            templateUrl: "components/carousel/carousel.view.html",
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

            scope.getFullImageUrl = function(image) {
                return "https://s3.amazonaws.com/anneandycdn/" + image;
            }

            scope.changeUploaderTextTo = function(selectedCommentType) {
              if (scope.uploaderComment[selectedCommentType] !== null) {
                scope.uploaderText = scope.uploaderComment[selectedCommentType];
                scope.selectedCommentType = selectedCommentType;
              } else {
                scope.uploaderText = '---';
              }
            }

            scope.optionIsSelected = function(selectedCommentType) {
              return selectedCommentType == scope.selectedCommentType;
            }

            scope.nextImage = function() {
              ctrl.nextImage();
            }

            scope.previousImage = function() {
              ctrl.previousImage();
            }

        }

	}

})();

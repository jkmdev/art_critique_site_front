(function() {
    'use strict';

    //Function: to control functions related to the rating page comments section

    angular
        .module('app.rating-page')
        .directive('imgComments', imgComments);

    //directive.$inject = [];

    function imgComments() {

        var directive = {
            //bindToController: true,
            templateUrl: "components/comments/comments.view.html",
            //controller: CommentCtrl,
            //controllerAs: 'vm',
            require: '^^imgRatingPage',
            link: link,
            restrict: 'EA',
            scope: {
              currentUserComment: '=',
              clientComments: '='
            }
        };

        return directive;

        function link(scope, element, attrs, ctrl) {

          scope.$watch('vm.userComments', function(newValue) {
              console.log(newValue);
          });

          scope.submitComment = function() {
              ctrl.submitComment();
          }

          scope.nextImage = function() {
              ctrl.nextImage();
          }

          scope.increaseScore = function(content) {
              content.commentScore++;
          }

          scope.decreaseScore = function(content) {
              content.commentScore--;
          }

        }

	}

  //CommentCtrl.$inject = [];

  function CommentCtrl() {

  }

})();

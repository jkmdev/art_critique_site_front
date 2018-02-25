(function() {
    'use strict';

    //Function: to control functions related to the rating page comments section

    angular
        .module('app.rating-page')
        .directive('imgComments', imgComments);

    //directive.$inject = [];

    function imgComments() {

        var directive = {
            templateUrl: "pages/rating-page/comments/comments.view.html",
            require: '^^imgRatingPage',
            link: link,
            restrict: 'EA',
            scope: {
                currentUserComment: '=',
                userComments: '='
            }
        };

        return directive;

        function link(scope, element, attrs, ctrl) {

            scope.increaseScore = function(content) {
                content.rating++;
            }

            scope.decreaseScore = function(content) {
                content.rating--;
            }

        }

	}

})();
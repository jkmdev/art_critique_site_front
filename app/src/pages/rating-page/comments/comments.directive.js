(function() {
    'use strict';

    angular
        .module('app.rating-page')
        .directive('imgComments', imgComments);

    //directive.$inject = [];

    function imgComments() {

        var directive = {
            templateUrl: "src/pages/rating-page/comments/comments.view.html",
            require: '^imgRatingPage',
            link: link,
            restrict: 'EA',
            scope: {
                currentUserComment: '=',
                userComments: '='
            }
        };

        return directive;

        function link(scope, element, attrs, ctrl) {

        }

	}

})();
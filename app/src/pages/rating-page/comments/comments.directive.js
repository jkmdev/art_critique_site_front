(function() {
    'use strict';

    angular
        .module('app.rating-page')
        .directive('imgComments', imgComments);

    //directive.$inject = [];

    function imgComments() {

        var directive = {
            bindToController: true,
            templateUrl: "src/pages/rating-page/comments/comments.view.html",
            controller: CommentsCtrl,
            controllerAs: 'vm',
            link: link,
            restrict: 'EA',
            scope: {
            },
        };

        return directive;

        function link(scope, element, attrs, ctrl) {

        }

	}

    //CarouselCtrl.$inject = ['$scope', 'RatingModel'];

    function CommentsCtrl(RatingModel) {

        var vm = this;
        vm.title = 'CommentsCtrll';

    }

});
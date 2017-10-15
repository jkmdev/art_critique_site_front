(function() {

	angular
		.module('app.rating-page')
		.directive('imgComments', imgComments);

	function imgComments() {

		var directive = {
            bindToController: true,
            templateUrl: 'rating-page/image-rating/uploader.directive.html',
            controller: 'ImageRatingCtrl',
            controllerAs: 'vm',
            link: link,
            restrict: 'E',
            scope: {
            },
            bindToController: true
        };

        return directive;

        function link(scope, element, attrs) {

        }
	}

})();
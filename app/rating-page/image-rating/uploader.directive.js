(function() {

	angular
		.module('myApp')
		.directive('imgComments', imgComments);

	function imgComments() {

		var directive = {
            bindToController: true,
            templateUrl: 'rating-page/image-rating/uploader.directive.html',
            controller: 'ImageRatingController',
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
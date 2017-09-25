(function() {
    'use strict';

    angular
        .module('app.rating-page')
        .directive('imgRatingPage', imgRatingPage);

    //directive.$inject = [];

    function imgRatingPage() {

        var directive = {
            bindToController: true,
            templateUrl: "src/pages/rating-page/rating-page.view.html",
            controller: RatingCtrl,
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

    function RatingCtrl(RatingModel) {

        var vm = this;
        vm.title = 'RatingCtrl';

        vm.content = {};
        vm.currentIndex = 0; 
        vm.contentTitle = '';
        vm.uploaderComments = {};
        vm.uploaderText = '';
        vm.userComments = [];

        vm.checkEmpty = checkEmpty;
        vm.nextImage = nextImage;
        vm.getContent = getContent;

        activate();

        function activate() {
            vm.getContent();
        }

        function checkEmpty() {
        }

        function nextImage() {
           vm.currentIndex++;
           vm.getContent();
        }

        function getContent() {
            RatingModel.getOneContent(vm.currentIndex)
                .then(function(content) {
                    console.log(content);

                    if (content) {
                        vm.content = content;
                        vm.contentTitle = content.contentTitle;
                        vm.uploaderComments = content.uploaderComments;
                        vm.userComments = content.userComments;
                        vm.uploaderText = vm.uploaderComments.goal;
                    } else {
                        vm.contentTitle = '';
                    } 
                });
        }
    }

})();
(function() {
    'use strict';

    angular
        .module('app.rating-page')
        .directive('imgRatingPage', imgRatingPage);

    //imgRatingPage.$inject = [];

    function imgRatingPage() {

        var directive = {
            bindToController: true,
            templateUrl: "src/pages/rating-page/rating-page.view.html",
            controller: RatingCtrl,
            controllerAs: 'vm',
            link: link,
            restrict: 'EA',
            scope: {
            }
        };

        return directive;

        function link(scope, element, attrs, ctrl) {

        }

	}

    RatingCtrl.$inject = ['RatingModel'];

    function RatingCtrl(RatingModel) {

        var vm = this;
        vm.title = 'RatingCtrl';

        vm.content = {};
        vm.currentIndex = 0; 
        vm.currentUserComment = '';
        
        vm.saveContent = RatingModel.saveContent;
        vm.searchContent = RatingModel.searchContent;

        vm.setContent = setContent;
        vm.nextImage = nextImage;

        activate();

        function activate() {

            RatingModel.getContent().then(function(content) {

                console.log(content);
                vm.setContent(content);

            });

        }

        function setContent(content) {

                if (typeof content == 'undefined') { 
                        vm.content = {};
                        vm.content.contentTitle = ''; 
                } else {
                       vm.content = content;
                       vm.content.uploaderText = vm.content.uploaderComments.goal;
                }   

        }

        function nextImage() { 


            if (!(typeof vm.content == 'undefined')) {
                vm.content.userComments.unshift(
                    { rating: 0, "comment": vm.content.currentUserComment}
                );
                vm.saveContent(vm.content);
            }

            vm.currentIndex++;
            vm.setContent(RatingModel.getContentAtIndex(vm.currentIndex));

        }

    }

})();
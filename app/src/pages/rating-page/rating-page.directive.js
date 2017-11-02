(function() {
    'use strict';

    angular
        .module('app.rating-page')
        .directive('imgRatingPage', imgRatingPage)
        .controller('RatingCtrl', RatingCtrl);

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
        vm.activate = activate;

        activate();

        function activate() {

            // vm.setContent(RatingModel.getContent());

            RatingModel.getContent().then(function(content) {
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
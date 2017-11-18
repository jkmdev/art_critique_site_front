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
            scope.$on('RatingModel.getContent(): content Obtained', function(event, data) {
                ctrl.setContent();
            });
        }

	}

    RatingCtrl.$inject = ['RatingModel', '$http'];

    function RatingCtrl(RatingModel, $http) {

        var vm = this;
        vm.title = 'RatingCtrl';

        vm.content = {};
        vm.currentIndex = 0; 
        vm.currentUserComment = '';
        
        vm.saveContent = RatingModel.saveContent;
        vm.searchContent = RatingModel.searchContent;
        vm.getContent = RatingModel.getContent;

        vm.setContent = setContent;
        vm.nextImage = nextImage;
        vm.activate = activate;

        activate();

        function activate() {
            RatingModel.searchContent();
        }

        function setContent() {

            var content = RatingModel.getContent()[0];

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
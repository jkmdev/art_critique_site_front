(function() {
    'use strict';

    //Function: To facilitate operations between various components on rating
    //page and the rating page model. Controls shared variables accross components

    angular
        .module('app.rating-page')
        .directive('imgRatingPage', imgRatingPage)
        .controller('RatingCtrl', RatingCtrl);

    //imgRatingPage.$inject = [];

    function imgRatingPage() {

        var directive = {
            bindToController: true,
            templateUrl: "pages/rating-page/rating-page.view.html",
            controller: RatingCtrl,
            controllerAs: 'vm',
            link: link,
            restrict: 'EA',
            scope: {
            }
        };

        return directive;

        function link(scope, element, attrs, ctrl) {

            scope.$on('ContentModel.searchContent(): content Obtained', function(event, data) {
                ctrl.setContent();
            });

        }

	}

    RatingCtrl.$inject = ['ContentModel', '$http'];

    function RatingCtrl(ContentModel, $http) {

        var vm = this;
        vm.title = 'RatingCtrl';

        vm.content = {};
        vm.currentIndex = 0;
        vm.currentUserComment = '';
        vm.queueSize = 3; //turn into constant later

        vm.saveContent = ContentModel.saveContent;
        vm.searchContent = ContentModel.searchContent;
        vm.getContent = ContentModel.getContent;

        vm.setContent = setContent;
        vm.nextImage = nextImage;
        vm.activate = activate;

        activate();

        function activate() {
            ContentModel.searchContent();
        }

        function setContent() {

            ContentModel.getLatestImages().then(function(result) {
              vm.content = ContentModel.getContentAtIndex(vm.currentIndex);
            });

        }

        function nextImage() {

            if (vm.content !== undefined) {

                if (vm.currentUserComment !=='') {

                  vm.content.clientComments.unshift(
                      { commentText: vm.currentUserComment,
                        commentScore: 0,
                        idUser: 4}
                  );

                }

                vm.saveContent(vm.content);

                vm.currentIndex++;
                vm.content = ContentModel.getContentAtIndex(vm.currentIndex);
                vm.currentUserComment = '';
                //vm.setContent();
                //vm.setContent(ContentModel.getContentAtIndex(vm.currentIndex));
            }

        }

    }

})();

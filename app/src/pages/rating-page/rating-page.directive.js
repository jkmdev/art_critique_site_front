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
            scope.$on('ContentModel.getContent(): content Obtained', function(event, data) {
                ctrl.setContent();
            });
            // scope.on('vm.contentTitle', function(val) {
            //     console.log('eck');
            // });
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

            //console.log('setContent() runs');

            vm.content = ContentModel.getContent()[vm.currentIndex];

            if (vm.content !== undefined) { 
               vm.content.uploaderText = vm.content.uploaderComments.goal;
            }   

        }

        function nextImage() { 

            if (vm.content !== undefined) {

                vm.content.userComments.unshift(
                    { rating: 0, "comment": vm.currentUserComment}
                );
                vm.saveContent(vm.content);

                vm.currentIndex++;
                vm.setContent();
                //vm.setContent(ContentModel.getContentAtIndex(vm.currentIndex));
            }

        }

    }

})();
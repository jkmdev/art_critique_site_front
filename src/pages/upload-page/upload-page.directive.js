(function() {   
    'use strict';

    //Function: To facilitate operations between various components on rating
    //page and the rating page model. Controls shared variables accross components

    angular
        .module('app.upload-page')
        .directive('imgUploadPage', imgUploadPage)
        .controller('UploadPageCtrl', UploadPageCtrl);

    //imgRatingPage.$inject = [];

    function imgUploadPage() {

        var directive = {
            bindToController: true,
            templateUrl: "pages/upload-page/upload-page.view.html",
            controller: UploadPageCtrl,
            controllerAs: 'vm',
            link: link,
            restrict: 'EA',
            scope: {

            }
        };

        return directive;

        function link(scope, element, attrs, ctrl) {

            scope.$watch('vm.image', function(newValue) {
                //console.log(newValue);
            });

            scope.$on('UserModel.searchContent(): content Obtained', function(event, data) {
                ctrl.uploadedResults = ctrl.getContent();
            });

            scope.getImage = function() {
                return ctrl.image;
            }

            scope.submit = function() {
                ctrl.uploadImage(ctrl.image);
            }
            
        }

	}

    UploadPageCtrl.$inject = ['UserModel', '$http'];

    function UploadPageCtrl(UserModel) {

        var vm = this;
        vm.title = 'RatingCtrl';

        vm.user = {};
        vm.uploadedResults = [];
        vm.image = 'test';

        vm.uploadImage = UserModel.uploadImage;
        vm.getContent = UserModel.getContent;

        activate();

        ///////////

        function activate() {
            vm.user = UserModel.getUser(8);
            UserModel.searchContent();
        }

    }

})();
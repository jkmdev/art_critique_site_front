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
            templateUrl: "src/pages/upload-page/upload-page.view.html",
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
                console.log(newValue);
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

    function UploadPageCtrl(UserModel, $http) {

        var vm = this;
        vm.title = 'RatingCtrl';

        vm.user = {};
        vm.image = 'test';

        vm.uploadImage = UserModel.uploadImage;

        activate();

        ///////////

        function activate() {
            vm.user = UserModel.getUser(8);
        }

    }

})();
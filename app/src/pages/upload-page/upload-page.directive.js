(function() {
    'use strict';

    //Function: To facilitate operations between various components on rating
    //page and the rating page model. Controls shared variables accross components

    angular
        .module('app.upload-page')
        .directive('imgUploadPage', imgUploadPage)
        .controller('UploadCtrl', UploadCtrl);

    //imgRatingPage.$inject = [];

    function imgUploadPage() {

        var directive = {
            bindToController: true,
            templateUrl: "src/pages/upload-page/upload-page.view.html",
            controller: UploadCtrl,
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

    UploadCtrl.$inject = ['UserModel', '$http'];

    function UploadCtrl(UserModel, $http) {

        var vm = this;
        vm.title = 'RatingCtrl';

        vm.user = {};

        activate();

        ///////////

        function activate() {
            vm.user = UserModel.getUser(8);
        }

    }

})();
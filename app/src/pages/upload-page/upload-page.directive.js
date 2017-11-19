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

    UploadCtrl.$inject = ['UploadModel', '$http'];

    function UploadCtrl(UploadModel, $http) {

        var vm = this;
        vm.title = 'RatingCtrl';

        activate();

        function activate() {
            
        }

    }

})();
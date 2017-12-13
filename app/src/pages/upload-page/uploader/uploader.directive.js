(function() {
    'use strict';

    console.log('imgUpload loads');

    //Function: To facilitate operations between various components on rating
    //page and the rating page model. Controls shared variables accross components

    angular
        .module('app.upload-page')
        .directive('imgUpload', imgUpload);

    //imgRatingPage.$inject = [];

    function imgUpload() {

        var directive = {
            bindToController: true,
            templateUrl: 'src/pages/upload-page/uploader/uploader.view.html',
            controller: ImgUploadCtrl,
            link: link,
            controllerAs: 'vm',
            restrict: 'EA',
            scope: {
                image: '='
            }
        };

        return directive;

        function link(scope, element, attrs, ctrl) {


        }

    }

    function ImgUploadCtrl(UserModel) {
        var vm = this;

        
    }

})();
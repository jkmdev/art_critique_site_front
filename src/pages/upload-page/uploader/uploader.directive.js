(function() {
    'use strict';

    console.log('imgUpload loads');

    //Function: To facilitate operations between various components on rating
    //page and the rating page model. Controls shared variables accross components

    angular
        .module('app.upload-page')
        .directive('imgUpload', imgUpload)
        .controller('UploadCtrl', UploadCtrl);

    //imgRatingPage.$inject = [];

    function imgUpload() {

        var directive = {
            bindToController: true,
            templateUrl: 'pages/upload-page/uploader/uploader.view.html',
            controller: UploadCtrl,
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

    function UploadCtrl() {
        var vm = this;
    }

})();

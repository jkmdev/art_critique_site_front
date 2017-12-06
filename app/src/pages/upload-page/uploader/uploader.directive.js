(function() {
    'use strict';

    //Function: To facilitate operations between various components on rating
    //page and the rating page model. Controls shared variables accross components

    angular
        .module('app.upload-page')
        .directive('imgUpload', imgUpload);

    //imgRatingPage.$inject = [];

    function imgUpload() {

        var directive = {
            require: '^imgUploadPage',
            link: link,
            restrict: 'EA',
            scope: {
            },
            template:'testing'
        };

        return directive;

        function link(scope, element, attrs, ctrl) {

        }

    }

})();
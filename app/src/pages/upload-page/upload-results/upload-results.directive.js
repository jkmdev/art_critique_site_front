(function() {   
    'use strict';

    //Function: To facilitate operations between various components on rating
    //page and the rating page model. Controls shared variables accross components

    angular
        .module('app.upload-page')
        .directive('imgUploadResults', imgUploadResults)
        .controller('UploadResultsCtrl', UploadResultsCtrl);

    //imgRatingPage.$inject = [];

    function imgUploadResults() {

        var directive = {
            bindToController: true,
            templateUrl: "src/pages/upload-page/upload-results/upload-results.view.html",
            controller: UploadResultsCtrl,
            controllerAs: 'vm',
            link: link,
            restrict: 'EA',
            scope: {

            }
        };

        return directive;

        function link(scope, element, attrs, ctrl) {

            // scope.$watch('vm.image', function(newValue) {
            //     console.log(newValue);
            // });

            // scope.getImage = function() {
            //     return ctrl.image;
            // }
            
        }

    }

    //UploadResultsCtrl.$inject = ['UserModel'];

    function UploadResultsCtrl() {

        console.log('img upload results instatiated');

        var vm = this;

        activate();

        ///////////

        function activate() {

        }

    }

})();
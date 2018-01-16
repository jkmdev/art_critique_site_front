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
                results: '='
            }
        };

        return directive;

        function link(scope, element, attrs, ctrl) {

            scope.$watch('vm.results', function(newValue) {
                //console.log(newValue);
            });

            // scope.getImage = function() {
            //     return ctrl.image;
            // }
            
        }

    }

    //UploadResultsCtrl.$inject = ['UserModel'];

    function UploadResultsCtrl() {

        var vm = this;

        activate();

        ///////////

        function activate() {

        }

    }

})();
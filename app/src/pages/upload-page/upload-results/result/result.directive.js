(function() {   
    'use strict';

    //Function: To facilitate operations between various components on rating
    //page and the rating page model. Controls shared variables accross components

    angular
        .module('app.upload-page')
        .directive('imgResult', imgResult)
        .controller('ResultCtrl', ResultCtrl);

    //imgRatingPage.$inject = [];

    function imgResult() {

        var directive = {
            bindToController: true,
            templateUrl: "src/pages/upload-page/upload-results/result/result.view.html",
            controller: ResultCtrl,
            controllerAs: 'vm',
            link: link,
            restrict: 'EA',
            scope: {
                result: '='
            }
        };

        return directive;

        function link(scope, element, attrs, ctrl) {

            // scope.$watch('vm.results', function(newValue) {
            //     console.log(newValue);
            // });

            // scope.getImage = function() {
            //     return ctrl.image;
            // }
            
        }

    }

    //UploadResultsCtrl.$inject = ['UserModel'];

    function ResultCtrl() {

        var vm = this;

        activate();

        ///////////

        function activate() {

        }

    }

})();
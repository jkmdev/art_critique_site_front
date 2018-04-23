(function() {
    'use strict';

    //Function: To facilitate operations between various components on rating
    //page and the rating page model. Controls shared variables accross components

    angular
        .module('app.upload-page')
        .directive('imgResult', imgResult)
        .controller('ResultCtrl', ResultCtrl);

    imgResult.$inject = ['$uibModal'];

    function imgResult($uibModal) {

        var directive = {
            bindToController: true,
            templateUrl: "components/result/result.view.html",
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

            scope.$watch('vm.results', function(newValue) {
                //console.log(newValue);
            });

        }
    }

    //UploadResultsCtrl.$inject = ['UserModel'];

    function ResultCtrl() {

        var vm = this;
        vm.test ="...okay";

        vm.modalController = modalController;

        activate();

        ///////////

        function activate() {

        }

        function modalController() {
            var vm = this;
            vm.result = ctrl.result;
        }

    }

})();

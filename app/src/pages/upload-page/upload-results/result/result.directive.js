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

            scope.$watch('vm.results', function(newValue) {
                console.log(newValue);
            });

            scope.viewDetails = function(size, parentSelector) {
                // var parentElem = parentSelector ? 
                // angular.element($document[0].querySelector('.modal-demo ' + parentSelector)) : undefined;
                console.log(ctrl.result);
                var modalInstance = $uibModal.open({
                  templateUrl: 'src/pages/upload-page/upload-results/result/result-modal.view.html',
                  controller: 'ResultCtrl',
                  controllerAs: 'vm',
                  size: 'sm',
                  appendTo: element,
                  controller: function() {
                       var vm = this;
                       vm.result = ctrl.result; 
                  }
                });
            }
        }
    }

    //UploadResultsCtrl.$inject = ['UserModel'];

    function ResultCtrl() {

        var vm = this;
        vm.test ="...okay";

        activate();

        ///////////

        function activate() {

        }

    }

})();
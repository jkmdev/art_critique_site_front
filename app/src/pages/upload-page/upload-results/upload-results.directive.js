(function() {   
    'use strict';

    //Function: To facilitate operations between various components on rating
    //page and the rating page model. Controls shared variables accross components

    angular
        .module('app.upload-page')
        .directive('imgUploadResults', imgUploadResults)
        .controller('UploadResultsCtrl', UploadResultsCtrl);

    imgUploadResults.$inject = ['$uibModal'];

    function imgUploadResults($uibModal) {

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

            scope.viewDetails = function(result) {
                // var parentElem = parentSelector ? 
                // angular.element($document[0].querySelector('.modal-demo ' + parentSelector)) : undefined;
                //console.log(ctrl.result);
                var modalInstance = $uibModal.open({
                  templateUrl: 'src/pages/upload-page/upload-results/result/result-modal.view.html',
                  controllerAs: 'vm',
                  size: 'sm',
                  appendTo: element,
                  controller: function () {
                    var vm = this;
                    vm.result = result; 
                  }
                });

            }
            
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
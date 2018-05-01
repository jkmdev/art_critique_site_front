(function() {
    'use strict';

    angular
        .module('app.upload-page')
        .directive('imgUploadForm', imgUploadForm)
        .controller('UploadFormCtrl', UploadFormCtrl);

    imgUploadForm.$inject = ['toaster'];
    /* @ngInject */
    function imgUploadForm(toaster) {
        var directive = {
            restrict: 'EA',
            templateUrl: 'components/upload-form/upload-form.view.html',
            scope: {
            },
            link: link,
            controller: UploadFormCtrl,
            controllerAs: 'vm',
            bindToController: true
        };

        return directive;

        function link(scope, el, attr, ctrl) {

          scope.submit = function(uploadForm, file) {
            console.log("First");
            ctrl.uploadImage(uploadForm, file);
          }

        }
    }

    UploadFormCtrl.$inject = ['UserModel', 'table'];

    /* @ngInject */
    function UploadFormCtrl(UserModel) {

        var vm = this;

        vm.uploadForm = {};

        vm.image = 'test';
        vm.picFile = {};

        vm.uploadImage = UserModel.uploadImage;

        vm.genre = {
          options: [
            {name: 'concept art'},
            {name: 'sketch'},
            {name: 'traditional'}
          ]
        }

        activate();

        function activate() {

        }
    }
})();

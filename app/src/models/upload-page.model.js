(function() {
	'use strict';

	angular
		.module('app.models.upload-page', [])
		.service('UserModel', UserModel);

		//UserModel.$inject = ['$rootScope', '$http'];

		function UserModel(Upload) {

			var model = this;

			var user = {
				userName: 'ngelic',
				imagesPosted: 6,
				commentPoints: 2,
				accountAge: 3
			};

			model.getUser = function(id) {
				return user;
			}

			model.uploadImage = function uploadImage(image) {
				console.log(image);
				Upload.upload({
		            url: 'assets/images',
		            data: {file: image, 'username': 'test'}
		        }).then(function (resp) {
		            console.log('Success ' + resp.config.data.file.name + 'uploaded. Response: ' + resp.data);
		        }, function (resp) {
		            console.log('Error status: ' + resp.status);
		        }, function (evt) {
		            var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
		            console.log('progress: ' + progressPercentage + '% ' + evt.config.data.file.name);
		        });
			}

		};
	
})();


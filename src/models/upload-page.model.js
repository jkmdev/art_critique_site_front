(function() {
	'use strict';

	angular
		.module('app.models.upload-page', [])
		.service('UserModel', UserModel);

		UserModel.$inject = ['Upload', '$rootScope', '$http', 'toaster'];

		function UserModel(Upload, $rootScope, $http, toaster) {

			var model = this;
			model.userData = {};

			var URLS = {
				baseUrl: 'http://localhost:8080/',
				userContent: 'data/content.json',
				getUserInfo: 'user/'
			};

			model.user = {
				id: 1,
				userName: 'ngelic',
				imagesPosted: 6,
				commentPoints: 2,
				accountAge: 3,
				uploaderId: 123
			};

			model.getUserData = function() {
				return $http.get('http://localhost:8080/user/' + model.user.id)
					.then(function(result) {
						model.userData = result.data;
						return model.userData;
				});
			}

			model.uploadImage = function uploadImage(metaData, file) {

				console.log("Second");

				metaData.imageKey = file.name;
				model.uploadImageMetaData(metaData).then(function(result, status) {
					model.uploadImageFile(file, result.imageKey);
				}).catch(function(result){
					toaster.pop('info', "Upload Status", "Failure: " + result.data.error);
				});
			}

			model.uploadImageMetaData = function(metaData) {

					console.log("Third");

					return $http.post('http://localhost:8080/user/' + model.user.id + '/image', metaData)
						.then(function(result) {
							model.userData = result.data;
							return model.userData;
					});

			}

			model.uploadImageFile = function(file, imageKey) {

				console.log("Fourth");

				Upload.upload({
			         url: 'http://localhost:8080/images/upload',
			         fields: {'imageKey': imageKey}, // additional data to send
			         file: file
			     }).progress(function (evt) {
			         var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
			         console.log('progress: ' + progressPercentage + '% ' + evt.config.file.name);
			     }).success(function (data, status, headers, config) {
						 toaster.pop('info', "Upload Status", "Successfully uploaded image " + imageKey);
			     });
			}

			model.getContent = function() {
				return model.userContent;
			}

		};

})();

(function() {
	'use strict';

	angular
		.module('app.models.upload-page', [])
		.service('UserModel', UserModel);

		UserModel.$inject = ['Upload', '$rootScope', '$http'];

		function UserModel(Upload, $rootScope, $http) {

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
				//return model.user;
				return $http.get('http://localhost:8080/user/' + model.user.id)
					.then(function(result) {
						model.userData = result.data;
						return model.userData;
				});
			}

			model.uploadImage = function uploadImage(metaData, file) {

				//console.log(metaData);
				metaData.imageKey = file.name;
				model.uploadImageMetaData(metaData).then(function(result, status) {
					console.log(result);
					model.uploadImageFile(file, result.imageKey);
				}).catch(function(result){
					console.log(result);
				});
				// console.log(metaData);
				// console.log(file);

				// model.uploadImageMetaData(metaData).then(function(result) {
				// 		console.log(result.data);
				// });

			}

			model.uploadImageMetaData = function(metaData) {

					return $http.post('http://localhost:8080/user/' + model.user.id + '/image', metaData)
						.then(function(result) {
							model.userData = result.data;
							return model.userData;
					});

			}

			model.uploadImageFile = function(file, imageKey) {

				console.log(file);

				Upload.upload({
			         url: 'http://localhost:8080/images/upload',
			         fields: {'imageKey': imageKey}, // additional data to send
			         file: file
			     }).progress(function (evt) {
			         var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
			         console.log('progress: ' + progressPercentage + '% ' + evt.config.file.name);
			     }).success(function (data, status, headers, config) {
			         console.log('file ' + config.file.name + 'uploaded. Response: ' + data);
			     });
			}

			model.searchContent = function(userId) {
				//searches database; select * from contentTable where userId = userId
				return $http.get(URLS.userContent).then(function (result) {
						//console.log(result.data);
						model.userContent = result.data;
						$rootScope.$broadcast("UserModel.searchContent(): content Obtained");
				});


				//console.log(model.userContent);
				//return model.userContent;
				//console.log('searchContent() callback runs');
				//$rootScope.$broadcast("ContentModel.getContent(): content Obtained");
				//broadcastService.contentObtainedIn('ContentModel.getContent() content Obtained');
				//return allContent;
			}

			model.getContent = function() {
				return model.userContent;
			}

		};

})();

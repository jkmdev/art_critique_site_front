(function() {
	'use strict';

	angular
		.module('app.models.upload-page', [])
		.service('UserModel', UserModel);

		UserModel.$inject = ['Upload', '$rootScope', '$http'];

		function UserModel(Upload, $rootScope, $http) {

			var model = this;
			model.userContent = [];
			var URLS = {
				userContent: 'data/content.json'
			};

			model.user = {
				userName: 'ngelic',
				imagesPosted: 6,
				commentPoints: 2,
				accountAge: 3,
				uploaderId: 123
			};

			model.getUser = function(id) {
				return model.user;
			}

			model.uploadImage = function uploadImage(file) {

				//upload metaData
				//then upload file?

				console.log(file);
				// Upload.upload({
		    //         url: 'assets/images',
		    //         data: {file: file, 'username': 'test'}
		    //     }).then(function (resp) {
		    //         console.log('Success ' + resp.config.data.file.name + 'uploaded. Response: ' + resp.data);
		    //     }, function (resp) {
		    //         console.log('Error status: ' + resp.status);
		    //     }, function (evt) {
		    //         var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
		    //         console.log('progress: ' + progressPercentage + '% ' + evt.config.data.file.name);
		    //     });
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

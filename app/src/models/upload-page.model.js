(function() {
	'use strict';

	angular
		.module('app.models.upload-page', [])
		.service('UserModel', UserModel);

		//UserModel.$inject = ['$rootScope', '$http'];

		function UserModel() {

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

		};
	
})();


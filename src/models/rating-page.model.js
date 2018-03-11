(function() {
	'use strict';

	angular
		.module('app.models.rating-page', [])
		.service('ContentModel', ContentModel);

		ContentModel.$inject = ['$rootScope', '$http'];

		// !rating model, moreso ContentModel

		function ContentModel($rootScope, $http) {

			var model = this;
			var allContent = [];
			var URLS = {
				allContent: 'data/content.json'
			};

			model.getLatestImages = function getLatestImages() {
				return $http.get('http://localhost:8080/images/recent')
					.then(function (result) {
						//return result.data;
						allContent = result.data;
					});
			}

			model.getContentAtIndex = function getContentAtIndex(index) {
				return allContent[index];
			}

			model.searchContent = function searchContent() {
				return $http.get(URLS.allContent)
					.then(function (result) {
						allContent = result.data;
						$rootScope.$broadcast("ContentModel.searchContent(): content Obtained");
					});
			}

			model.getContent = function getContent() {
				return allContent;
			}

			model.saveContent = function saveContent(newContent) {

				return $http.put('http://localhost:8080/images/' + newContent.imageKey, newContent)
					.then(function (result) {
						allContent = result.data;
						return result.data
					});

			}

		};

})();

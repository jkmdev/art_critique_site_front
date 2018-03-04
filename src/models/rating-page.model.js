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

			model.getContentAtIndex = function getContentAtIndex(index) {
				return allContent[index];
			}

			model.searchContent = function searchContent() {
				//console.log('searchContent() runs');
				return $http.get(URLS.allContent)
					.then(function (result) {
						//console.log('searched');
						allContent = result.data;
						//console.log('searchContent() callback runs');
						$rootScope.$broadcast("ContentModel.searchContent(): content Obtained");
						//broadcastService.contentObtainedIn('ContentModel.getContent() content Obtained');
						//return allContent;
					});
			}

			model.getContent = function getContent() {
				//console.log('getContent() runs');
				return allContent;
			}

			model.saveContent = function saveContent(newContent) {
				angular.forEach(model.allContent, function(originalContent, key) {
					if (originalContent.contentId == newContent.contentId) {
						originalContent = newContent;
					}
				});
			}

		};
	
})();

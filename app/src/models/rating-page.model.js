(function() {
	'use strict';

	angular
		.module('app.models.rating-page', [])
		.service('RatingModel', RatingModel);

		RatingModel.$inject = ['$rootScope', '$http'];

		function RatingModel($rootScope, $http) {

			var model = this;
			var allContent = [];
			var URLS = {
				allContent: 'src/data/content.json'
			};

			model.getContentAtIndex = function getContentAtIndex(index) {
				return allContent[index];
			}

			model.searchContent = function searchContent() {
				//console.log('searchContent() runs');
				return $http.get(URLS.allContent)
					.then(function (result) {
						allContent = result.data;
						//console.log('searchContent() callback runs');
						$rootScope.$broadcast("RatingModel.getContent(): content Obtained");
						//broadcastService.contentObtainedIn('RatingModel.getContent() content Obtained');
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


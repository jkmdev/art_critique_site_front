(function() {
	'use strict';

	angular
		.module('app.models.rating-page', [])
		.service('RatingModel', function($http) {

			var model = this;
			var allContent = [];
			var URLS = {
				allContent: 'src/data/content.json'
			};

			model.getContentAtIndex = function getContentAtIndex(index) {
				return allContent[index];
			}

			model.getContent = function getContent() {
				return $http.get(URLS.allContent)
					.then(function (result) {
						allContent = result.data.allContent;
						console.log(allContent);
						return allContent;
					});
			}

			model.saveContent = function saveContent(newContent) {
				angular.forEach(model.allContent, function(originalContent, key) {
					if (originalContent.contentId == newContent.contentId) {
						originalContent = newContent;
					}
				});
			}

		});
	
})();


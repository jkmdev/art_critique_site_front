(function() {
	'use strict';

	angular
		.module('app.models.rating-page', [])
		.service('RatingModel', function($http) {

			var model = this;
			var URLS = {
				allContent: 'src/data/content.json',
				contentQueue : 'src/data/contentQueue.json'
			};

			model.obtainQueue = obtainQueue;
			//model.cacheQueue = cacheQueue;
			// model.cacheFailed = cacheFailed;
			// model.getAllContent = getAllContent;
			model.getOneContent = getOneContent;
			// model.setOneContent = setOneContent;

			model.allContent = [];
			model.currentContent = {};
			model.contentQueue = [];

			function obtainQueue() {
				return $http.get(URLS.allContent)
					.then(getAllContent);
			}

			function getAllContent(response) {
				model.allContent = response.data.allContent;
				return response.data.allContent;
			}	

			function getOneContent(index) {
				// console.log(model.allContent);
				// console.log(model.allContent[0]);
				return $http.get(URLS.allContent)
					.then(function (result) {
						return result.data.allContent[index];
					});
			}

			// function setOneContent(newContent) {
			// 	angular.forEach(model.allContent, function(originalContent, key) {
			// 		if (originalContent.contentId == newContent.contentId) {
			// 			originalContent = newContent;
			// 		}
			// 	});
			// }

		});
	
})();


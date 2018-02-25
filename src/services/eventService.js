(function() {
	'use strict';

	angular
		.module('app')
		.factory('broadcastService', broadcastService);

	broadcastService.inject = ['$rootScope'];

	function broadcastService($rootScope) {

		var broadcastService = {
			contentObtainedIn : contentObtainedIn
		};

		return broadcastService;

		function contentObtainedIn(message) {
			$rootScope.$broadcast(message);
			$rootScope.$on('rating-page callback', function (event, data) {
    			//console.log(data); // 'Some data'
  			});
		};

	}

})();
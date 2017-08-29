(function() {
    'use strict';


	angular
        .module('myApp', [
            'ui.bootstrap',
            'ngRoute',
            'ui.router'
            //'ngStorage'
        ]).config(configure);

    configure.$inject = ['$routeProvider'];

    function configure ($routeProvider) {
    	$routeProvider
    	.when("/", {
        	templateUrl : 'pages/rating-page/rating-page.view.html'
    	})
    	/*.when("/graph", {
    		templateUrl : 'graph-page/graph/graph.view.html'
    	}
    	)*/
    }

})();

//'ngAnimate'

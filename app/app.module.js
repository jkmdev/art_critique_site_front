(function() {
    'use strict';


	angular
        .module('myApp', [
            'pages',
            'pages.rating-page',
            'ui.bootstrap',
            'ngRoute',
            'ui.router'
            //'ngStorage'
        ])

        .config(configure);

        configure.$inject = ['$routeProvider', '$stateProvider'];

        function configure ($routeProvider, $stateProvider) {

        	/*.when("/graph", {
        		templateUrl : 'graph-page/graph/graph.view.html'
        	}
        	)*/

            $stateProvider
            .state("graph-page", {
                url:'/graph',
                templateUrl: 'src/pages/rating-page/graph/graph-page.view.html'
            })

            $stateProvider
            .state("rating-page", {
                url:'/rate',
                templateUrl: 'src/pages/rating-page/rating-page.view.html'
            })

            //url route provider for default page goes here

        }

})();

//'ngAnimate'

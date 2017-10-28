(function() {
    'use strict';


	angular
        .module('app', [
            'app.rating-page',
            // 'ui.bootstrap',
            'ui.router'
            //'ngStorage'
        ])

        .config(configure);

        configure.$inject = ['$stateProvider'];

        function configure ($stateProvider) {

            $stateProvider

            	.state("rate", {
                        url: '',
                        template: '<img-rating-page></img-rating-page>'
                	}
            	)

            ;

            //url route provider for default page goes here

        }

})();

    // url: '',
    // template: '<img-rating-page></img-rating-page>'

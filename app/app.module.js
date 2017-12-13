(function() {
    'use strict';


	angular
        .module('app', [
            'app.rating-page',
            'app.upload-page',
            'ngFileUpload',
            // 'ui.bootstrap',
            'ui.router'
            //'ngStorage'
        ])

        .config(configure);

        configure.$inject = ['$stateProvider'];

        function configure ($stateProvider) {

            $stateProvider
                // .state('app', {
                //     abstract: true,
                //     templateUrl: ''
                // })
            	.state("rate", {
                        url: '',
                        template: '<img-rating-page></img-rating-page>'
                	}
            	)
                .state("upload", {
                        url: '/upload',
                        template: '<img-upload-page></img-upload-page>'
                    }
                )

            ;

            //url route provider for default page goes here

        }

})();

    // url: '',
    // template: '<img-rating-page></img-rating-page>'

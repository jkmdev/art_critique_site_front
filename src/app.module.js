(function() {
    'use strict';


	angular
        .module('app', [
            'app.rating-page',
            'app.upload-page',
            'ngFileUpload',
            'ui.bootstrap',
            'ui.router'
            //'ngStorage'
        ])

        .config(configure)
        .constant('URLs', URLs);

        configure.$inject = ['$stateProvider', '$sceDelegateProvider'];

        function configure ($stateProvider, $sceDelegateProvider) {

            $stateProvider
                // .state('app', {
                //     abstract: true,
                //     templateUrl: ''
                // })
            	.state("rate", {
                        url: '/',
                        template: '<img-rating-page></img-rating-page>'
                	}
            	)
                .state("upload", {
                        url: '/upload',
                        template: '<img-upload-page></img-upload-page>'
                    }
                )

            ;

            $sceDelegateProvider.resourceUrlWhitelist([
                'self',
                'https://s3.amazonaws.com/anneandycdn/**'
              ]);

        }

        function URLs () {
          bucketURL: 'https://s3.amazonaws.com/anneandycdn/'
        };

})();

    // url: '',
    // template: '<img-rating-page></img-rating-page>'

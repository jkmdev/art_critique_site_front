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
        .constant('table', table);

        configure.$inject = ['$stateProvider'];

        function configure ($stateProvider) {

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

            //url route provider for default page goes here

        }

        function table () {
          title: 'A title',
          rows = [
            [{value: 'Anime figures', type: 'title'}, {value:'animeValue', type: 'currency'}],
            [{value: 'Comic Books', type: 'title'},{value:'comicValue', type: 'currency'}]
          ]
        };

})();

    // url: '',
    // template: '<img-rating-page></img-rating-page>'

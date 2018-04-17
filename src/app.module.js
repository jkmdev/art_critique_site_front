
import './style.css';

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

})();

// require('./models/rating-page.model.js');
// require('./models/upload-page.model.js');
// require('./services/eventService.js');
//
// require('./pages/rating-page/rating-page.module.js');
// require('./pages/rating-page/rating-page.directive.js');
// require('./pages/rating-page/carousel/carousel.directive.js');
// require('./pages/rating-page/comments/comments.directive.js');
//
// require('./pages/upload-page/upload-page.module.js');
// require('./pages/upload-page/upload-page.directive.js');
// require('./pages/upload-page/uploader/uploader.directive.js');
// require('./pages/upload-page/upload-results/upload-results.directive.js');
// require('./pages/upload-page/upload-results/result/result.directive.js');
// require('./pages/upload-page/upload-form/upload-form.directive.js');

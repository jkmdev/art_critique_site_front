(function() {
    'use strict';

    angular
        .module('app')
        .directive('imgRating', imgRating);

    //directive.$inject = ['dependencies'];

    function imgRating() {

        var directive = {
            bindToController: true,
            templateUrl: "src/pages/rating-page/rating/rating.view.html",
            controller: 'ImageRatingCtrl',
            controllerAs: 'vm',
            link: link,
            restrict: 'E',
            scope: {
            },
            bindToController: true
        };

        return directive;

        function link(scope, element, attrs) {

            element.bind('click', function(e) {

                var star;

                for (var i = 1; i <= 5; i++) {

                    switch(i) {
                        case 1: star = angular.element( document.querySelector( '#one-star' ));
                                break;
                        case 2: star = angular.element( document.querySelector( '#two-stars' ));
                                break;
                        case 3: star = angular.element( document.querySelector( '#three-stars' ));
                                break;
                        case 4: star = angular.element( document.querySelector( '#four-stars' ));
                                break;
                        case 5: star = angular.element( document.querySelector( '#five-stars' ));
                                break;
                        default: break;
                    }

                    if (scope.count >= i) {
                        star.removeClass('glyphicon-star-empty');
                        star.addClass('glyphicon-star');
                    } else {
                        star.removeClass('glyphicon-star');
                        star.addClass('glyphicon-star-empty');
                    }
                }

            });
        }
    }

})();
// console.log("FIRST");

// describe('app.rating-page tests', function() {

// 	console.log("It runs!");

// 	beforeEach(module('app.rating-page'));

// 	var ratingCtrl;

// 	beforeEach(inject(function(_$controller_){
//     	ratingCtrl = $controller('RatingCtrl', {});
//   	}));

//   	//critical

//   	describe('RatingCtrl'), function() {

//   		console.log('???????');

// 	  	it('when the page loads image content appears', function() {
// 	  		expect(ratingCtrl.content).toBeDefined();
// 	  		console.log(ratingCtrl.content);
// 	  		//expect(ratingCtrl.content).not.toBeUndefined();
// 	  	});
// 	  	//it('when I click the next button, new image content displays', function() {});

// 	  	//nice to have

//   }

// });

console.log('It runs!!');

describe('imgRatingPage', function() {

	beforeEach(module('app'));
	beforeEach(module('app.templates'));

	beforeEach(inject(function ($rootScope, $compile) {

		console.log('...and here!!');

        // elm = angular.element('<img-rating-page></img-rating-page>');

        // scope = $rootScope.$new();

        // // scope.customMessage = '<div>foo</div>';
        // // scope.items = [{id:1, title:'title a'}, {id:2, title:'title b'}];
        // elem = $compile(elm)(scope);
        // scope.$digest();

   
    }));

    it('should be instantiated', function() {
    	console.log('spec');
    })

	console.log('...it runs here too!!!');
});
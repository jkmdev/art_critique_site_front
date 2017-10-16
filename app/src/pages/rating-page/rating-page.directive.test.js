describe('Controller: RatingCtrl', function() {

	beforeEach(module('app.rating-page'));

	var ratingCtrl;

	beforeEach(inject(function(_$controller_){
    	ratingCtrl = $controller('RatingCtrl', {});
  	}));

  	//critical

  	it('when the page loads image content appears', function() {
  		expect(ratingCtrl.content).toBeDefined();
  	});
  	//it('when I click the next button, new image content displays', function() {});

  	//nice to have



});
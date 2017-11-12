describe('imgRatingPage', function() {

	// var valid_respond = readJSON('src/data/content.json');
 // 	$httpBackend.whenGET(/.*/).respond(valid_respond);

 	var elem, ctrl, scope;

 	var httpBackend, RatingModel;

	beforeEach(module('app.rating-page')); //include module
	beforeEach(module('templates')); //include precompiled templates

	beforeEach(inject(function ($httpBackend, $rootScope, $compile, _$controller_, _RatingModel_) {

		//init variables

		RatingModel = _RatingModel_;
		scope = $rootScope.$new();

		//obtain json data/file

		//process mimics obtaining data from server, but doesn't actually do this
		//since fetching data can be slow
		//verifies request has been sent, respond with pre-trained responses
		//assert that end result is what is expected

  		httpBackend = $httpBackend;
  		httpBackend.when('GET','src/data/content.json').respond('src/data/content.json');
  		httpBackend.when('GET','/test').respond(console.log('heyyy ;)'));

  		//obtain directive and dom

        // elem = angular.element('<img-rating-page></img-rating-page>');
        // elem = $compile(elem)(scope);

        //obtain directive's controller

        ctrl = _$controller_('RatingCtrl', {$scope: scope});
        
        // ctrl.activate();
        // scope.$digest();k

    }));

    afterEach(function() {
     httpBackend.verifyNoOutstandingExpectation();
     httpBackend.verifyNoOutstandingRequest();
   });

    it('should be instantiated', function() {

    	// ctrl.what = {	
    	// 	'huh': '??'
    	// };
    	RatingModel.getContent().then(function(content) {
    		//ctrl.content = content;
    		//console.log(content);
    		//expect(ctrl.content).toBeDefined();
    	});

    	ctrl.activate();
    	console.log(ctrl.content);

    	httpBackend.flush();

    	
    	//console.log(ctrl.content);
    	//expect(ctrl.content).to.be.an('array');
    	//_$httpBackend.flush();

    });

    //what does this need to be doing to work properly...?

    // if there are images in the queue, the first image should be loaded
    // if there are no images, then nothing loads
    // all images can be loaded 

});

//References
//http://www.syntaxsuccess.com/viewarticle/unit-testing-bindtocontroller-and-controlleras
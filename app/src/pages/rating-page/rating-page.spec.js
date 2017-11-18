describe('imgRatingPage', function() {

 	var elem, ctrl, scope;

 	var httpBackend, RatingModel;

    //beforeEach(module('app'));
	beforeEach(module('app.rating-page')); //include module
	beforeEach(module('templates')); //include precompiled templates

	beforeEach(inject(function ($httpBackend, $http, $rootScope, $compile, _$controller_, _RatingModel_) {

		//init variables
		
		scope = $rootScope.$new();
        RatingModel = _RatingModel_;
        ctrl = _$controller_('RatingCtrl', {$scope: scope});

  		httpBackend = $httpBackend;
        httpBackend.whenGET('src/data/content.json').respond(
            200, mockedContent
        );

        spyOn(RatingModel, 'getContent').and.returnValue(
            mockedContent
        );

        // directive implementation

        // elem = angular.element('<img-rating-page></img-rating-page>');
        // elem = $compile(elem)(scope);
        
        // ctrl.activate();
        // scope.$digest();

    }));

    afterEach(function() {
        // httpBackend.verifyNoOutstandingExpectation();
        // httpBackend.verifyNoOutstandingRequest();
        // httpBackend.flush();
    });

    describe('imgCarousel', function() {

        //STORY: as a user I want to view submitted images so I can comment on them

        //ACCEPTANCE CRITERIA/SPECS/EXPECTATIONS:

        it('should load content when user first visits page', function(){
            ctrl.activate();
            ctrl.setContent();
            expect(ctrl.contentTitle).toEqual(mockedContent.contentTitle);
        });

        it('should allow user to view next image', function(){
            ctrl.activate();
            ctrl.setContent();
            ctrl.nextImage();

            expect(ctrl.currentIndex).not.toBe(0);
            //expect(ctrl.contentTitle).toEqual(mockedContent.contentTitle);
        });

        it('should allow user to view all images in queue', function(){

        });

        // it('should display a message when the user is at the end of queue', function(){
        // });

    });

    describe('imgComments', function() {

        //STORY: as a user I want to view other commenter's images

    });

});

//References
//http://www.syntaxsuccess.com/viewarticle/unit-testing-bindtocontroller-and-controlleras

//testing controllerAs in isolation from the directive when isolate scope variables are involved
    //http://www.syntaxsuccess.com/viewarticle/unit-testing-bindtocontroller-and-controlleras


//https://stackoverflow.com/questions/35882037/testing-directive-angular-using-controlleras
//http://angular-tips.com/blog/2014/03/introduction-to-unit-test-spies/
//http://www.syntaxsuccess.com/viewarticle/comprehensive-guide-to-unit-testing-in-angularjs

   var mockedContent = [

        {"contentId": 123,
         "contentTitle":"image_1.jpg",
         "uploaderId": 1,
         "uploaderComments": 
            {"goal": "create best other", "need": "Not sure.", "other": "..."}
         ,
         "userComments": [
            {
                "comment": "This is one comment. Good, bad, ugly, anything.",
                "rating": 4
            },
            {
                "comment": "Hey there, love your stuff!",
                "rating": 6
            }
         ]
        },

        {"contentId": 456,
         "contentTitle":"image_2.jpg",
         "uploaderId": 2,
         "uploaderComments":
            {"goal": "Better linework", "need": "Crit on linework.", "other": "Not sure what to put here. :/"}
         ,
         "userComments": [
            {
                "comment": "What my foundation was. A war that was based on discrimination. Kendrick Lamar alight...",
                "rating": 4
            },
            {
                "comment": "Ayyo",
                "rating": 6
            }
         ]
        },

        {"contentId": 789,
         "contentTitle":"image_3.jpg",
         "uploaderId": 3,
         "uploaderComments":
            {"goal": "Be better than DaVinci himself", "need": "to git gud", "other": "Wish my linework was better..."}
         ,
         "userComments": [
            {
                "comment": "I leik it.",
                "rating": 4
            },
            {
                "comment": "Daaaaa daaaaaa daaaaa daaaaa daaaaaa!",
                "rating": 6
            }
         ]
        }
    ];

// var fakeHttpPromise = {
//     success: function() {}
// };
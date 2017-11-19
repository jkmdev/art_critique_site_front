describe('imgRatingPage', function() {

 	var elem, ctrl, scope;

 	var httpBackend, RatingModel;

	beforeEach(module('app.rating-page')); //include module
	beforeEach(module('templates')); //include precompiled templates

	beforeEach(inject(function ($httpBackend, $http, $rootScope, $compile, _$controller_, _RatingModel_) {
		
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

        ctrl.activate();
        ctrl.setContent();

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

    //STORY: as a user I want to view submitted images so I can comment on them

    describe('imgCarousel', function() {

        //ACCEPTANCE CRITERIA:

        it('should load content when user first visits page', function(){
            console.log(ctrl.content.contentTitle);
            expect(ctrl.content).not.toBe(undefined);
            expect(ctrl.content.contentTitle).toEqual(mockedContent[0].contentTitle);
        });

        it('should allow user to view next image', function(){
            ctrl.nextImage();
            console.log(ctrl.content.contentTitle);
            expect(ctrl.content.currentIndex).not.toBe(0);
        });

    });

    //STORY: as a user I want to comment on and view other commenter's images

    describe('imgComments', function() {

        //ACCEPTANCE CRITERIA:



    });

});

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
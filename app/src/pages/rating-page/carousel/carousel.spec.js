
describe('imgCarousel directive: ', function() {

 	var elem, ctrl, scope, modal;

 	var httpBackend, $compile, $rootScope, $document;

	beforeEach(module('app.rating-page')); //include module
	beforeEach(module('templates')); //include precompiled templates

	beforeEach(inject(function ($httpBackend, $http, _$rootScope_,_$controller_,_$compile_, _$document_) {

		//init
		$rootScope = _$rootScope_;
		$compile = _$compile_;
		$document = _$document_;
		scope = $rootScope.$new();
		httpBackend = $httpBackend;

		 httpBackend.whenGET('src/data/content.json').respond(
            200, mockedContent
        );


		//controller
		 ctrl = _$controller_('RatingCtrl', {$scope: scope});

		//dom
		elem = $compile('<img-rating-page><img-carousel uploader-text="uploaderText" content-title="image_3.jpg"></img-carousel></img-rating-page>')($rootScope);
		$rootScope.uploaderText = uploaderText;
		$rootScope.$digest();

	}));

	afterEach(function() {
		//httpBackend.verifyNoOutstandingExpectation();
        //httpBackend.verifyNoOutstandingRequest();
        httpBackend.flush();
    });

    it('should iterate over an array of results objects', function() {
    	//console.log(elem.html());
    	var imgCarousel = elem.find('img-carousel');

    	//console.log(elem.find('img-carousel'));
    	console.log(dump(angular.mock.dump(elem.isolateScope())));
    });

});

//mocked data

var uploaderText = {"goal": "create best other", "need": "Not sure.", "other": "..."};

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
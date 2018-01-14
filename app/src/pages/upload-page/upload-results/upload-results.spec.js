//As an artist, I want to be able to view my previous submissions and information about them
//it must show all previous submissions
//submissions must be in order of date
//it must allow me to view more details about that submission when I click on it


describe('Upload Results Directive', function() {

 	var elem, ctrl, scope;

 	var httpBackend, $compile, $rootScope;

	beforeEach(module('app.upload-page')); //include module
	beforeEach(module('templates')); //include precompiled templates

	beforeEach(inject(function ($httpBackend, $http, _$rootScope_,_$controller_,_$compile_) {

		$rootScope = _$rootScope_;
		scope = $rootScope.$new();
		ctrl = _$controller_('UploadCtrl', {$scope: scope});
		$compile = _$compile_;
		
	}));

	afterEach(function() {
        // httpBackend.verifyNoOutstandingExpectation();
        // httpBackend.verifyNoOutstandingRequest();
        // httpBackend.flush();
    });

    it('it must show all valid previous submissions, sorted by date', function() {
    	//https://docs.angularjs.org/api/ng/function/angular.element#angular-s-jqlite
    	var element = $compile('<img-upload-results></img-upload-results>')($rootScope);
    	$rootScope.$digest();

    	//console.log(element[0].outerHTML);
    	console.log('Count Watchers: ' + $rootScope.$countWatchers());
    	console.log('Child scopes: ' + $rootScope.$countChildScopes());
    	
    	//obtains json of previous submissions	
    		//mock this json data
    	//add valid objects to display container, sorted by date
    		//check objects in display container are valid
    		//check they are sorted by date
    	//add objects to dom
    		//check that dom is displaying properly
    });

    it('it must allow me to view more details about the submission when I click on it', function() {
    	//viewDetails function fires after button being clicked
    	//triggers a modal
    	//modal will display more details about submission
    });

});

//mocked data


var content =	[

		{"contentId": 001,
		 "contentTitle":"image_1.jpg",
		 "uploaderId": 123,
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

		{"contentId": 002,
		 "contentTitle":"image_2.jpg",
		 "uploaderId": 123,
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

		{"contentId": 003,
		 "contentTitle":"image_3.jpg",
		 "uploaderId": 123,
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

describe('Upload Results Directive', function() {

 	var elem, ctrl, scope;

 	var httpBackend, $compile, $rootScope;

	beforeEach(module('app.upload-page')); //include module
	beforeEach(module('templates')); //include precompiled templates

	beforeEach(inject(function ($httpBackend, $http, _$rootScope_,_$controller_,_$compile_) {

		//init
		$rootScope = _$rootScope_;
		$compile = _$compile_;
		scope = $rootScope.$new();

		//controller
		ctrl = _$controller_('UploadCtrl', {$scope: scope}, {results: content});
		

		//dom
		elem = $compile('<img-upload-results results="results"></img-upload-results>')($rootScope);
		$rootScope.results = content;
		$rootScope.$digest();

	}));

	afterEach(function() {
        // httpBackend.verifyNoOutstandingExpectation();
        // httpBackend.verifyNoOutstandingRequest();
        // httpBackend.flush();
    });

    it('should iterate over an array of results objects', function() {
    	expect(ctrl.results).toBeDefined();
    	expect(elem.find('img').length).toEqual(3);
    });

    it('should show images associated with submissions', function() {
    	var images = elem.find('img');
    	expect(images.eq(0).attr('ng-src')).toEqual('../assets/images/image_2.jpg');
    	expect(images.eq(1).attr('ng-src')).toEqual('../assets/images/image_1.jpg');
    	expect(images.eq(2).attr('ng-src')).toEqual('../assets/images/image_3.jpg');
    });

    it('should display title associated with submissions, sorted by date', function() {
    	var divs = elem.find('div');
    	expect(divs.eq(2).text().trim()).toEqual('image_2.jpg');
    	expect(divs.eq(4).text().trim()).toEqual('image_1.jpg');
    	expect(divs.eq(7).text().trim()).toEqual('image_3.jpg');
    });

    it('it must allow me to view more details about the submission when I click on it', function() {
    	
    	//console.log(elem.html());
    	//viewDetails function fires after button being clicked
    	//triggers a modal
    	//modal will display more details about submission
    });

});

//mocked data


var content =	[

		{"contentId": 1,
		 "contentTitle":"image_1.jpg",
		 "uploaderId": 123,
		 "dateUploaded": 1991,
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

		{"contentId": 2,
		 "contentTitle":"image_2.jpg",
		 "uploaderId": 123,
		 "dateUploaded": 1990,
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

		{"contentId": 3,
		 "contentTitle":"image_3.jpg",
		 "uploaderId": 123,
		 "dateUploaded": 1992,
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

//REFERENCES

	//https://docs.angularjs.org/api/ng/function/angular.element#angular-s-jqlite
	
	//examples of how an iterative directive should be tested: 
		//https://github.com/angular/angular.js/blob/master/test/ng/directive/ngRepeatSpec.js


describe('Upload Results Directive', function() {

 	var elem, ctrl, scope;

 	var httpBackend, $compile, $rootScope;

	beforeEach(module('app.upload-page')); //include module
	beforeEach(module('templates')); //include precompiled templates

	beforeEach(inject(function ($httpBackend, $http, _$rootScope_,_$controller_,_$compile_) {

		$rootScope = _$rootScope_;
		scope = $rootScope.$new();
		ctrl = _$controller_('ResultCtrl', {$scope: scope}, {result: content});
		$compile = _$compile_;
		
		elem = $compile('<img-result result="content"></img-result>')($rootScope);
		$rootScope.$digest();
		
		//https://docs.angularjs.org/api/ng/function/angular.element#angular-s-jqlite

	}));

    it('it must show the image as well as its title', function() {
    	//expect(ctrl.result).toBeDefined();
    	//expect(elem.html()).toContain('image_1.jpg');
    	elem.find('div')[0].click();

    });

    it('it must display an error message if the content is invalid', function() {
    	// ctrl.result.contentTitle = 123;
    	// expect(ctrl.isValid).toBe(false);
    });

    it('it create a modal when viewDetails is triggered', function() {
    	expect()
    });

});

//mocked data

var content =	{
	 "contentId": 1,
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
};
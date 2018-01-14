//As an artist, I want to be able to view my previous submissions and information about them
//it must show all previous submissions
//submissions must be in order of date
//it must allow me to view more details about that submission when I click on it


describe('imgUploadResults', function() {

 	var elem, ctrl, scope;

 	var httpBackend;

	beforeEach(module('app.upload-page')); //include module
	beforeEach(module('templates')); //include precompiled templates

	beforeEach(inject(function ($httpBackend, $http, $rootScope,_$controller_) {

		scope = $rootScope.$new();
		ctrl = _$controller_('UploadCtrl', {$scope: scope});

	}));

	afterEach(function() {
        // httpBackend.verifyNoOutstandingExpectation();
        // httpBackend.verifyNoOutstandingRequest();
        // httpBackend.flush();
    });

    it('it must show all previous submissions', function() {

    });

});
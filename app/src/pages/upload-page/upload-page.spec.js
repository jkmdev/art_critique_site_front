

describe('imgUploadPage', function() {

 	var elem, ctrl, scope;

 	var httpBackend, UploadModel;

	beforeEach(module('app.upload-page')); //include module
	beforeEach(module('templates')); //include precompiled templates

	beforeEach(inject(function ($httpBackend, $http, $rootScope,_$controller_, _UploadModel_) {

		scope = $rootScope.$new();
		ctrl = _$controller_('UploadCtrl', {$scope: scope});
		UploadModel = _UploadModel_;

	}));

	afterEach(function() {
        // httpBackend.verifyNoOutstandingExpectation();
        // httpBackend.verifyNoOutstandingRequest();
        // httpBackend.flush();
    });

    it('should contain information about the user', function() {
    	expect(ctrl.user.userName).toBeDefined();
    	expect(ctrl.user.imagesPosted).toBeDefined();
    	expect(ctrl.user.commentPoints).toBeDefined();
    	expect(ctrl.user.accountAge).toBeDefined();
    });

    it('should allow the user to upload their own image', function(){
    });

    it('should contain a profile section for the user', function(){
    });

    it('should allow the user to view all their uploaded content', function(){
    });

    it('should allow users to view details uploaded content', function(){
    });

});
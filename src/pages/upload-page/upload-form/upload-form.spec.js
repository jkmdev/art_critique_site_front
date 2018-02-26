
describe('Upload Form', function() {

 	var elem, ctrl, scope;

 	var httpBackend;

	beforeEach(module('app.upload-page')); //include module
	beforeEach(module('templates')); //include precompiled templates

	beforeEach(inject(function ($httpBackend, $http, $rootScope,_$controller_, $compile) {

		scope = $rootScope.$new();
		ctrl = _$controller_('UploadFormCtrl', {$scope: scope});

		//dom
		elem = $compile('<img-upload-form></img-upload-form>')($rootScope);
		//$rootScope.results = content;
		$rootScope.$digest();

	}));

  it('should display form inputs for image metadata', function() {
    var inputs = elem.find('input');
    expect(inputs.eq(0)).toBeDefined(); //image title
    expect(inputs.eq(0)).toBeDefined(); //image genre
    expect(inputs.eq(0)).toBeDefined(); //goal comment
    expect(inputs.eq(0)).toBeDefined(); //need commetn
    expect(inputs.eq(0)).toBeDefined(); //other comment
  });

  it('should allow the user to select an image to upload', function() {

  });

  it('should successfully upload a new image', function() {

  });

});

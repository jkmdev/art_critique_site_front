

describe('Upload Results Directive', function() {

 	var elem, ctrl, scope, modal;

 	var httpBackend, $compile, $rootScope;

	beforeEach(module('app.upload-page')); //include module
	beforeEach(module('templates')); //include precompiled templates

	beforeEach(inject(function (_$uibModal_,$httpBackend, $http, _$rootScope_,_$controller_,_$compile_) {
		
		$rootScope = _$rootScope_;
		modal = _$uibModal_;
		scope = $rootScope.$new();
		ctrl = _$controller_('ResultCtrl', {$scope: scope}, {result: content});
		$compile = _$compile_;
		
		$rootScope.result = content;
		elem = $compile('<img-result result="content"></img-result>')($rootScope);
		$rootScope.$digest();

		spyOn(modal, 'open').and.callFake(function(options){
            actualOptions = options;
            return fakeModal;
        });



		//	spyOn($modal, 'open').andReturn(fakeModal);
		
		//https://docs.angularjs.org/api/ng/function/angular.element#angular-s-jqlite

	}));

    it('it must show the image as well as its title', function() {
    	expect(ctrl.result).toBeDefined();
    	// console.log(ctrl.result);
    	// console.log(elem.find('div')[]);
    	//expect(elem.html()).toContain('image_1.jpg');
    	//elem.find('div')[0].click();
    });

    // it('it must display an error message if the content is invalid', function() {
    // 	// ctrl.result.contentTitle = 123;
    // 	// expect(ctrl.isValid).toBe(false);
    // });

    it('it create a modal when viewDetails is triggered', function() {
    	//ctrl.
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

var fakeModal = {
    result: {
        then: function (confirmCallback, cancelCallback) {
            //Store the callbacks for later when the user clicks on the OK or Cancel button of the dialog
            this.confirmCallBack = confirmCallback;
            this.cancelCallback = cancelCallback;
        }
    },
    close: function (item) {
        //The user clicked OK on the modal dialog, call the stored confirm callback with the selected item
        this.result.confirmCallBack(item);
    },
    dismiss: function (type) {
        //The user clicked cancel on the modal dialog, call the stored cancel callback
        this.result.cancelCallback(type);
    }
};

var modalOptions = {
    templateUrl: 'src/pages/upload-page/upload-results/result/result-modal.view.html',
	  controllerAs: 'vm',
	  size: 'sm',
	  //appendTo: element,
	  controller: function () {
	    var vm = this;
	    vm.result = ctrl.result; 
	  }
	};
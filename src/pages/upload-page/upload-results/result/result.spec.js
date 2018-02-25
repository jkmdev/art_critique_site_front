

describe('Upload Result Directive', function() {

 	var elem, ctrl, scope, modal;

 	var httpBackend, $compile, $rootScope;

	beforeEach(module('app.upload-page')); //include module
	beforeEach(module('templates')); //include precompiled templates

	beforeEach(inject(function (_$uibModal_, $httpBackend, $http, _$rootScope_,_$controller_,_$compile_) {
		
		//init variables
		$rootScope = _$rootScope_;
		$compile = _$compile_;
		scope = $rootScope.$new();

		//controller
		ctrl = _$controller_('ResultCtrl', {$scope: scope}, {result: content});
		

		//dom
		
		elem = $compile('<img-result result="result"></img-result>')($rootScope);
		$rootScope.result = mockResult;
		$rootScope.$digest();

  		//modal
  		// modal = _$uibModal_;
  		// spyOn(modal, 'open').and.callThrough();

  		//dump(angular.mock.dump(elem.isolateScope()));



		//	spyOn($modal, 'open').andReturn(fakeModal);
		
		//https://docs.angularjs.org/api/ng/function/angular.element#angular-s-jqlite

	}));

    it('it must show the image associated with the submission', function() {
    	expect(elem.find('img').attr('ng-src')).toEqual('../assets/images/image_1.jpg');
    });

    it('it must show the text associated with a submission', function() {
    	expect(elem.find('div').eq(1).text().trim()).toBe('image_1.jpg');
    });

    // // it('it must display an error message if the content is invalid', function() {
    // // 	// ctrl.result.contentTitle = 123;
    // // 	// expect(ctrl.isValid).toBe(false);
    // // });

    // it('it creates a modal when viewDetails is triggered', function() {
    // 	expect(modal.open).not.toHaveBeenCalled();
    // 	//elem.find('div')[0].triggerHandler('click');
    // 	//expect(modal.open).toHaveBeenCalled();
    // });

});

//mocked data

var mockResult = {
	 contentId: 1,
	 contentTitle:"image_1.jpg",
	 uploaderId: 123,
	 dateUploaded: 1991,
	 uploaderComments: 
	 	{goal: "create best other", need: "Not sure.", other: "..."}
	 ,
	 userComments: [
	 	{
	 		comment: "This is one comment. Good, bad, ugly, anything.",
	 		rating: 4
	 	},
	 	{
	 		comment: "Hey there, love your stuff!",
	 		rating: 6
	 	}
	 ]
};

// var fakeModal = {
//     result: {
//         then: function (confirmCallback, cancelCallback) {
//             //Store the callbacks for later when the user clicks on the OK or Cancel button of the dialog
//             this.confirmCallBack = confirmCallback;
//             this.cancelCallback = cancelCallback;
//         }
//     },
//     close: function (item) {
//         //The user clicked OK on the modal dialog, call the stored confirm callback with the selected item
//         this.result.confirmCallBack(item);
//     },
//     dismiss: function (type) {
//         //The user clicked cancel on the modal dialog, call the stored cancel callback
//         this.result.cancelCallback(type);
//     }
// };

// var modalOptions = {
//     templateUrl: 'src/pages/upload-page/upload-results/result/result-modal.view.html',
// 	  controllerAs: 'vm',
// 	  size: 'sm',
// 	  //appendTo: element,
// 	  controller: function () {
// 	    var vm = this;
// 	    vm.result = ctrl.result; 
// 	  }
// 	};
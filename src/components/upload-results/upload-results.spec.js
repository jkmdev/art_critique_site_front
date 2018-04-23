//
// describe('imgUploadResults directive: ', function() {
//
//  	var elem, ctrl, scope, modal;
//
//  	var httpBackend, $compile, $rootScope, $document;
//
// 	beforeEach(module('app.upload-page')); //include module
// 	beforeEach(module('templates')); //include precompiled templates
//
// 	beforeEach(inject(function (_$uibModal_, $httpBackend, $http, _$rootScope_,_$controller_,_$compile_, _$document_) {
//
// 		//init
// 		$rootScope = _$rootScope_;
// 		$compile = _$compile_;
// 		$document = _$document_;
// 		scope = $rootScope.$new();
//
// 		//controller
// 		ctrl = _$controller_('UploadCtrl', {$scope: scope}, {results: content});
// 		httpBackend = $httpBackend;
//         httpBackend.whenGET('src/data/content.json').respond(
//             200, content
//         );
//
//
// 		//dom
// 		elem = $compile('<img-upload-results results="results"></img-upload-results>')($rootScope);
// 		$rootScope.results = content;
// 		$rootScope.$digest();
//
// 		//modal
// 		modal = _$uibModal_;
//   		spyOn(modal, 'open').and.callFake(function(){
//             //actualOptions = options;
//             return fakeModal;
//         });
//
//   		//other
// 	  		// content[0].contentTitle = 'Hey';
// 		    // 	$rootScope.$digest();
// 		    // 	dump(content);
// 		    // 	console.log(images.eq(1).attr('ng-src'));
//
// 	}));
//
// 	afterEach(function() {
//     });
//
//     it('should iterate over an array of results objects', function() {
//     	expect(ctrl.results).toBeDefined();
//     	expect(elem.find('img').length).toEqual(3);
//     });
//
//     it('should show images associated with submissions', function() {
//     	var images = elem.find('img');
//     	expect(images.eq(0).attr('ng-src')).toEqual('../assets/images/image_2.jpg');
//     	expect(images.eq(1).attr('ng-src')).toEqual('../assets/images/image_1.jpg');
//     	expect(images.eq(2).attr('ng-src')).toEqual('../assets/images/image_3.jpg');
//     });
//
//     it('should display title associated with submissions, sorted by date', function() {
//     	var divs = elem.find('div');
//     	expect(divs.eq(2).text().trim()).toEqual('image_2.jpg');
//     	expect(divs.eq(4).text().trim()).toEqual('image_1.jpg');
//     	expect(divs.eq(7).text().trim()).toEqual('image_3.jpg');
//     });
//
//     it('trigger modal when result is clicked', function() {
//     	elem.find('img-result').eq(1).triggerHandler('click');
//     	expect(modal.open).toHaveBeenCalled();
//     });
//
// });
//
// //mocked data
//
// var content =	[
// 	{"contentId": 1,
// 	 "contentTitle":"image_1.jpg",
// 	 "uploaderId": 123,
// 	 "dateUploaded": 1991,
// 	 "uploaderComments":
// 	 	{"goal": "create best other", "need": "Not sure.", "other": "..."}
// 	 ,
// 	 "userComments": [
// 	 	{
// 	 		"comment": "This is one comment. Good, bad, ugly, anything.",
// 	 		"rating": 4
// 	 	},
// 	 	{
// 	 		"comment": "Hey there, love your stuff!",
// 	 		"rating": 6
// 	 	}
// 	 ]
// 	},
//
// 	{"contentId": 2,
// 	 "contentTitle":"image_2.jpg",
// 	 "uploaderId": 123,
// 	 "dateUploaded": 1990,
// 	 "uploaderComments":
// 	 	{"goal": "Better linework", "need": "Crit on linework.", "other": "Not sure what to put here. :/"}
// 	 ,
// 	 "userComments": [
// 	 	{
// 	 		"comment": "What my foundation was. A war that was based on discrimination. Kendrick Lamar alight...",
// 	 		"rating": 4
// 	 	},
// 	 	{
// 	 		"comment": "Ayyo",
// 	 		"rating": 6
// 	 	}
// 	 ]
// 	},
//
// 	{"contentId": 3,
// 	 "contentTitle":"image_3.jpg",
// 	 "uploaderId": 123,
// 	 "dateUploaded": 1992,
// 	 "uploaderComments":
// 	 	{"goal": "Be better than DaVinci himself", "need": "to git gud", "other": "Wish my linework was better..."}
// 	 ,
// 	 "userComments": [
// 	 	{
// 	 		"comment": "I leik it.",
// 	 		"rating": 4
// 	 	},
// 	 	{
// 	 		"comment": "Daaaaa daaaaaa daaaaa daaaaa daaaaaa!",
// 	 		"rating": 6
// 	 	}
// 	  ]
// 	}
// ];
//
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
//
// //REFERENCES
//
// 	//https://docs.angularjs.org/api/ng/function/angular.element#angular-s-jqlite
//
// 	//examples of how an iterative directive should be tested:
// 		//https://github.com/angular/angular.js/blob/master/test/ng/directive/ngRepeatSpec.js

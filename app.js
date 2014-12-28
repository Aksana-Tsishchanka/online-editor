angular.module('listDocApp',[])
			.controller('ListDocCtrl', [function(){
				var self = this;

				self.docs = [
					{name: 'First Note', done: false},
					{name 'Second Note', done: false},
					{name: 'Done Note', done: true},
					{name: 'Last Note', done: false}
				];
			}]); 
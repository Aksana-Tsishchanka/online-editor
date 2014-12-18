
var editDocApp = angular.module('listDocApp',["ui.router"]);

				editDocApp.controller('ListDocCtrl', function($scope, $rootScope){
					window.console.log($rootScope);

					$scope.docs = [
						{name: 'First Note', size: 6, description: "Based on the powerful editing component"},
						{name: 'Second Note', size: 7, description: "You're encouraged"},
						{name: 'Done Note', size: 12, description: "I hope you enjoy Notepad++ as much as I enjoy coding it"},
						{name: 'Last Note', size: 14, description: "Sublime Text is a sophisticated text editor for code"}
					];
				}); 

				editDocApp.config(function($stateProvider) {
					$stateProvider
						.state('routerListDoc', {
							url: "/routerListDoc",
							templateUrl: "app/components/listDoc/viewListDoc.html"
						})
						.state('routerEditDoc', {
							url: "/routerEditDoc",
							templateUrl: "app/components/editDoc/viewEditDoc.html"
						})

					});
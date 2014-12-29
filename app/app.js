
var editDocApp = angular.module('listDocApp',["ui.router"]);


				editDocApp.service('DocsService', function() {

					var self = this;

					var docs = [
						{id: 1, name: 'First Note', size: 6, description: 'Based on the powerful editing component'},
						{id: 2, name: 'Second Note', size: 7, description: "You're encouraged"},
						{id: 3, name: 'Done Note', size: 12, description: "I hope you enjoy Notepad++ as much as I enjoy coding it"},
						{id: 4, name: 'Last Note', size: 14, description: "Sublime Text is a sophisticated text editor for code"}
					];

					
					self.save = function(doc) {
						if (doc == null ) {
							alert('new object');
						}
						//for existing doc
						else {
							for (i in docs) {
								if (docs[i].id == doc.id) {
									docs[i] = doc;
								}
							}
						}
					}

					self.delete = function(id) {
						for(i in docs) {
							if (docs[i].id == id) {
								docs.splice(i,1);
							} 
						}
					}

					self.list = function() {
						return docs;
					}


					self.getDoc = function (id) {
						for (i in docs ) {
							if (docs[i].id == id ) {
								return docs[i];
							} 
						}
					}

				});

				editDocApp.controller('ListDocCtrl', function($scope, DocsService){
					$scope.docs = DocsService.list();	
				}); 

				editDocApp.controller('EditDocCtrl', function($scope, DocsService, $stateParams){

					if (!angular.isUndefined($stateParams.id)) {
						var id = $stateParams.id;
						$scope.doc = DocsService.getDoc(id);
				}

					$scope.saveEditDoc = DocsService.save($scope.doc);
				}); 

				editDocApp.config(function($stateProvider, $urlRouterProvider) {
					 // For any unmatched url, redirect to /state1
 					$urlRouterProvider.otherwise("routerListDoc");
					$stateProvider
						.state('routerListDoc', {
							url: "/routerListDoc",
							templateUrl: "app/components/listDoc/viewListDoc.html",
							controller: "ListDocCtrl"
						})
						.state('routerEditDoc', {
							url: "/routerEditDoc/:id",
							templateUrl: "app/components/editDoc/viewEditDoc.html",
							controller: "EditDocCtrl"
						})

					});
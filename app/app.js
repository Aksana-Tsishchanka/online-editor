
var editDocApp = angular.module('listDocApp',["ui.router"]);


				editDocApp.service('DocsService', function() {
					var uid = 1;

					var docs = [
						{id: 1, 'name': 'First Note', 'size': 6, 'description': 'Based on the powerful editing component'},
						{id: 2, 'name': 'Second Note', 'size': 7, 'description': "You're encouraged"},
						{id: 3, 'name': 'Done Note', 'size': 12, 'description': "I hope you enjoy Notepad++ as much as I enjoy coding it"},
						{id: 4, 'name': 'Last Note', 'size': 14, 'description': "Sublime Text is a sophisticated text editor for code"}
					];

					this.save = function(doc) {
						if (doc.id == null ) {
							doc.id = uid++;
							contacts.push(doc);
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

					this.get = function (id) {
						for (i in docs ) {
							if (docs[i].id == id ) {
								return docs[i];
							} 

						}
					}


					this.delete = function(id) {
						for(i in docs) {
							if (docs[i].id == id) {
								docs.splice(i,1);
							} 
						}
					}

					this.list = function() {
						return docs;
					}
				});

				editDocApp.controller('ListDocCtrl', function($scope, DocsService){
					
					$scope.docs = DocsService.list();	
					

				}); 

				editDocApp.controller('EditDocCtrl', function($scope, DocsService, $stateParams){

					console.log($stateParams);

					$scope.docs = DocsService.list();

					$scope.saveDoc = function () {
        				DocsService.save($scope.newdoc);
        					$scope.newdoc = {};
    					}

    				$scope.edit = function($stateParams) {
						$scope.newdoc == angular.copy(DocsService.get(id)); 
					}	
										
					
				}); 

				editDocApp.config(function($stateProvider) {

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
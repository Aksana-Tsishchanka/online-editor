var editDocApp = angular.module('listDocApp',["ui.router", "ui.bootstrap"]);

    editDocApp.service('DocsService', function() {
        var docs = [
            {id: 1, name: 'First Note', size: 6, description: 'Based on the powerful editing component'},
            {id: 2, name: 'Second Note', size: 7, description: "You're encouraged"},
            {id: 3, name: 'Done Note', size: 12, description: "I hope you enjoy Notepad++ as much as I enjoy coding it"},
            {id: 4, name: 'Last Note', size: 14, description: "Sublime Text is a sophisticated text editor for code"}
        ];
                  
        this.save = function(doc) {
            if (doc == null ) {
               // alert('new object');
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

        this.getDoc = function (id) {
            for (i in docs ) {
                if (docs[i].id == id ) {
                    return docs[i];
                } 
            }
        }
    });                

    editDocApp.config(function($stateProvider, $urlRouterProvider) {
        // For any unmatched url, redirect to /viewListDoc
        $urlRouterProvider.otherwise("/list");
        $stateProvider
                .state('list', {
                    url: "/list",
                    templateUrl: "app/components/listDoc/viewListDoc.html",
                    controller: "ListDocCtrl"
                })
                .state('edit', {
                    url: "/edit/:id",
                    templateUrl: "app/components/editDoc/viewEditDoc.html",
                    controller: "EditDocCtrl"
                })
    });

    editDocApp.controller('TabsCTRL', function($rootScope, $scope, $state){
        
        $rootScope.tabs = [
            { heading: "Documents", route: "list", active: false},
            { heading: "Edit document", route: "edit", active: false}     
        ];

        $scope.tabs = $rootScope.tabs;

        $scope.go = function(route) {
            $state.go(route);
        };

        $scope.active = function(route) {
            return $state.is(route);
        };

        $scope.$on("$stateChangesSuccess", function() {
            $scope.tabs.forEach(function(tab) {
                tab.active = $scope.active(tab.route)
            });
        });
    });

    editDocApp.directive("editor", function() {
            var directive = {};

            directive.restrict = "A";

            directive.template = "<button id=\"toggle_bolt\" onclick=\"document.execCommand(\'bold\');\" class=\"btn-sm btn-info\">B</button>";
/*
            "<button id="toggle_bolt" onclick="document.execCommand('italic');" class="btn-sm btn-primary">I</button>" +

            "<button id="toggle_bolt" onclick="document.execCommand('underline');" class="btn-sm btn-info">U</button>";
            */

            return directive;

    });

var editDocApp = angular.module('listDocApp',["ui.router"]);

    editDocApp.service('DocsService', function() {
        var docs = [
            {id: 1, name: 'First Note', size: 6, description: 'Based on the powerful editing component'},
            {id: 2, name: 'Second Note', size: 7, description: "You're encouraged"},
            {id: 3, name: 'Done Note', size: 12, description: "I hope you enjoy Notepad++ as much as I enjoy coding it"},
            {id: 4, name: 'Last Note', size: 14, description: "Sublime Text is a sophisticated text editor for code"}
        ];
                  
        this.save = function(doc) {
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
        $urlRouterProvider.otherwise("home.list");
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
editDocApp.controller('EditDocCtrl', function($scope, DocsService, $stateParams){
    if (typeof ($stateParams.id) != "undefined") {
        var id = $stateParams.id;
        $scope.doc = DocsService.getDoc(id);
    }
    
    $scope.saveEditDoc = DocsService.save($scope.doc);
}); 

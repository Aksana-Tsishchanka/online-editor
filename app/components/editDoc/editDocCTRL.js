editDocApp.controller('EditDocCtrl', function($scope, $rootScope, DocsService, $stateParams){
	
	$rootScope.tabs[1].active = true;
	$rootScope.tabs[0].active = false;	

    if (typeof ($stateParams.id) != "undefined") {
        var id = $stateParams.id;
        $scope.doc = DocsService.getDoc(id);
    }
    
    $scope.saveEditDoc = DocsService.save($scope.doc);
}); 

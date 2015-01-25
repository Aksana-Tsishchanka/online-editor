editDocApp.controller('EditDocCtrl', function($scope, $rootScope, DocsService, $stateParams, $sce){
	
	$rootScope.tabs[1].active = true;
	$rootScope.tabs[0].active = false;	

    if (typeof ($stateParams.id) != "undefined") {
        var id = $stateParams.id;
        $scope.doc = DocsService.getDoc(id);
    }
    
    $scope.saveEditDoc = function() {
    		$scope.$watch('doc.description', function(v) {
				// so long as we are not in the
				// $compile phase
				if (v) {
				// Render the htmlBody as trusted HTML
				$scope.doc.descriptionHtmlSafe =
					$sce.trustAsHtml($scope.doc.description);

				$scope.doc.description = $scope.doc.descriptionHtmlSafe;					
				}


			});

    		DocsService.save($scope.doc);

    }


    
		
		
	
}); 

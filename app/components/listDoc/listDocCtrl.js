editDocApp.controller('ListDocCtrl', ['$scope','$rootScope','DocsService','$sce', function($scope, $rootScope, DocsService, $sce){
	
	$rootScope.tabs[0].active = true;
	$rootScope.tabs[1].active = false;

	$scope.docs = DocsService.list();


	$scope.delete = function(id) {
		DocsService.delete(id);
	};
	
}]);
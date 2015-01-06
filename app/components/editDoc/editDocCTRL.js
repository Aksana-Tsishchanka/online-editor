editDocApp.controller('ListDocCtrl', function($scope, DocsService){
	$scope.docs = DocsService.list();   
});
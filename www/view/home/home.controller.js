	mainModule.controller('homeCtrl', function($scope, homeRest, $state, $timeout, $stateParams) {
		$scope.doRefresh = function() {
			$scope.getData();
			$scope.$broadcast('scroll.refreshComplete');
		};

		$scope.getData = function() {
		}
	
		$scope.getData();
	});

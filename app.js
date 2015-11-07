
angular.module('waitstaff', [])
	.controller('waitstaffController', function($scope) {

		$scope.price;
		$scope.taxRate;
		$scope.tip;

		$scope.subTotal = 0.00;
		$scope.displayTip = 0;
		$scope.total = 0.00;

		$scope.tipTotal = 0.00;
		$scope.mealCount = 0;
		$scope.averageTip = 0.00;

		$scope.submit = function() {
			$scope.subTotal = $scope.price + ($scope.taxRate/100 * $scope.price);
			$scope.displayTip = $scope.tip/100 * $scope.subTotal;
			$scope.total = $scope.subTotal + $scope.displayTip;

			$scope.tipTotal += ($scope.tip/100 * $scope.subTotal);
			$scope.mealCount++;
			$scope.averageTip = $scope.tipTotal/$scope.mealCount;
		}

		$scope.reset = function() {
			$scope.price = ""; 
			$scope.taxRate = ""; 
			$scope.tip = "";
			$scope.subTotal = 0.00;
			$scope.displayTip = 0;
			$scope.total = 0.00;
			$scope.tipTotal = 0.00;
			$scope.mealCount = 0;
			$scope.averageTip = 0.00;
		}
	})
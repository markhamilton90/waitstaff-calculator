
angular.module('waitstaff', ['ngRoute', 'ngAnimate'])
	.config(function($routeProvider) {
		$routeProvider.when('/', {
			templateUrl : 'home.html'
		}).when('/meal', {
			templateUrl : 'meal.html',
			controller : 'MealCtrl'
		}).when('/earnings', {
			templateUrl : 'earnings.html',
			controller : 'MealCtrl'
		}).otherwise('/');
	})
	.run(function($rootScope) {
		$rootScope.price;
		$rootScope.taxRate;
		$rootScope.tip;

		$rootScope.subTotal = 0;
		$rootScope.displayTip = 0;
		$rootScope.total = 0;

		$rootScope.tipTotal = 0;
		$rootScope.mealCount = 0;
		$rootScope.averageTip = 0;
	})
	.controller('MealCtrl', function($scope, $rootScope) {

		$scope.submit = function() {
			$rootScope.price = $scope.price;
			$rootScope.taxRate = $scope.taxRate;
			$rootScope.tip = $scope.tip;
			$rootScope.subTotal = $rootScope.price + ($rootScope.taxRate/100 * $rootScope.price);
			$rootScope.displayTip = ($rootScope.tip/100) * $rootScope.subTotal;
			$rootScope.total = $rootScope.subTotal + $rootScope.displayTip;

			$rootScope.tipTotal += $rootScope.tip/100 * $rootScope.subTotal;
			$rootScope.mealCount++;
			$rootScope.averageTip = $rootScope.tipTotal/$rootScope.mealCount;
		}

		$scope.cancel = function() {
			$rootScope.price = ""; 
			$rootScope.taxRate = ""; 
			$rootScope.tip = "";
		}

		$scope.reset = function() {
			$scope.cancel();
			$rootScope.subTotal = 0;
			$rootScope.displayTip = 0;
			$rootScope.total = 0;
			$rootScope.tipTotal = 0;
			$rootScope.mealCount = 0;
			$rootScope.averageTip = 0;
		}

	});
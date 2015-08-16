'use strict';

 var app = angular.module('shreyasApp');

app.controller('headerViewCtrl', ['$scope', '$rootScope', '$location', function($scope, $rootScope, $location) {
	$scope.navigationItems = [ 
		{
			"name": "Home"
		},
		{
			"name": "Education"
		},
		{
			"name": "Skills"
		},
		{
			"name": "Experience"
		},
		{
			"name": "Projects"
		},
		{
			"name": "About"
		},
		{
			"name": "Contact"
		}
	];
	$scope.setRoute = function (index) {
		$location.path(($scope.navigationItems[index].name).toLowerCase());
	};
	
}]);
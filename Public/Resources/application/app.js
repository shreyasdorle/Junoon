'use strict';

var app = angular.module('shreyasApp' , ['ngRoute']);

app.controller ('MainCtrl' , [ '$scope' , function($scope){
	$scope.shreyas = "Shreyas Dorle Portfolio";
	}
]);
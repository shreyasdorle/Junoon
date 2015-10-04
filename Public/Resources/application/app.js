'use strict';

var app = angular.module('shreyasApp' , ['ngRoute']);

app.controller('MainCtrl' , ['$scope', '$rootScope', function($scope, $rootScope) {
	
	}
]);

app.config (['$routeProvider', function($routeProvider) {
	$routeProvider.
		when ('/home', {
			templateUrl: 'Resources/main/home/views/home.html',
			controller: 'homeViewCtrl'
			}
		).
		when ('/education', {
			templateUrl: 'Resources/main/education/views/education.html',
			controller: 'educationViewCtrl'
			}
		).
		when ('/skills', {
			templateUrl: 'Resources/main/skills/views/skills.html',
			controller: 'skillsViewCtrl'
			}
		).
		when ('/experience', {
			templateUrl: 'Resources/main/experience/views/experience.html',
			controller: 'experienceViewCtrl'
			}
		).
		when ('/projects', {
			templateUrl: 'Resources/main/projects/views/projects.html',
			controller: 'projectViewCtrl'
			}
		).
		when ('/about', {
			templateUrl: 'Resources/main/about/views/about.html',
			controller: 'aboutViewCtrl'
			}
		).
		when ('/contact', {
			templateUrl: 'Resources/main/contact/views/contact.html',
			controller: 'contactViewCtrl'
			}
		);
}]);

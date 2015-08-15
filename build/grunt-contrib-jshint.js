'use strict';

module.exports = function(grunt) {
	grunt.config.set('jshint', {
		// Take the values which was defined in the .jshintrc file
		// Check for all the js files in public folder except js files in the public/js folder
		jshint: {
			options: {
				
				jshintrc: '.jshintrc'
			},
      		files: {
      			
        		src: ['Public/**/*.js', '!Public/js/**/*.js']
      		},
		}
	});

grunt.loadNpmTasks('grunt-contrib-jshint');

}
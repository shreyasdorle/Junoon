'use strict';

module.exports = function(grunt) {
	grunt.config.set('watch', {
		// Watch all the js , html and css files
		scripts: {
			files: ['Public/**/*.js'],
			tasks: ['jshint' , 'injector', 'notify:build' ],
			options: {
				spawn: false
			}
		},
		template: {
			files: ['Public/*.html', 'Public/Resources/main/**/*.html'],
			tasks: [],
			options: {
				spawn: false
			}
		},
		css: {
			files: ['Public/Styles/CSS/Less/Portfolio/*.less'],
			tasks: ['less' , 'injector', 'notify:css'],
			options: {
				spawn: false
			}
		}		
	})
	
	grunt.loadNpmTasks('grunt-contrib-watch');
};

'use strict';

module.exports = function(grunt) {
  grunt.config.set('less', {
  	// Converts portfolio.less file to portfolio.min.css
   less: {
		options: {
			compress: true
		},
		files: {
			"Public/Styles/CSS/portfolio.min.css" : "**/Styles/CSS/Less/Portfolio/portfolio.less"
		}
   }

  });

  grunt.loadNpmTasks('grunt-contrib-less');
};

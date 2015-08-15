'use strict';
// Shows Notification message 
module.exports = function(grunt){
grunt.config.set('notify', {
		css: {
			options: {
				message: 'LESS Compiled'
			}
		},
		build: {
			options: {
				message: 'Project is built'	
			}
		}
});

grunt.loadNpmTasks('grunt-notify');

};
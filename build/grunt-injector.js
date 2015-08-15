'use strict';
//Used the function to replace the unwanted prefix '/Public/' which causes error.
//Inject library according to the prioriteis needed to the apllication.
var ext = function(filePath){
	var fileExtension = filePath.split('.');
	return fileExtension[fileExtension.length-1];
}

module.exports = function(grunt) {
	grunt.config.set('injector',{
		injector: {
			options: {
				transform: function(filePath) {
							var filePathName = filePath.replace('/Public/' , '');
							var extension = ext (filePath);

							if (extension === 'js') {
								return '<script rel="javascript" src="' + filePathName + '"></script>'
							} else if (extension === 'css') {
								return '<link rel="stylesheet" href="' + filePathName +  '"/>'
							}
				}
			},
			files: {
				'Public/index.html' : [
											'Public/js/jquery/*.js' , 
											'Public/js/angular-1.4.3/angular.min.js' ,
											'Public/js/angular-1.4.3/angular-route.min.js' ,
											'Public/js/bootstrap-3.3.5/*.js' ,
											'Public/Resources/application/app.js',
											'Public/Resources/**/*.js', 
											'Public/Styles/CSS/bootstrap.min.css' , 
											'Public/Styles/CSS/Portfolio.min.css'
									   ]
			}
		}
	});
	grunt.loadNpmTasks('grunt-injector');

};
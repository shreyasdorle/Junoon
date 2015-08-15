'use strict';

//exports module into grunt
module.exports = function(grunt) {

  //read initial config file package.json
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
  });

  // Load tasks and configuration. 
  grunt.loadTasks('build');

  // Register alias tasks.
  grunt.registerTask('dev',
    'This is for the dev environment',
    ['jshint', 'less' , 'injector', 'open', 'connect', 'notify', 'watch']);

  //Load default tasks
  grunt.registerTask('default', ['dev']);

}



(function(){
  "use strict";

  const webpackConfig = require('./webpack.config');

	module.exports = function(grunt) {

	    //grunt wrapper function
	    grunt.initConfig({
	      pkg: grunt.file.readJSON('package.json'),

	      //grunt task configuration will go here

        webpack: {
           options: {
             stats: !process.env.NODE_ENV || process.env.NODE_ENV === 'development'
           },
           prod: webpackConfig,
           dev: Object.assign({ watch: true }, webpackConfig)
        }

  			karma: {
  			  unit: {
  				configFile: 'karma.conf.js'
  			  }
  			}

	    });

		  //load grunt tasks
      grunt.loadNpmTasks('grunt-webpack');
      grunt.loadNpmTasks('webpack-dev-server');
	    grunt.loadNpmTasks('grunt-karma');

	    grunt.registerTask('test', ['karma']);

	}

})();

				// options: {
				// 	files: [
				// 		'app/bower_components/angular/angular.js',
	   //    				'app/bower_components/angular-mocks/angular-mocks.js',
	   //    				'app/app.module.js',
	   //    				'app/src/**/*.module.js',
	   //    				'app/src/**/*.directive.js',
				//       	'app/src/pages/rating-page/*.spec.js'
				// 	]
				// },

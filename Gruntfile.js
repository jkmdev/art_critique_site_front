(function(){
  "use strict";

	module.exports = function(grunt) {

	    //grunt wrapper function
	    grunt.initConfig({

	        pkg: grunt.file.readJSON('package.json'),
	          //grunt task configuration will go here
    			karma: {
    			  unit: {
    				configFile: 'karma.conf.js'
    			  }
    			},
          serve: {
              options: {
                  port: 8000,
                  'aliases': {
                    'src/app.module.js': {
                        //tasks: ['html2js', 'concat'],
                        tasks: ['html2js', 'concat'],
                        output: 'main.js'
                    }
                  }
              }
          },
          sass: {
              options: {
                  sourceMap: true
              },
              dist: {
                  files: {
                      'src/assets/css/test.css': 'src/assets/css/test.scss'
                  }
              }
          },
          uglify: {
            my_target: {
              files: {
                'dest/output.min.js': ['src/input1.js', 'src/input2.js']
              }
            }
          }

	    });

		//load grunt tasks
	    grunt.loadNpmTasks('grunt-karma');
      grunt.loadNpmTasks('grunt-serve');
      grunt.loadNpmTasks('grunt-contrib-uglify');
      grunt.loadNpmTasks('grunt-sass');

	    grunt.registerTask('test', ['karma']);
      //grunt.registerTask('connect', ['connect']);
      //grunt.registerTask('uglify', ['uglify']);

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

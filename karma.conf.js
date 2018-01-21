// Karma configuration
// Generated on Sun Oct 15 2017 22:35:42 GMT-0400 (Eastern Daylight Time)

module.exports = function(config) {
  config.set({

    basePath: '',
    frameworks: ['jasmine'],

    // list of files / patterns to load in the browser
    files: [
      'bower_components/angular/angular.js',
      'bower_components/angular-mocks/angular-mocks.js',
      'bower_components/angular-ui-router/release/angular-ui-router.js',
      'bower_components/karma-read-json/karma-read-json.js',
      'bower_components/ng-file-upload-shim/ng-file-upload-shim.min.js',
      'bower_components/ng-file-upload/ng-file-upload.js',
      'bower_components/angular-bootstrap/ui-bootstrap.min.js',
      'bower_components/angular-bootstrap/ui-bootstrap-tpls.min.js',
      'app/app.module.js',
      'app/src/models/*.model.js',
      'app/src/**/*.module.js',
      'app/src/**/*.directive.js',
      'app/src/**/*.view.html',
      'app/src/**/*.spec.js',
      {pattern:'app/src/data/*.json', included: false}
    ],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'app/src/**/*.view.html': ['ng-html2js'],
      'app/src/**/*.spec.js': ['coverage']
    },

    ngHtml2JsPreprocessor: 
      {
        stripPrefix: 'app/',
        moduleName: 'templates'
      },
      // {
      //   '**/lib/*.js': 'coverage'
      // }
    

    reporters: ['progress', 'coverage'],

        // list of files to exclude
    // exclude: [
    // ]


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
   // reporters: ['PhantomJS'],


    // web server port
    //port: 9999,


    // enable / disable colors in the output (reporters and logs)
    


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
   // logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false

    // Concurrency level
    // how many browser should be started simultaneous
    //concurrency: Infinity
  })
}

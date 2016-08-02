module.exports = function (grunt) {
  'use strict';

  // Require it at the top and pass in the grunt instance
  require('time-grunt')(grunt);

  // Project configuration
  grunt.initConfig({
      // Metadata
      pkg: grunt.file.readJSON('package.json'),
      // Task configuration
      jshint: {
          files: [
            'Gruntfile.js',
            'config/*.js',
            'specs/*.js',
            'page/*.js',
            'components/*.js'
          ],
          options: {
              node: true,
              curly: true,
              eqeqeq: true,
              immed: true,
              latedef: true,
              newcap: true,
              noarg: true,
              sub: true,
              undef: true,
              unused: true,
              eqnull: true,
              boss: true,
              'jshintrc': '.jshintrc'
          },
          gruntfile: {
              src: 'Gruntfile.js'
          }
      },
      shell: {
        options: {
            stderr: true
        },
        development: {
            command: 'npm run test-all-dev'
        },
        production: {
            command: 'npm run test-all-prod'
        }
      }
  });

  /**
   * runexec
   *
   * Required by running node files in windows
   * https://www.npmjs.com/package/shelljs
   *
   * Run a command specified by the target parameter.
   */
  grunt.registerTask('runexec', "Run a command specified by the target parameter", function(target) {
  	const shell = require('shelljs');
    let exec = '';

    if (target === 'development') {
      exec = 'npm run test-all-dev';
    } else if (target === 'production') {
      exec = 'npm run test-all-prod';
    }

    if (exec !== '') {
      shell.exec(exec);
    } else
      grunt.log.write('Nothing to do, invalid target specified: "' + target+'"');
  });

  // These plugins provide necessary tasks
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-selenium-webdriver');
  grunt.loadNpmTasks('grunt-shell');

  // Default task.
  grunt.registerTask('default', ['jshint']);

  // Development tests.
  grunt.registerTask('development', 'run development tests', [
    'jshint',
    'selenium_start',
    'shell:development',
    'selenium_stop'
  ]);

  // Production tests.
  grunt.registerTask('production', 'run production tests', [
    'jshint',
    'selenium_start',
    'shell:production',
    'selenium_stop'
  ]);
};

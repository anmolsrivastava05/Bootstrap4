'use strict'

module.exports= function(grunt) {

  require('time-grunt')(grunt);

  require('jit-grunt')(grunt);

  grunt.initConfig({
    sass: {
      dist:{
        files: {
          'css/styles.css':'css/styles.scss'
        }
      }
    },

    watch: {
      files: 'css/*.scss',
      taks: ['sass']
    },

    browserSync: {
      dev: {
        bsFiles: {
          src: [
            'css/*.css',
            '*.html',
            'js/*.js'
          ]
        },
        options: {
          watchTasks: true;
          server: {
                  baseDir: "./"
        }
      }
    }
  }

  });

  grunt.registerTask('css',['sass']);
  grunt.registerTask('default', ['browserSync', 'watch']);
}

'use strict';
module.exports = function(grunt) {
  grunt.initConfig({
    sass: {
      dev: {
        options: {
          style: 'compressed',
          sourcemap: 'auto'
          // Uncomment the below line to include outside directories as well.
          // loadPath: ['location/of/other/sass']
        },
        files: [{
          // Files in the /sass/ directory will go to /static/css/ when processed.
          expand: true,
          cwd: 'sass',
          src: ['*.scss'],
          dest: 'static/css',
          ext: '.css'
        }]
      }
    },
 concat: {
    dist: {
      src: [
        'bower_components/jquery/dist/jquery.min.js', 
        'bower_components/jquery.smooth-scroll/jquery.smooth-scroll.min.js',
        'static/javascript/jquery.unveil.js',
        'static/javascript/site-unveil.js',
        'static/javascript/site-smooth-scroll.js',                 
        'static/javascript/site-js-menu.js',
        'static/javascript/tipue.js',
        'static/javascript/site-tipue.js',                          
        'static/javascript/site.js'         
      ],
      dest: 'static/javascript/dist/scripts.js'
    },
    velocity: {
      src: ['bower_components/velocity/velocity.min.js','bower_components/velocity/velocity.ui.min.js'],
      dest: 'static/javascript/dist/scripts-velocity.js'
    },
    listjs: {
      src: [
      'bower_components/listjs/dist/list.min.js',
      'static/javascript/site-listjs.js'],
      dest: 'static/javascript/dist/scripts-listjs.js'
    },
    masonry: {
      src: [
      'bower_components/imagesloaded/imagesloaded.pkgd.min.js',
      'bower_components/masonry/dist/masonry.pkgd.min.js',
      'static/javascript/site-masonry.js'
      ],
      dest: 'static/javascript/dist/scripts-masonry.js'
    },
    modernize: {
      src: ['bower_components/html5shiv/dist/html5shiv.min.js','bower_components/respond/dest/respond.min.js'],
      dest: 'static/javascript/modernize/modernize.min.js'
    }
  },

  uglify: {
    options: {
      mangle: {
        except: ['jQuery']
      }
    },
    my_target: {
      files: {
        'static/javascript/dist/scripts.min.js': ['static/javascript/dist/scripts.js'],
        'static/javascript/dist/scripts-listjs.min.js': ['static/javascript/dist/scripts-listjs.js'],
        'static/javascript/dist/scripts-masonry.min.js': ['static/javascript/dist/scripts-masonry.js']
      }
    }
  },

    // WHEN FILES CHANGE, RUN THE ABOVE TASKS ALONG WITH BUILD
    watch: {
      concat : {
        files:  'static/javascript/**/*.js',
        tasks: ['concat', 'uglify', 'build'],
         nonull: true,
      },
      sass : {
        files: 'sass/**/*.scss',
        tasks: ['sass', 'build'],
         nonull: true,
      }
    }

  });

  // THIS LOADS THE TASKS WE NEED ABOVE IN FROM OUR NPM
  // Note, that we need to have these installed through the package.json file as well

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');


  // NEVER REMOVE THESE LINES, OR ELSE YOUR PROJECT MAY NOT WORK
  require('./options/generatorOptions.js')(grunt);
  grunt.loadTasks('tasks');
};

module.exports = function (grunt) {

grunt.initConfig({
  critical: {
    dist: {
      options: {
        base: './'
      },
      // The source file
      src: 'index.html',
      // The destination file
      dest: 'index.html'
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

  // Load the plugins
  grunt.loadNpmTasks('grunt-critical');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Default tasks.
  grunt.registerTask('default', ['critical']);

};


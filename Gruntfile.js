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
      dest: 'dest/index.html'
      }
    },
  uglify: {
    my_target: {
      files: {
        'dest/js/output.min.js': ['js/*.js']
      }
    }
  },
  cssmin: {
  target: {
    files: [{
      expand: false,
      cwd: 'release/css',
      src: ['*.css', '!*.min.css'],
      dest: 'dest/css',
      ext: '.min.css'
    }]
  }
}
  });

  // Load the plugins
  grunt.loadNpmTasks('grunt-critical');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  // Default tasks.
  grunt.registerTask('default', ['critical', 'uglify', 'cssmin']);


};


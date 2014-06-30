module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    mocha: {
      options: {
        run: true,
        reporter: 'Spec',
        log: false
      },
      src: [
        'app/elements/**/test/runner.html',
        // '!**/index.html',
      ]
    }
  });

  grunt.loadNpmTasks('grunt-mocha');
  grunt.registerTask('default', ['mocha']);
};

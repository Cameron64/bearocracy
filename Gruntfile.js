
module.exports = function(grunt) {
    // Project configuration.
   /* grunt.registerTask('min',function(){
console.log("min");

    });
    grunt.registerTask('default',['min']);*/

    grunt.initConfig({
        uglify: {
            dist: {
                files: {
                    'JS/magic.min.js': 'JS/magic.js', 'Controllers/min/banner.min.js':'Controllers/banner.js', 'Controllers/min/main.min.js':'Controllers/main.js','Controllers/min/volume.min.js':'Controllers/volume.js'
                }
            }
        },
        watch: {
            files: ['JS/*.js','Controllers/*.js'],
            tasks: ['uglify:dist']
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', [
        'uglify'
    ]);
};
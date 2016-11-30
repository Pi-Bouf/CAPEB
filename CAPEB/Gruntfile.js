module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            build: {
                src: 'sources/scripts/<%= pkg.name %>.js',
                dest: '../scripts/<%= pkg.name %>.min.js'
            }
        },
        compass: {
            prod: {
                options: {
                    config: 'config.rb',
                    outputStyle: 'compressed'
                }
            },
            watch: {
                options: {
                    watch: true,
                    config: 'config.rb',
                    outputStyle: 'expanded'
                }
            }
        },
        imagemin: {
            dynamic: {
                files: [{
                    expand: true,
                    cwd: 'sources/images/',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: '../images/'
                }]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-imagemin');

    grunt.registerTask('default', ['compass:watch']);
    grunt.registerTask('prod', ['uglify', 'compass:prod', 'imagemin']);

};
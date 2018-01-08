module.exports = function(grunt) {

    require('load-grunt-tasks')(grunt); // [BABEL] npm install --save-dev load-grunt-tasks

    grunt.initConfig({
        jshint: {
            files: ['gruntfile.js', 'js/*.js', 'js/*.js'],
            options: {
                esversion : 6,
                globals: {
                    jQuery: true
                }
            }
        },
        watch: {
            files: ['<%= jshint.files %>'],
            tasks: ['jshint']
        },
        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: 'css',
                    src: ['*.css', '!*.min.css'],
                    dest: 'css',
                    ext: '.min.css'
                }]
            }
        },
        uglify: {
            my_target: {
                files: {
                    'js/minified.js': ['js/dev_script.js','js/dev_script2.js']
                }
            }
        },
        babel: {
            options: {
                sourceMap: true,
            },
            dist: {
                files: {
                    'js/dev_script.js': 'js/script.js',
                    'js/dev_script2.js': 'js/script2.js'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['jshint','babel','uglify','cssmin']);
};
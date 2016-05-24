module.exports = function (grunt) {

    grunt.initConfig({
        concat: {
            options: {
                separator: ';'
            }
            , dist: {
                src: ['js/src/*.js'],
                dest: 'js/dist/script.main.js'
            }
        }
        , uglify: {
            dist: {
                src: ['js/dist/script.main.js'],
                dest: 'js/dist/script.main.min.js'
            }
        },
        csso: {
          compress: {
            options: {
              report: 'gzip'
            },
            files: {
              'css/dist/style.main.min.css': ['css/*.css']
            }
          }
        }
        , watch: {
            concat: {
                files: '<%= concat.dist.src %>',
                tasks: 'concat' 
            },
            uglify: {
                files: '<%= uglify.dist.src %>',
                tasks: 'uglify'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-csso');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['concat', 'uglify', 'csso']);

};
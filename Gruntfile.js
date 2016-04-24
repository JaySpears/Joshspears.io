module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		// Converts SASS to CSS
		sass: {
			dist: {
				options: {
					style: 'expanded',
					noCache: true
				},
				files: {
					'public/assets/css/styles.css': 'public/assets/css/src/styles.scss'
				}
			}
		},

		// Minifies CSS
		cssmin: {
			minify: {
				expand: true,
				cwd: 'public/assets/css',
				src: ['styles.css'],
				dest: 'public/assets/css',
				ext: '.min.css'
			}
		},

		autoprefixer: {
			options: {
				browsers: ['last 2 versions', 'ie 8', 'ie 9']
			},
			main: {
				src: 'public/assets/css/styles.css'
			}
		},

		// Minify JS
		uglify: {
			scripts: {
				src: 'public/assets/js/src/*.js',
				dest: 'public/assets/js/main.min.js'
			}
		},

		// Watch command
		watch: {
			styles: {
				files: ['public/assets/css/src/*.scss', 'public/assets/css/styles.css'],
				tasks: 'dist-styles',
				options: {
					livereload: true
				}
			},
			scripts:{
				files: 'public/assets/js/src/*.js',
				tasks: 'dist-scripts',
			}
		}
	});

	// Loads grunt dependencies
	grunt.loadNpmTasks('grunt-autoprefixer');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');

	// Scripts distribution task
	grunt.registerTask('dist-scripts', ['uglify']);

	// Styles distribution task
	grunt.registerTask('dist-styles', ['sass', 'autoprefixer', 'cssmin']);

	// Full distribution task
	grunt.registerTask('dist', ['dist-styles', 'dist-scripts']);

	// Default grunt task
	grunt.registerTask('default', ['dist', 'watch']);

};

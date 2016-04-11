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

		// Watch command
		watch: {
			styles: {
				files: 'public/assets/css/src/*.scss',
				tasks: 'dist-styles',
				options: {
					livereload: true,
				}
			},
			scripts:{
				files: ['public/app/app.js']
			}
		}
	});

	// Loads grunt dependencies
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-watch');

	// Styles distribution task
	grunt.registerTask('dist-styles', ['sass', 'cssmin']);

	// Full distribution task
	grunt.registerTask('dist', ['dist-styles']);

	// Default grunt task
	grunt.registerTask('default', ['dist', 'watch']);

};

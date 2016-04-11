module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		auto_install: {
			local: {},
			subdir: {
				options: {
					cwd: 'subdir',
					stdout: true,
					stderr: true,
					failOnError: true,
					npm: '--production'
				}
			}
		},

		watch: {
			js_scripts: {
				files: 'assets/js/scripts/*.js',
				tasks: 'dist-js-scripts'
			},
			js_vendors: {
				files: 'assets/js/vendors/*.js',
				tasks: 'dist-js-vendors'
			},
			js_admin: {
				files: 'assets/js/admin/*.js',
				tasks: ['dist-js-admin', 'dist-js-main']
			},
			js_main: {
				files: ['assets/js/scripts.js', 'assets/js/vendors.js', 'assets/js/admin.js'],
				tasks: 'dist-js-main'
			},
			css_bootstrap: {
				files: ['assets/css/bootstrap.scss', 'assets/css/bootstrap/*.scss'],
				tasks: 'dist-css-bootstrap',
				options: {
					livereload: true,
				}
			},
			css_styles: {
				files: 'assets/css/styles/**/*.scss',
				tasks: 'dist-css-main',
				options: {
					livereload: true,
				}
			},
			css_vendors: {
				files: 'assets/css/vendors/**/*.scss',
				tasks: 'dist-css-main',
				options: {
					livereload: true,
				}
			},
			css_admin: {
				files: 'assets/css/admin/**/*.scss',
				tasks: 'dist-css-main',
				options: {
					livereload: true,
				}
			},
			css_main: {
				files: ['assets/css/main.scss'],
				tasks: 'dist-css-main',
				options: {
					livereload: true,
				}
			},
			// This re-compiles bootstrap when you change or add a custom variable
			custom_globals: {
				files: 'assets/css/styles/custom-globals/_custom-variables.scss',
				tasks: 'dist-css-bootstrap',
				options: {
					livereload: true,
				}
			}
		},

		clean: {
			css: {
				bootstrap: ['assets/css/bootstrap.css', 'assets/css/bootstrap.min.css', 'assets/css/bootstrap.css.map'],
				main: ['assets/css/main.css', 'assets/css/main.min.css', 'assets/css/main.css.map']
			},
			js: {
				scripts: ['assets/js/scripts.js', 'assets/js/scripts.min.js'],
				vendors: ['assets/js/vendors.js', 'assets/js/vendors.min.js'],
				admin: ['assets/js/admin.js', 'assets/js/admin.min.js']
			}
		},

		concat: {
			options: {
				separator: ';',
			},
			scripts: {
				src: 'assets/js/scripts/*.js',
				dest: 'assets/js/scripts.js'
			},
			vendors: {
				src: 'assets/js/vendors/*.js',
				dest: 'assets/js/vendors.js'
			},
			admin: {
				src: 'assets/js/admin/*.js',
				dest: 'assets/js/admin.js'
			},
			main: {
				src: ['assets/js/admin.js', 'assets/js/vendors.js', 'assets/js/scripts.js'],
				dest: 'assets/js/main.js'
			}
		},

		uglify: {
			scripts: {
				src: 'assets/js/scripts.js',
				dest: 'assets/js/scripts.min.js'
			},
			vendors: {
				src: 'assets/js/vendors.js',
				dest: 'assets/js/vendors.min.js'
			},
			admin: {
				src: 'assets/js/admin.js',
				dest: 'assets/js/admin.min.js'
			},
			main: {
				src: 'assets/js/main.js',
				dest: 'assets/js/main.min.js'
			}
		},

		sass: {
			main_css: {
				options: {
					style: 'expanded'
				},
				files: {
					'assets/css/main.css': 'assets/css/main.scss'
				}
			},
			bootstrap_css: {
				options: {
					style: 'expanded'
				},
				files: {
					'assets/css/bootstrap.css': 'assets/css/bootstrap.scss'
				}
			}
		},

		autoprefixer: {
			options: {
				browsers: ['last 2 version', 'ie 8', 'ie 9']
			},
			main: {
				src: 'assets/css/main.css'
			},
			bootstrap: {
				src: 'assets/css/bootstrap.css'
			},
		},

		cssmin: {
			main: {
				expand: true,
				cwd: 'assets/css',
				src: ['main.css'],
				dest: 'assets/css',
				ext: '.min.css'
			},
			bootstrap: {
				expand: true,
				cwd: 'assets/css',
				src: ['bootstrap.css'],
				dest: 'assets/css',
				ext: '.min.css'
			},
		},

	});

	// These plugins provide necessary tasks
	grunt.loadNpmTasks('grunt-autoprefixer');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-csslint');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-auto-install');

	// JS distribution task
	grunt.registerTask('dist-js', ['dist-js-scripts', 'dist-js-vendors', 'dist-js-admin', 'dist-js-main']);

	// JS Scripts distribution task
	grunt.registerTask('dist-js-scripts', ['clean:js:scripts', 'concat:scripts']);

	// JS Vendors distribution task
	grunt.registerTask('dist-js-vendors', ['clean:js:vendors', 'concat:vendors']);

	// JS Admin distribution task
	grunt.registerTask('dist-js-admin', ['clean:js:admin', 'concat:admin']);

	// JS Main distribution task
	grunt.registerTask('dist-js-main', ['concat:main', 'uglify:main']);

	// CSS distribution task
	grunt.registerTask('dist-css', ['dist-css-bootstrap', 'dist-css-main']);

	// CSS Bootstrap distribution task
	grunt.registerTask('dist-css-bootstrap', ['clean:css:bootstrap', 'sass:bootstrap_css', 'autoprefixer:bootstrap', 'cssmin:bootstrap']);

	// CSS Main distribution task
	grunt.registerTask('dist-css-main', ['clean:css:main', 'sass:main_css', 'autoprefixer:main', 'cssmin:main']);

	// Full distribution task
	grunt.registerTask('dist', ['dist-css', 'dist-js']);

	// Default task
	grunt.registerTask('default', ['dist', 'watch']);

};

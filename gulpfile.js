// Require Gulp and plugins.
const gulp = require('gulp'),
      watch = require('gulp-watch'),
      sass = require('gulp-sass'),
      cleanCSS = require('gulp-clean-css'),
      uglify = require('gulp-uglify'),
      gulpUtil = require('gulp-util'),
      runSequence = require('run-sequence'),
      rename = require('gulp-rename'),
      autoprefixer = require('gulp-autoprefixer'),
      concat = require('gulp-concat');

// Task to compile sass to css.
gulp.task('sass', () => {
  return gulp.src('client/assets/styles/src/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('client/assets/styles'));
});

// Task to add css autoprefixes for browser compatibility.
gulp.task('autoprefix-css', () => {
  return gulp.src('client/assets/styles/styles.css')
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(gulp.dest('client/assets/styles'))
});

// Task to minify CSS, and rename file to havels -la have .min suffix.
gulp.task('minify-css', () => {
  return gulp.src('client/assets/styles/styles.css')
    .pipe(cleanCSS()).pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('client/assets/styles/'));
});

// Task to concatenate all script files.
gulp.task('concat-scripts', function() {
  return gulp.src('client/assets/scripts/src/*.js')
    .pipe(concat('scripts.js'))
    .pipe(gulp.dest('client/assets/scripts'));
});

// Task to minify JS, and rename file to have have .min suffix.
gulp.task('uglify', () => {
  return gulp.src('client/assets/scripts/scripts.js')
    .pipe(uglify().on('error', gulpUtil.log))
    .pipe(uglify()).pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('client/assets/scripts'));
});

// Watch tasks.
gulp.task('watch', () => {
  gulp.watch('client/assets/styles/src/**/*.scss', ['styles']);
  gulp.watch('client/assets/scripts/src/*.js', ['scripts']);
});

// Styles tasks.
gulp.task('styles', () => {
  runSequence(
    'sass',
    'autoprefix-css',
    'minify-css'
  );
});

// JS tasks.
gulp.task('scripts', () => {
  runSequence(
    'concat-scripts',
    'uglify'
  );
});

// Default task.
gulp.task('default', () => {
  runSequence(
    'styles',
    'scripts',
    'watch'
  );
});

// Deploy task.
gulp.task('deploy', ()=> {
  runSequence(
    'styles',
    'scripts'
  );
})

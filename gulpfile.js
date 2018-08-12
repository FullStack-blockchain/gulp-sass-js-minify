// gulpfile.js

var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var sass = require('gulp-sass');
var less = require('gulp-less');
var uglify = require('gulp-uglify');

gulp.task('css', function() {
   return gulp.src('src/sass/style.scss')
               .pipe(sass())
               .pipe(cleanCSS({compatibility: 'ie8'}))
               .pipe(gulp.dest('public/css'));
});

gulp.task('lessCss', function() {
   return gulp.src('src/less/style.less')
               .pipe(less())
               .pipe(cleanCSS({compatibility: 'ie8'}))
               .pipe(gulp.dest('public/css'));
});

gulp.task('watch:less', function() {
   gulp.watch('src/less/*.less', ['lessCss']);
});

gulp.task('jsMinify', function() {
   return gulp.src('src/js/app.js')
               .pipe(uglify())
               .pipe(gulp.dest('public/js'));
});
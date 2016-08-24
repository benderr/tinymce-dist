var gulp = require('gulp');
//var mainBowerFiles = require('main-bower-files');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');

gulp.task('build', function () {
  return gulp.src([
  	"./tinymce.js",
  	"./plugins/**/*.js",
    "./themes/**/*.js",
    "./langs/**/*.js"
  ])
    .pipe(concat('main.js'))
    .pipe(gulp.dest('dist/'))
});
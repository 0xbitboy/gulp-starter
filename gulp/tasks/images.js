var gulp        = require('gulp');
var changed     = require('gulp-changed');
var size        = require('gulp-size');
var imagemin    = require('gulp-imagemin');
var browsersync = require('browser-sync');
var config      = require('../config').optimize.images;

/**
 * Copy images to build folder
 * if not changed
 */
gulp.task('images', function() {
  return gulp.src(config.src)
    .pipe(changed(config.dest))
    .pipe(imagemin(config.options))
    .pipe(gulp.dest(config.dest))
    .pipe(size())
    .pipe(browsersync.reload());
});
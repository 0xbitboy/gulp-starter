var gulp         = require('gulp');
var browsersync  = require('browser-sync');
var size         = require('gulp-size');
var changed      = require('gulp-changed');
var compass      = require('gulp-compass');
var autoprefixer = require('gulp-autoprefixer');
var plumber      = require('gulp-plumber');
var filter   = require('gulp-filter');
//var sourcemaps   = require('gulp-sourcemaps');
var config       = require('../config').optimize.css;
var configdev=require('../config').compass;
gulp.task('compass', function() {
  var sassConfig = config.options;

  sassConfig.onError = browsersync.notify;

  // Don’t write sourcemaps of sourcemaps

  browsersync.notify('Compiling Sass');

  return gulp.src(config.src)
    .pipe(plumber())
    .pipe(compass(sassConfig))
    .pipe(gulp.dest(config.dest))
    .pipe(size())
    .pipe(filter('**/*.css'))
    .pipe(browsersync.reload({stream:true}));

});
gulp.task('compassdev', function() {
  var sassConfig = configdev.options;

  sassConfig.onError = browsersync.notify;

  // Don’t write sourcemaps of sourcemaps

  browsersync.notify('Compiling Sass');

  return gulp.src(configdev.src)
    .pipe(plumber())
    .pipe(compass(sassConfig))
    .pipe(gulp.dest(configdev.dest))
    .pipe(size())
    .pipe(filter('**/*.css'))
    .pipe(browsersync.reload({stream:true}));

});

var gulp        = require('gulp');
var browsersync = require('browser-sync');
var config      = require('../config').watch;

/*gulp.task('watch', ['browsersync'], function() {
	gulp.watch(config.sass, ['compass','compassdev']);
  	gulp.watch(config.js, ['scripts', 'jshint']);
  	gulp.watch(config.images,  ['images']);
});*/
gulp.task('watch', [], function() {
	gulp.watch(config.sass, ['compass','compassdev']);
  	gulp.watch(config.js, ['scripts', 'jshint']);
  	gulp.watch(config.images,  ['images']);
});
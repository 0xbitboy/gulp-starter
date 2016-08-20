var gulp        = require('gulp');
var browsersync = require('browser-sync');
var config      = require('../config').browsersync.dev;

gulp.task('browsersync',function() {
  browsersync(config);
});


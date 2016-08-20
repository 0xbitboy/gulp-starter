var gulp   = require('gulp');
var del    = require('del');
var config = require('../config').del;


gulp.task('delete', function(callback) {
  del(config.src, callback);
});
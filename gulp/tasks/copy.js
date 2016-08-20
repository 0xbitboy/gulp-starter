var gulp      = require('gulp');
var minifyCSS = require('gulp-minify-css');
var config    = require('../config');
var fonts = config.copy.fonts;
var css = config.optimize.css;


//, ['fontcustom']
gulp.task('copy', function() {
  	gulp.src(fonts.src)
  		.pipe(gulp.dest(fonts.dest));

  	gulp.src(css.src)
  		.pipe(minifyCSS(css.options))
  		.pipe(gulp.dest(css.dest));
});
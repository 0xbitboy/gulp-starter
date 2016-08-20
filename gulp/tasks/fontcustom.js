var gulp  = require('gulp');
var shell = require('gulp-shell');

/**
 * Generate fonts with Fontcustom
 * http://fontcustom.com/
 * `brew install fontforge --with-python`
 * `brew install eot-utils`
 * `gem install fontcustom`
 */
gulp.task('fontcustom', shell.task([
  'bundle exec fontcustom compile'
]));
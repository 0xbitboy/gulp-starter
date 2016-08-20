var gulp      = require('gulp');
var changed   = require('gulp-changed');
var size      = require('gulp-size');
var plumber   = require('gulp-plumber');
var uglify    = require('gulp-uglify');
var sourcemaps= require('gulp-sourcemaps');
var config    = require('../config').optimize.js;
//var fs        = require('fs');
//var path      = require('path');
//var rd        = require('rd');
//var merge     = require('merge-stream');
//var filter    = require('gulp-filter');
//var rename    = require('gulp-rename');
//var concat    = require('gulp-concat');
//var transport = require("gulp-seajs-transport");

// 
gulp.task('scripts', function(callback) {
  //var jsFilter = filter(['*.js', '!*.map']);
  

  return gulp.src(config.src)
	.pipe(changed(config.dest))
	.pipe(plumber())
    .pipe(uglify(config.options))
    //.pipe(sourcemaps.init())
    //.pipe(sourcemaps.write('.', { includeContent: false }))
    .pipe(gulp.dest(config.dest))
    .pipe(size());
});

// gulp.task('concat:js', function() {
//    var folders = rd.readDirSync('source/js/plus').filter(function(dir){
//    		return fs.existsSync(path.join(dir, 'main.js'));
//    });
//    var tasks = folders.map(function(folder) {
//       return gulp.src(path.join(folder, '/*.js'))
//       	.pipe(transport())
//         .pipe(concat('main.js'))
//         .pipe(gulp.dest(folder));
//    });

//    return merge(tasks);
// });
var gulp = require('gulp');
var seajsCombo = require('gulp-seajs-combo');
var concat=require('gulp-concat');
var del = require('del');
var size = require('gulp-size');
var uglify = require('gulp-uglify');
var transport = require("gulp-seajs-transport");
var runSequence = require('run-sequence');
var projects=['task','outside','meeting','approveJs'];
var noSeaJsProjects=['apolloJs','attenceJs','contactJs'];
projects.forEach(function(itm){
    gulp.task(itm+"Transport",function(){
        return gulp.src("source_dev/js/plus/"+itm+"/*.js")
            .pipe(transport()) 
            .pipe(gulp.dest("source_dev/js/plus/"+itm+"/pro/"))
            .pipe(size());
    });
    gulp.task(itm+'Concat',function() {
        return gulp.src('source_dev/js/plus/'+itm+'/pro/*.js')
            .pipe(concat('main.js'))
            .pipe(gulp.dest('source/js/plus/'+itm+'/'))
            .pipe(size());
    });
    gulp.task(itm+"Uglify",function(){
      return gulp.src("source/js/plus/"+itm+"/*.js")
            .pipe(uglify()) 
            .pipe(gulp.dest("source/js/plus/"+itm+"/"))
            .pipe(size());
    });
    gulp.task(itm+'Clean',function() {//清除相应项目的开发目录
        del(['source/js/plus/'+itm+'/*.js'], function(err, deletedFiles) {
            console.log(deletedFiles.join(','));
        });
    });
    gulp.task(itm+'Combine',function(){
        runSequence(itm+'Clean',itm+'Transport',itm+'Concat',itm+'Uglify',
              function(){
                console.log('......'+itm+'Combine has compeleted!^0^');
              });
    })

});

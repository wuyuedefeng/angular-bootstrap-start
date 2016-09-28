'use strict';
var gulp = require('gulp');

var config = require('../config');

// npm install gulp-clean --save-dev
var clean = require('gulp-clean');//清空文件夹
gulp.task('clean',function(){
    return gulp.src(config.dest,{read:false})
        .pipe(clean());
});

// 清空文件夹
gulp.task('build',['clean'], function () {
    // css
    gulp.run('sass');
    gulp.src(config.sass.mid).pipe(gulp.dest(config.sass.dest));

    // js
    gulp.run('js');

    // html
    gulp.run('html');

    // img
    gulp.run('img');
});
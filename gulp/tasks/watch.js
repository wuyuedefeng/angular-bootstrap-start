'use strict';
// npm install --save-dev gulp-watch
var gulp = require('gulp');
var watch = require('gulp-watch');

var config = require('../config');


gulp.task('watch', function(){

    gulp.run('sass');
    watch(config.sass.src, function(){  //监听所有sass
        gulp.run('sass'); 			//出现修改、立马执行sass任务
    });
    watch(config.js.src, function () {
        gulp.run('js');
    });
    watch(config.html.src, function () {
        gulp.run('html');
    });

});


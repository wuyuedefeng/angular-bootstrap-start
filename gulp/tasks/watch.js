'use strict';
// npm install --save-dev gulp-watch
var gulp = require('gulp');
var watch = require('gulp-watch');

var config = require('../config');


gulp.task('watch', function(){

    watch(config.sass.src, function(){  //监听所有sass
        gulp.run('sass'); 			//出现修改、立马执行sass任务
    });
    // watch(config.images.src, function(){  //监听所有image
    //     gulp.start('images');
    // });
    // watch(config.js.src, function(){  //监听所有js
    //     gulp.start('js');
    // });
});

gulp.task('build', function () {
    gulp.run('sass');
});
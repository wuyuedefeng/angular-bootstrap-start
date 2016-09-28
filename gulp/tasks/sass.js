'use strict';
// https://www.npmjs.com/package/gulp-sass/
// npm install gulp-sass --save-dev
var gulp = require('gulp');
var sass = require('gulp-sass');

var config = require('../config').sass;

gulp.task('sass', function () {
    return gulp.src(config.src).pipe(sass.sync().on('error', sass.logError))
        .pipe(sass({outputStyle: 'compressed'}).on('error',  sass.logError))
        .pipe(gulp.dest(config.midDev));
});
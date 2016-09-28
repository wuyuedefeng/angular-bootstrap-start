'use strict';
// https://www.npmjs.com/package/gulp-sass/
// npm install gulp-sass --save-dev
var gulp = require('gulp');
var sass = require('gulp-sass');

var sassConfig = require('../config').sass;

gulp.task('sass', function () {
    return gulp.src(sassConfig.src).pipe(sass.sync().on('error', sass.logError))
        .pipe(sass({outputStyle: 'compressed'}).on('error',  sass.logError))
        .pipe(gulp.dest(sassConfig.midDev));
});
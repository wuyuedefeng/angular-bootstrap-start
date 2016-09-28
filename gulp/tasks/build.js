'use strict';
var gulp = require('gulp');

var config = require('../config');

gulp.task('build', function () {
    gulp.run('sass');
    gulp.src(config.sass.mid).pipe(gulp.dest(config.sass.dest));


});
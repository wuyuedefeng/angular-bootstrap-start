'use strict';
var gulp = require('gulp');

var config = require('../config');

gulp.task('build', function () {
    // css
    gulp.run('sass');
    gulp.src(config.sass.mid).pipe(gulp.dest(config.sass.dest));

    // js
    gulp.run('js');


});
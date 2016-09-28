'use strict';
// http://www.ituring.com.cn/article/197923
// npm install gulp-uglify --save-dev
var gulp = require('gulp');
var uglify = require('gulp-uglify');

var jsConfig = require('../config').js;

// 压缩 js 文件
// 在命令行使用 gulp js 启动此任务
gulp.task('js', function() {
    // 1. 找到文件
    gulp.src(jsConfig.src)
    // 2. 压缩文件
    .pipe(uglify())
    // 3. 另存压缩后的文件
    .pipe(gulp.dest(jsConfig.dest))
});

// gulp.task(name, fn) - 定义任务，第一个参数是任务名，第二个参数是任务内容。
// gulp.src(path) - 选择文件，传入参数是文件路径。
// gulp.dest(path) - 输出文件
// gulp.pipe() - 管道，你可以暂时将 pipe 理解为将操作加入执行队列


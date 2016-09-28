'use strict';
// http://www.cnblogs.com/yanliangnh/p/5695239.html
var gulp = require('gulp');
// npm install gulp-imagemin --save-dev
var imagemin = require('gulp-imagemin');//图片压缩
// npm install imagemin-pngquant --save-dev
var pngquant = require('imagemin-pngquant');//图片深入压缩
// npm install imagemin-jpegtran --save-dev
var imageminJpegtran = require('imagemin-jpegtran');
// npm install imagemin-gifsicle --save-dev
var imageminGifsicle = require('imagemin-gifsicle');
// npm install imagemin-svgo --save-dev
var imageminSvgo = require('imagemin-svgo');
// npm install imagemin-optipng --save-dev
var imageminOptipng = require('imagemin-optipng');

// npm install gulp-cache --save-dev
var cache = require('gulp-cache');//图片压缩缓存

var plumber=require('gulp-plumber');//检测错误


var imgConfig = require('../config').img;

gulp.task('img', function () {
    gulp.src(imgConfig.src)
        .pipe(plumber({errorHandler:function (err) {
            console.error('html Error!', err.message);
        }}))
        .pipe(cache(imagemin({
            progressive: true, //类型：Boolean 默认：false 无损压缩jpg图片
            svgoPlugins: [{removeViewBox: false}],//不要移除svg的viewbox属性
            use: [pngquant(),
                imageminJpegtran({progressive: true}),
                imageminGifsicle({interlaced: true}),
                imageminOptipng({optimizationLevel:3}),
                imageminSvgo()] //使用pngquant深度压缩png图片的imagemin插件
        })))
        .pipe(gulp.dest(imgConfig.dest));
});
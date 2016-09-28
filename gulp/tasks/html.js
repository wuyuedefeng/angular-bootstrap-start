'use strict';
// http://www.cnblogs.com/yanliangnh/p/5695239.html
// npm install gulp-htmlmin --save-dev
var gulp = require('gulp');
var htmlmin = require('gulp-htmlmin');
// npm install gulp-plumber --save-dev
var plumber=require('gulp-plumber');//检测错误
// npm install gulp-replace --dave-dev
var Replace = require('gulp-replace');
// npm install gulp-processhtml --save-dev
var processhtml = require('gulp-processhtml');

var htmlConfig = require('../config').html;

var date = new Date().getTime();
gulp.task('html', function () {
    var options = {
        removeComments: true,//清除HTML注释
        collapseWhitespace: true,//压缩HTML
        collapseBooleanAttributes: false,//省略布尔属性的值 <input checked="true"/> ==> <input />
        removeEmptyAttributes: false,//删除所有空格作属性值 <input id="" /> ==> <input />
        removeScriptTypeAttributes: true,//删除<script>的type="text/javascript"
        removeStyleLinkTypeAttributes: true,//删除<style>和<link>的type="text/css"
        minifyJS: true,//压缩页面JS
        minifyCSS: true//压缩页面CSS
    };
    gulp.src(htmlConfig.src)
        .pipe(plumber({errorHandler: function (err) {
            console.error('html Error!', err.message);
        }}))
        .pipe(Replace(/_VERSION_/gi, date))
        .pipe(processhtml())
        .pipe(htmlmin(options))
        .pipe(gulp.dest(htmlConfig.dest));
});
// "./" 指的是项目主目录
var src = './source';
var dest = './build';

module.exports = {
    sass: {
        src: src + "/scss/**/*.scss",	 //需要编译的scss
        midDev:  src + "/css",
        mid: src + "/css/**/*.css",
        dest: dest + "/css"	   //输出目录
    },
    js: {
        src: src + "/js/**/*.js",
        dest: dest + "/js"
    },
    html: {
        src: src + "/**/*.html",
        dest: dest + "/"
    },
    img: {
        src: src + "/img/**/*.{png,jpg,gif,ico}",
        dest: dest + "/img"
    },
    dest: dest
}
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
    images: {
        src: src + "/img/**/*",
        dest: dest + "/img"
    },
    js: {
        src: src + "/js/**/*",
        dest: dest + "/js"
    }
}
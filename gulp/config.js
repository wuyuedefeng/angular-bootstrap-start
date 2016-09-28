var src = './source';
var dest = './build';

module.exports = {
    sass: {
        src: src + "/scss/**/*.scss",	 //需要编译的scss
        mid:  src + "/css",
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
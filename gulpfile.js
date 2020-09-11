// 导入模块
let gulp = require('gulp'),
    cssnano = require('gulp-cssnano'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    babel = require('gulp-babel'),
    sass = require('gulp-sass')
// 发布任务
// 发布sass
function fnSass(){
    return  gulp.src('./src/scss/*.scss')
            .pipe(sass({outputStyle : 'compressed'}))
            .pipe(rename({suffix : '.min'}))
            .pipe(gulp.dest('./dist/css'))
}
// 发布js
function fnJS(){
    return  gulp.src('./src/js/*.js')
            .pipe(babel({
                presets: ['@babel/env']
            }))
            .pipe(uglify())
            .pipe(rename({suffix : '.min'}))
            .pipe(gulp.dest('./dist/js'))
}
// 发布监听任务
function fnWatch(){
    gulp.watch('./src/scss/*.scss',fnSass);
    gulp.watch('./src/js/*.js',fnJS);
}
// 导出任务
module.exports.sass = fnSass;
module.exports.js = fnJS;
module.exports.default = fnWatch;

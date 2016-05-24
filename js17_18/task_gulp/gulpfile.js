'use strict';

var gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    cssmin = require('gulp-minify-css'),
    rigger = require('gulp-rigger'),
    watch = require('gulp-watch');

var path = {
    build: { //Тут мы укажем куда складывать готовые после сборки файлы
        html: 'build/',
        js: 'build/js/',
        css: 'build/css/'
    },
    src: { //Пути откуда брать исходники
        html: '/*.html', //Синтаксис src/*.html говорит gulp что мы хотим взять все файлы с расширением .html
        js: ['js/**/*.js', '!js/*.min.js'],//В стилях и скриптах нам понадобятся только main файлы
        style: 'css/**/*.css'
    },
    watch: { //Тут мы укажем, за изменением каких файлов мы хотим наблюдать
        html: '/*.html',
        js: 'js/**/*.js',
        style: 'css/**/*.css'
    },
    clean: './build'
};

             
gulp.task('js:build', function () {
    gulp.src(path.src.js)
        .pipe(rigger())
        .pipe(concat('script.min.js'),  {newLine: ';'}) 
        .pipe(uglify())
        .pipe(gulp.dest(path.build.js))
});

gulp.task('style:build', function () {
        gulp.src(path.src.style)
        .pipe(rigger())
        .pipe(concat('style.min.css')) 
        .pipe(cssmin()) //Сожмем
        .pipe(gulp.dest(path.build.css))
});

gulp.task('build', [
    'js:build',
    'style:build',
]);

gulp.task('watch', function(){
    watch([path.watch.html], function(event, cb) {
        gulp.start('html:build');
    });
    watch([path.watch.style], function(event, cb) {
        gulp.start('style:build');
    });
    watch([path.watch.js], function(event, cb) {
        gulp.start('js:build');
    });
});
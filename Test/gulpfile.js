'use strict';

var gulp = require('gulp'),
    watch = require('gulp-watch'),
    concat = require('gulp-concat'),
    merge = require('merge-stream'),
    prefixer = require('gulp-autoprefixer'),
    uglify = require('gulp-uglify'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    cssmin = require('gulp-minify-css'),
    rimraf = require('rimraf'),
    browserSync = require('browser-sync'),
    reload = browserSync.reload;


var path = {
    build: {
        js: 'build/js/',
        css: 'build/css/'
    },
    src: { 
        js: ['app_js', 'vendor_js'],
        style: 'src/vendor_css/**/*.css',
        scss: 'src/app_css/app.scss'
    },
    watch: { 
        js: 'src/**/*.js',
        style: 'src/vendor_css/**/*.css',
        scss: 'src/app_css/**/*.scss'
    },
    clean: './build'
};

gulp.task('js:build', function(){

    var tasks = path.src.js.map(function(element){
        return gulp.src('src/' + element + '/**/*.js', {base: 'src/' + element})
        .pipe(concat(element + '.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest(path.build.js))
    });

    return merge(tasks);
});

gulp.task('style:build', function () {
    gulp.src(path.src.style)
        .pipe(concat('vendor.css'))
        .pipe(cssmin()) 
        .pipe(gulp.dest(path.build.css)) 
});

gulp.task('scss:build', function () {
    gulp.src(path.src.scss)
        .pipe(sass()) 
        .pipe(prefixer()) 
        .pipe(cssmin())
        .pipe(gulp.dest(path.build.css))
});

gulp.task('default', ['js:build', 'style:build', 'scss:build']);

gulp.task('watch', function(){

    watch([path.watch.js], function(event, cb) {
        gulp.start('js:build');
    });
    watch([path.watch.style], function(event, cb) {
        gulp.start('style:build');
    });
    watch([path.watch.scss], function(event, cb) {
        gulp.start('scss:build');
    });
    
});
var gulp        = require('gulp');
var deploy      = require('gulp-gh-pages');
var ejs         = require("gulp-ejs");
var gutil       = require('gulp-util');

var config = {
    templates : __dirname + '/src/*.ejs',
    assets : __dirname + '/src/assets/**/*',
    src: __dirname + '/src',
    buildpath : './build'
}


/**
 *  Templates
 */
gulp.task('templates', function(){
    gulp.src([config.templates])
        .pipe(ejs()).on('error', gutil.log)
        .pipe(gulp.dest(config.buildpath));
});

/**
 *  Assets
 */
gulp.task('assets', function(){
    gulp.src([config.assets])
        .pipe(gulp.dest(config.buildpath + '/assets'));
});

/**
 *  Default
 */
gulp.task('default', ['templates', 'assets'], function() {
});

/**
 *  Push build to gh-pages
 */
gulp.task('deploy', function () {
    return gulp.src(config.buildpath + '/**/*')
        .pipe(deploy())
});
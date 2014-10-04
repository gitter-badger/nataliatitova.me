var gulp = require('gulp');
var Metalsmith = require('metalsmith');
var deploy      = require('gulp-gh-pages');

function metalsmith()
{
    Metalsmith(__dirname)
        .destination('./build')
        .build(
        function(err){
            if (err) throw err;
        }
    );
}

/**
 * Default - run metalsmith
 */
gulp.task('default', function() {
    metalsmith();
});

/**
 * Push build to gh-pages
 */
gulp.task('deploy', function () {
    return gulp.src("./build/**/*")
        .pipe(deploy())
});
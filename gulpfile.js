let gulp = require('gulp'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename');
// Load plugins
let $ = require('gulp-load-plugins')();

/* es6 */
gulp.task('es6', function() {
    return gulp.src('src/**/*.js')
        .pipe($.plumber())
        .pipe($.babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest('dist/'));
});
gulp.task('default', function () {
    gulp.run('es6');
    gulp.watch(['src/**/*.js'], ['es6']);
});
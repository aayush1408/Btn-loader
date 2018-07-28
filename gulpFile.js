const gulp = require('gulp');
var uglify = require('gulp-uglifyjs');
var uglifycss = require('gulp-uglifycss');

gulp.task('uglify', function () {
    gulp.src('./assets/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./dist/'))
});

gulp.task('css', function () {
    gulp.src('./assets/*.css')
        .pipe(uglifycss({
            "uglyComments": true
        }))
        .pipe(gulp.dest('./dist/'));
});

gulp.task('run', ['uglify', 'css']);

gulp.task('watch', function () {
    gulp.watch('./assets/*.js', ['uglify']);
    gulp.watch('./assets/*.css', ['css']);
});

gulp.task('default', ['run', 'watch'])
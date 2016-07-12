var gulp        = require('gulp');
var browserSync = require('browser-sync');
var sass        = require('gulp-sass');
var jade        = require('gulp-jade');
var reload      = browserSync.reload;
var config      = require('./app/config.json');

gulp.task('templates', function() {

    var YOUR_LOCALS = {};

    return gulp.src('./app/*.jade')
        .pipe(jade({
            locals: config,
            pretty: true
        }))
        .pipe(gulp.dest('./dist/'))
});


gulp.task('jade-watch', ['templates'], reload);


gulp.task('sass', function () {
    return gulp.src('./app/scss/*')
        .pipe(sass())
        .pipe(gulp.dest('./dist/css'))
        .pipe(reload({stream: true}));
});


gulp.task('default', ['sass', 'templates'], function () {

    browserSync({server: './dist'});

    gulp.watch('./app/scss/*.scss', ['sass']);
    gulp.watch('./app/*.jade',      ['jade-watch']);
});
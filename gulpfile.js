var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var jsValidate = require('gulp-jsvalidate');
var html2string = require('gulp-html2string');
var minifyCss = require('gulp-minify-css');
var notify = require('gulp-notify');
var browserSync = require('browser-sync').create();
var reload      = browserSync.reload;
gulp.task('app', function() {
    gulp.src('app/**/*.html')
        .pipe(html2string({
            base: __dirname,
            createObj: true,
            objName: 'TEMPLATES'
        }))
        .pipe(concat('templates.js'))
        .pipe(gulp.dest('build/templates'))
        .on('finish', function() {
            var files = ['build/templates/templates.js', 'app/app.module.js', 'app/app.config.js', 'app/**/*.js'];

            gulp.src(files)
                .pipe(jsValidate()).on('error', errorHandler)
                .pipe(concat('widget-calendar.js'))
                //.pipe(uglify()).on('error', errorHandler)
                .pipe(gulp.dest('build/js'))
                .pipe(notify({
                    title: 'Gulp Form',
                    message: 'JS generado para widget-calendar',
                    onLast: true
                }))
                .pipe(reload({stream: true}));
        });
});

gulp.task('watch', ['app', 'styles'], function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    gulp.watch("**/*.html").on("change", reload);
    gulp.watch('app/**/*.html', ['app']);
    gulp.watch('app/**/*.js', ['app']);
    gulp.watch('assets/**/*.css', ['styles']);
});

gulp.task('styles', function() {
    return gulp.src(['assets/**/*.css'])
        .pipe(concat('widget-calendar.css'))
        .pipe(minifyCss())
        .pipe(gulp.dest('build/css'))
        .pipe(notify({
            title: 'Gulp Form',
            message: 'CSS generado para widget-calendar',
            onLast: true
       }))
        .pipe(reload({stream: true}));
});

function errorHandler(error) {
    console.log(error.toString());
    this.emit('end');
}

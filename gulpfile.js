var gulp = require('gulp'),
    babel = require('gulp-babel'),
    concat = require('gulp-concat'),
    sass = require('gulp-sass'),
    copy = require('gulp-copy'),
    watch = require('gulp-watch');


gulp.task('default', function() {
  gulp.src('src/app/**/*.js')
    .pipe(watch('src/**/*.js'), { verbose: true })
    .pipe(concat('script.js'))
    .pipe(babel())
    .pipe(gulp.dest('build/'));

  gulp.src('src/content/sass/*.sass')
    .pipe(watch('src/content/sass/*.sass'), { verbose: true })
    .pipe(sass())
    .pipe(gulp.dest('build/'));

  gulp.src('src/index.html')
    .pipe(watch('src/index.html'), { verbose: true })
    .pipe(gulp.dest('build/'));

  gulp.src('src/partials/*.html')
    .pipe(watch('src/partials/*.html'), { verbose: true })
    .pipe(gulp.dest('build/partials/'));
});

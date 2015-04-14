var gulp = require('gulp'),
    babel = require('gulp-babel'),
    concat = require('gulp-concat'),
    sass = require('gulp-sass'),
    copy = require('gulp-copy'),
    watch = require('gulp-watch');

var sources = {
  babel: ['src/app/*.js', 'src/app/**/*.js'],
  sass: 'src/content/sass/*.sass',
  partials: ['src/index.html', 'src/partials/*.html']
}


gulp.task('default', function() {
  gulp.start('babel');
  gulp.start('sass');
  gulp.start('partials');
  gulp.src('src/scripts/*.js')
    .pipe(gulp.dest('build/scripts/'));

  watch(sources.babel, function() {
    gulp.start('babel');
  });

  watch(sources.sass, function() {
    gulp.start('sass');
  });

  watch(sources.partials, function() {
    gulp.start('partials');
  });
});

gulp.task('babel', function() {
  gulp.src(sources.babel)
    .pipe(concat('script.js'))
    .pipe(babel())
    .pipe(gulp.dest('build/'));
});

gulp.task('sass', function() {
  gulp.src(sources.sass)
    .pipe(sass({ indentedSyntax: true }))
    .pipe(gulp.dest('build/'));
});

gulp.task('partials', function() {
  gulp.src(sources.partials[0])
    .pipe(gulp.dest('build/'));

  gulp.src(sources.partials[1])
    .pipe(gulp.dest('build/partials/'));
});

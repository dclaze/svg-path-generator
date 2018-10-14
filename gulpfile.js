const gulp = require('gulp');
const smoosher = require('gulp-smoosher');

gulp.task('docs', () => {
  gulp.src('./index.html')
    .pipe(smoosher())
    .pipe(gulp.dest('./docs'));
});

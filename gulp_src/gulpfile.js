var fileinclude = require('gulp-file-include'),
  gulp = require('gulp');

gulp.task('fileinclude', async function() {
  gulp.src(['./skeleton/*'])
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file',
	  indent: true
    }))
    .pipe(gulp.dest('../'));
});
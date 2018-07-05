var browserSync = require('browser-sync').create();
var gulp = require('gulp');

//
// Configure the browserSync task
//
gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: './'
    }
  })
});



gulp.task('watch', function() {
    gulp.watch('index.html', browserSync.reload);
    gulp.watch('css/**/*', browserSync.reload);
});


gulp.task('default', gulp.series('browserSync', 'watch', function() { 
    // default task code here
}));

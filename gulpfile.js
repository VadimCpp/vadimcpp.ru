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
    gulp.watch('index.html', ['browserSync']);
});


gulp.task('default', ['browserSync', 'watch']);

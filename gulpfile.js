var gulp        = require('gulp');
var browserSync = require('browser-sync').create();

// https://stackoverflow.com/a/50658518/1775459
gulp.task('serve', function() {

	browserSync.init({
	    files: [
	        {
	            match: ['*.html'],
	            fn:    function (event, file) {
	                this.reload()
	            }
	        }
	    ],
	    server: './'
	});

	browserSync.watch('*.html').on('change', browserSync.reload);
});

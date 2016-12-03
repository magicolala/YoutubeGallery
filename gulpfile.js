var gulp = require('gulp');
var browserify = require('browserify');
var reactify = require('reactify'); // Converts jsx to js
var source = require('vinyl-source-stream'); // Converts string to a stream

gulp.task('browserify', function(){
	browserify('./app/Resources/views/assets/js/main.js')
		.transform('reactify')
		.bundle()
		.pipe(source('./app/Resources/views/assets/js/main.js'))
		.pipe(gulp.dest('web/dist/js'));
});

gulp.task('copy', function(){
	gulp.src('app/Resources/views/assets/index.html.twig')
		.pipe(gulp.dest('app/Resources/views'));
	gulp.src('app/Resources/views/assets/css/*.*')
		.pipe(gulp.dest('web/dist/css'));
	gulp.src('app/Resources/views/assets/js/vendors/*.*')
		.pipe(gulp.dest('web/dist/js'));
});

gulp.task('default', ['browserify', 'copy'], function(){
	return gulp.watch('./app/Resources/views/assets/**/*.*', ['browserify', 'copy']);
});

var gulp = require('gulp'),
	ts = require('gulp-typescript'),
 	sourcemaps  = require('gulp-sourcemaps');
	
var src = './src';

gulp.task('build', function() {
	var tsResult = gulp.src(['src/**/*.ts', 'typings/**/*.ts'])
		.pipe(sourcemaps.init())
		.pipe(ts({
			target: 'ES5',
			module: 'commonjs',
			declarationFiles: false,
			noExternalResolve: true,
			sourceMap: true
		}));
	tsResult.dts.pipe(gulp.dest(src));
	return tsResult.js
	.pipe(sourcemaps.write('.'))
	.pipe(gulp.dest(src));
});

gulp.task('watch', function() {
	gulp.watch([src], ['build']);
});

gulp.task('default', ['build', 'watch']);
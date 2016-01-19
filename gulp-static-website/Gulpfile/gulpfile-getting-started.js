
// Add our dependencies
var gulp = require('gulp'), // Main Gulp module
    concat = require('gulp-concat'); // Gulp Web server runner plugin

// Configuration
var configuration = {
    paths: {
        src: {
            html: './src/*.html',
            css: [
                './src/css/bootstrap.min.css',
                './src/css/main.css'
            ]
        },
        dist: './dist'
    }
};

// Gulp task to copy HTML files to output directory
gulp.task('html', function() {
    gulp.src(configuration.paths.src.html)
        .pipe(gulp.dest(configuration.paths.dist));
});

// Gulp task to concatenate our css files
gulp.task('css', function () {
   gulp.src(configuration.paths.src.css)
       .pipe(concat('site.css'))
       .pipe(gulp.dest(configuration.paths.dist + '/css'));
});

// Gulp default task
gulp.task('default', ['html', 'css']);


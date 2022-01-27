var gulp = require('gulp');
var debug = require('gulp-debug');
var size = require('gulp-size');
var errorHandler = require('./errorHandler');

function endHelper(pipe, config){
    return pipe
        .pipe(config.sourcemaps.write('./'))
        .pipe(gulp.dest(config.dst))
        .pipe(size())
        .pipe(debug());
}

module.exports = endHelper;

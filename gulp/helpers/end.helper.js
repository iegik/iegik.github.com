var gulp = require('gulp');
var debug = require('gulp-debug');
var size = require('gulp-size');
var sourcemaps = require('gulp-sourcemaps');
var errorHandler = require('./errorHandler');

function endHelper(pipe, sourcemaps){
    return pipe
    //        .pipe(sourcemaps.write('./'))
        .pipe(size())
        .pipe(debug());
}

module.exports = endHelper;

var gulp = require('gulp');
var rename = require('gulp-rename');
var concat = require('gulp-concat');

function concatHelper(pipe, config){
    return pipe
        .pipe(concat(config.out))
        .pipe(rename(config.out))
        .pipe(gulp.dest(config.dst));
}

module.exports = concatHelper;

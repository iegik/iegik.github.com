var gulp = require('gulp');
var gulpUtil = require('gulp-util');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

function uglifyHelper(pipe, config){
    return pipe.pipe(uglify()).on('error', gulpUtil.log)
        .pipe(rename(function (path) {
            path.extname = path.extname.replace(/\.js$/, '.min.js');
            return path;
        }))
        .pipe(gulp.dest(config.dst));
}

module.exports = uglifyHelper;

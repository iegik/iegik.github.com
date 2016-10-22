const gulp = require('gulp');
const File = require('vinyl');
const browserify = require('browserify');
const changed = require('gulp-changed');
const format = require('../config').format;
const through = require('through2');

function browserifyHelper(pipe, config){

    function CommonJS(config) {
        return through.obj(function(chunk, enc, cb) {
            var browserifyOptions = {};
            var file = new File(chunk);
            var formats = config.components[file.relative];

            if (formats.indexOf(format.CJS) > -1) {
                if(formats.indexOf(format.ES6) > -1){
                    browserifyOptions.transform = ['babelify'];
                }
                browserify(file.relative, browserifyOptions)
                    .bundle(function(err, res){
                        file.contents = res;
                        cb(null, file);
                    });
            }else {
                cb(null, file);
            }
        });
    }

//    pipe = pipe.pipe(vinylPaths(function (path) {
//        if(config.components[Path.relative('./', path)].indexOf(format.CJS) > -1) {
//            pipe = pipe
//                .pipe(browserify({
//                    transform: ['babelify']
//                }))
//                .pipe(gulp.dest(config.dst));
//        }
//        return pipe;
//    }));
    pipe = pipe
        .pipe(changed(config.dst))
        .pipe(CommonJS(config))
        .pipe(gulp.dest(config.dst));
    return pipe;
}

module.exports = browserifyHelper;

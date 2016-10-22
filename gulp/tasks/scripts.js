'use strict';
var config = require('../config').browserify;
var pages = require('../config').pages;
var gulp = require('gulp');
var _ = require('lodash');
var sourcemaps = require('gulp-sourcemaps');

var uglifyHelper = require('../helpers/uglify.helper');
var startHelper = require('../helpers/start.helper');
var browserifyHelper = require('../helpers/browserify.helper');
var endHelper = require('../helpers/end.helper');
var concatHelper = require('../helpers/concat.helper');

function compile(config, watch) {
    function rebundle() {
        var pipe = gulp.src(config.src, {
            base: "."
        });

        // Read
        pipe = startHelper(pipe, sourcemaps);

        // Babelify
        pipe = browserifyHelper(pipe, {
            components: config.components,
            dst: config.dst
        });

        pipe = concatHelper(pipe, {
            out: config.out,
            dst: config.dst + '/pages/'
        });

        // Minify
        pipe = uglifyHelper(pipe, {
            dst: config.dst + '/pages/'
        });

        // Write
        pipe = endHelper(pipe, sourcemaps);

        return pipe;
    }
    if (watch) {
        gulp.watch(config.src, rebundle);
    }
    return rebundle();
}

function generateTasksForPages(pages, watch){
    return _.keys(_.mapKeys(_.pickBy(pages, function(components){
        return !!_.keys(components).length;
    }), function(components, page){
        var taskName = 'page:' + page + (watch?':watch':'');
        gulp.task(taskName, function(){
            return compile({
                src: _.keys(components),
                dst: config.dst,
                out: page + '.js',
                //formats: _.union.apply(_,_.values(components))
                components: components
            }, watch);
        });

        return taskName;
    }));
}
gulp.task('scripts', gulp.parallel.apply(null, generateTasksForPages(pages)));

gulp.task('watch:scripts', gulp.parallel.apply(null, generateTasksForPages(pages, true)));

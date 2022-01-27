var debug = require('gulp-debug');
var sourcemaps = require('gulp-sourcemaps');
var errorHandler = require('./errorHandler');

function startHelper(pipe, config){
    return pipe
        .on('error', errorHandler)
        .pipe(config.sourcemaps.init({
           loadMaps: true,
           debug: !process.env.PROD
        }))
        .pipe(debug());
}

module.exports = startHelper;

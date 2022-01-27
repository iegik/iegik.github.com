'use strict';
var fs   = require('fs');
var gulp = require('gulp');
var path = require('path');
var tasks = fs.readdirSync('gulp/tasks/').filter(function (name) {
    return /\.js$/i.test(path.extname(name));
}).map(function(name){
    return name.replace(/\.js$/i,'');
});

tasks.forEach(function (task) {
    require('./gulp/tasks/' + task);
});

gulp.task('default', gulp.series.apply(null, tasks));
gulp.task('production', gulp.parallel.apply(null, tasks.map(function(task){
    process.env.NODE_ENV = 'production';
    return task;
})));
gulp.task('watch', gulp.parallel.apply(null, tasks.map(function(task){
    return 'watch:' + task;
})));
function exitHandler() { process.exit(0); }
process.once('SIGINT', exitHandler);

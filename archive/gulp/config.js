var assign = Object.assign;
var config = {};
var format ={
    CJS: 'CommonJS',
    AMD: 'AMD',
    ES6: 'ES2015',
    GJS: 'Globals',
    UMD: 'UMD'
};
var components = {
    core: {
        'src/components/core/index.js': [format.GJS],
        'src/components/core/ga.js': [format.GJS],
    },
};
var pages = {
   home: assign({},
       components.core
   )
};

/* Source:
var components = {
    core: {
        'src/components/core/index.js': [format.CJS, format.ES6]
    },
    component03: {
        'src/components/component03/**\/*': [format.GJS]
    }
};
*/

/* Result:
 {
 home: uglifyed([
     babelifyed([
         'build/src/components/index.js',
         'build/src/components/component01',
         'build/src/components/component02',
         ...
     ]),
     'src/components/component03/**\/*',
 ...
 ]),
 ...
 }
 */
config.format = format;
config.pages = pages;
config.browserify = {
    dst: 'build'
};
module.exports = config;

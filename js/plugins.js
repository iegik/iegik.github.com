// plugins
var _gaq=[["_setAccount","UA-1989060-6"],["_trackPageview"],["_setDomainName","jansons.id.lv"]],___gcfg = {lang: "ru"};

Modernizr.load([{
  test : HTMLImageElement.getRatio,
  nope : [location.origin+"/js/dimensions.min.js"]
},{
  test : String.hightlight,
  nope : location.origin+"/js/hightlighter.min.js"
},{
  test : window.jQuery,
  nope : "js/libs/jquery-1.7.1.min.js"
},{
  test : _gaq,
  nope : ["http://apis.google.com/js/plusone.js",("https:"==location.protocol?"//ssl":"//www")+".google-analytics.com/ga.js"]
}]);

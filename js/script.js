/*/ plugins
var _gaq=[["_setAccount","UA-1989060-6"],["_trackPageview"],["_setDomainName","jansons.id.lv"]],___gcfg = {lang: "ru"};

(function(d,t,u){
  for(e in u){
    if(!u[e]){
      var g=d.createElement(t),s=d.getElementsByTagName(t)[0];
      g.src=u[e];s.parentNode.insertBefore(g,s);
    }
  }
}(document,"script",[
  (window.jQuery || "js/libs/jquery-1.7.1.min.js"),
  (HTMLImageElement.getRatio || location.origin+"/js/dimensions.min.js"),
  ( String.hightlighter || location.origin+"/js/hightlighter.min.js" ),
  "http://apis.google.com/js/plusone.js",
  ("https:"==location.protocol?"//ssl":"//www")+".google-analytics.com/ga.js",
  'js/script.js'
]));



// plugins * /
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
//},{
  //test : _gaq,
//  nope : [("https:"==location.protocol?"//ssl":"//www")+".google-analytics.com/ga.js","http://apis.google.com/js/plusone.js"]
}],'js/script.js');*/

$(function(){
  $('pre, .code').each(function(){
    if(this.innerText){
      var o = //("<![CDATA[]]>");
        this.innerText
        .replace(/\</gm,'&lt;')
        .replace(/\>/gm,'&gt;')
      o.hightlight();
    }
  })
  // Get ratio of images and add dimensions
  $('img').each(function(){
    var attr = this.getAttribute('class')
    this.setAttribute('class',(attr&&attr||'')+' '+this.getRatio());
  })
});

/*/HTMLImageElement.prototype.getRatio=function(){var d=this.width,e=this.height,a,b=d,c=e;if(b||c)for(;;){b>c?a=c:(a=b,b=c);c=b%a;if(cd js)break;b=a}return d/a+:+e/a};
String.prototype.hightlight=function(){return this.replace(/(\x27[^]*?\x27|\x22[^]*?\x22)/gm,'<span class="js-string">$1</span>').replace(/(&lt;[^&]*&gt;)/gm,'<span class="html-tag">$1</span>').replace(/\b(var|function|typeof|echo|new|return|if|for|in|while|break|do|done|continue|switch|case|try|catch|public|static|private|local|unsigned|void)([^a-z0-9\$_])/g,'<span class="js-keyword">$1</span>$2').replace(/\b(RegExp|Boolean|Number|String|Array|Object|Function|NaN|Infinity|true|false|undefined|null|this|int|TODO|FIXME)([^a-z0-9\$_])/g,'<span class="js-type">$1</span>$2').replace(/(\{|\}|\]|\[|\|)/gi,'<span class="js-punctuation">$1</span>').replace(/(\/\*[^]*?\*\/|(\/\/)[^\n\r]+|#[^\n\r]+)/gim,'<span class="js-comment">$1</span>').replace(/([a-z\_\$][a-z0-9_]*)\(/gi,'<span class="js-variable">$1</span>(').replace(/(0x[0-9a-f]*|\b(\d*\.)?([\d]+(e-?[0-9]*)?)\b)/gi,'<span class="js-atom">$1</span>').replace(/\t/g,"  ")};

var pres = document.getElementsByTagName('pre');
for( pre in pres ){
var c=pres[pre];
if(c.innerText)c.innerHTML=c.innerText
  .replace(/\</gm,'&lt;')
  .replace(/\>/gm,'&gt;')
  .hightlight()
}
*/
/*
  $('nav a').click(function(e){
      e.preventDefault()
      function u(a,b){return b === 'undefined'?b:a}
      var p = this.href.replace(new RegExp('http:\/\/'+top.location.host),'')
        ,arr = /\/?(\w+)?\/(\w+)\.html$/.exec(p)
        //,cl = arr[1]
        //,cl = typeof arr[1] === 'undefined'&&arr[1]||'index'
        ,cl = u('index',arr[1])
        ,id = arr[2]
      cl =
      nh = '#'+cl+'-'+id
      //this.href = '#'+cl+'-'+id
      alert('Aloha! '+this.href + ': .' + cl + ', #' + id + '  ' + nh);
  })*/

Variables
=========

<!--Данная таблица требует обьяснений. *Да, она просто кричит об этом!*
В этом документе выполняется скрипт, который передёт броузеру данные и получает информацию о том как эти данные понимает броузер.-->
<table>
  <thead>
    <tr><td>Тип данных</td><td>Мои данные</td><td>Получ. тип и длинна</td><td>возвр. значение</td><td>По умолчанию</td><td>Результат</td></tr>
  </thead>
  <tbody  id="javascript-table"/>
</table>
<script>
/*
function dumpProps(obj, parent) {
   // Go through all the properties of the passed-in object
   for (var i in obj) {
      // if a parent (2nd parameter) was passed in, then use that to
      // build the message. Message includes i (the object's property name)
      // then the object's property value on a new line
      if (parent) { var msg = parent + "." + i + " = " + obj[i]; } else { var msg = i + " = " + obj[i]; }
      // Display the message. If the user clicks "OK", then continue. If they
      // click "CANCEL" then quit this level of recursion
      //console.log(msg)
      // If this property (i) is an object, then recursively process the object
      if (typeof obj[i] == "object" && !(/child/.exec(i))) {
         if (parent) { dumpProps(obj[i], parent + "." + i); } else { dumpProps(obj[i], i); }
      }
   }
}

dumpProps(document);*/
ss = "[{0:'0',1:'a'}, ['0','a'], 99, false, !1, Infinity, NaN, 3.14, 0x8f, 070, -0.5e9, 'a\\t', \"1\\t\", /$/]";
tt = eval(ss)
ss = ss.substr(1,ss.length-2).split(', ');
//console.log(ss)
//console.log(tt)
out=''
for(x in tt){
  e = tt[x]
  v = e.valueOf()
  s = e.toString()
  //console.log(v)
  //t - type of variable
  c = e.constructor
  t = typeof c()
  n = c.name
  lv = v.length
  ls = s.length

  //p - prototypes of variable
  p = ''
  i = 0
  for (y in c){
    p += c[y]+'; ';
    i++
  }

  //stringify all information
  out+= '<tr><td class="code">'+n + '</td><td class="code">' + ss[x] + '</td><td class="code">' + t + '('+lv+'|'+ls+')</td><td class="code">' + s + '</td><td class="code">' + (new c) + '</td><td class="code">' + v + '</td></tr>'
}
document.getElementById('javascript-table').innerHTML = out;
console.log('javascript-table loaded');
</script>

Object
------

    {}
    var obj = { a: 13, b: 42, c: 211 };
    for (i in obj) console.log(i + ': ' + obj[i]);
    y in {3:0, 4:0, 5:0}; //true

Array
-----

    []
    var arr = ['0',0,{0:0},[0]]
    arr.push('a',1)
    arr.sort(function(a,b){return a - b}) //asc
    arr.sort(function(a,b){return b - a}) //desc
    var arr_copy = arr.slice(0)

String
------

    ''
    var str = "", s = ''
    0x4d + '' === '77'
    'qwerty'.indexOf('e') = 2
    'qwerty'.split('') = ['q','w','e','r','t','y']
    'qwerty'.substr(1,-2) = 'wer'

Number
------

    0
    var num = 2, flt = 3.14, lng = 5+e9, oct = -076, hex = 0x8F
    '0x4d' * 1 === 77
    num.toString(2) = bin
    num.toString(8) = oct
    num.toString(10) = dec
    num.toString(16) = hex

Boolean
-------

    true  === !false, null != (''||0), undefined*1 === NaN, Infinity === 1/0,
    true  === !0
    false === !1
    '' == 0 //false
    0 == '' //true
    0 == '0' //true

RegExp
------

    /./

Class
-----

    function Person(name, job) {
      this.name = name;
      this.job = job;
      this.print = function() {
        console.log(this.name + ', ' + this.job);
      };
      return this

    }

    var thatGuy = new Person("Jack", "coder");
    thatGuy.print();

Function
--------

    (function(){})
    TYPE.prototype.fn = function(){}

Cheatsheet
==========

Math
----

    Math.abs(a)     // the absolute value of a
    Math.acos(a)    // arc cosine of a
    Math.asin(a)    // arc sine of a
    Math.atan(a)    // arc tangent of a
    Math.atan2(a,b) // arc tangent of a/b
    Math.ceil(a)    // integer closest to a and not less than a
    Math.cos(a)     // cosine of a
    Math.exp(a)     // exponent of a (Math.E to the power a)
    Math.floor(a)   // integer closest to a, not greater than a
    Math.log(a)     // log of a base e
    Math.max(a,b)   // the maximum of a and b
    Math.min(a,b)   // the minimum of a and b
    Math.pow(a,b)   // a to the power b
    Math.random()   // pseudorandom number 0 to 1 (see examples)
    Math.round(a)   // integer closest to a (see rounding examples)
    Math.sin(a)     // sine of a
    Math.sqrt(a)    // square root of a
    Math.tan(a)     // tangent of a

Array
-----

    Array.concat()  // Joins two or more arrays, and returns a copy of the joined arrays
    Array.join(a)   // Joins all elements of an array into a string
    Array.pop()     // Removes the last element of an array, and returns that element
    Array.push(a)   // Adds new elements to the end of an array, and returns the new length
    Array.reverse() // Reverses the order of the elements in an array
    Array.shift()   // Removes the first element of an array, and returns that element
    Array.slice()   // Selects a part of an array, and returns the new array
    Array.sort(a)   // Sorts the elements of an array
    Array.splice(a) // Adds/Removes elements from an array
    Array.unshift() // Adds new elements to the beginning of an array, and returns the new length
    Array.toString() // Converts an array to a string, and returns the result

RegExp
------

    RegExp.test()    // Tests for a match in a string. Returns true or false
    RegExp.exec()    // Tests for a match in a string. Returns the first match
    RegExp.compile() // Compiles a regular expression

Document
--------

    document.clear
    document.createDocument
    document.createDocumentFragment
    document.createElement
    document.createEvent
    document.createEventObject
    document.createRange
    document.createTextNode
    document.getElementsByTagName
    document.getElementById
    document.write

Control Flow
============

## if

    if(a<=b || c>d && e!=f){}
    c=(typeof a!='undefined'&&a||b)+0x32/2-10*2.5; // $c=@$a?:$b;

for
---

    len = arr.length;
    for( i=0; i < len; i++){
      arr[i];
    }

    for( i in arr){
      i;
    }

while
-----

    var i=0
    while(i++>9){

    }

Reserved words
==============

    abstract (*)
    as (2)
    boolean
    break
    byte
    case
    catch
    char
    class (2)
    continue
    const (2)
    debugger (*)
    default
    delete
    do
    double
    else
    enum (*)
    export (2)
    extends (2)
    false
    final
    finally
    float
    for
    function
    goto (*)
    if
    implements (*)
    import (2)
    in
    instanceof
    int
    interface (2)
    is (2)
    long
    namespace (2)
    native (*)
    new
    null
    package (2)
    private (2)
    protected (*)
    public (2)
    return
    short
    static (2)
    super (2)
    switch
    synchronized (*)
    this
    throw
    throws (*)
    transient (*)
    true
    try
    typeof
    use (2)
    var
    void
    volatile (*)
    while
    with

JavaScript hacks
================

Facebook method
---------------

    document.getElementById('fb-login').onclick = function() {}

Create DOM element if not exists
--------------------------------

    function(id,el){
      var d = document,r = d.getElementById(id);
      if(!r){
        r = d.createElement(el);
        r.id = id;
      }
      return r;
    }

    function run(obj){
      var e = eval(obj.value),d = document,r = d.getElementById("result");
      if(!r){
        r = d.createElement("code");
        r.id = "result";
        r.innerHTML = e;
        d.body.appendChild(r);
      }else{
        r.innerHTML = e;
      }
    }

    function w(e){var d=document,i="result",r=d.getElementById(i),c=d.createElement("code"),a=(r||c);a.innerHTML=e;a.id=i;if(!r)d.body.appendChild(a);}
    <script>
    g='document.getElementById(v).innerHTML';v="a";console.log(eval(g));v="b";console.log(eval(g));v="c";console.log(eval(g));
    d=document;console.log(d.getElementById("a").innerHTML);console.log(d.getElementById("b").innerHTML);console.log(d.getElementById("c").innerHTML);
    function f(v){return document.getElementById(v).innerHTML}console.log(f("a"));console.log(f("b"));console.log(f("c"));
    </script>
    <b id="a">a</b>
    <b id="b">b</b>
    <b id="c">c</b>

Tag Clouds
----------

    function cloud(arr){
      var out = {};
      for(x in arr){
        //if(typeof out[arr[x]]=='undefined'){out[arr[x]]=0}out[arr[x]]++;
        //out[arr[x]]=(typeof out[arr[x]]!='undefined'&&out[arr[x]]||0)+1;
        y=out[arr[x]];out[arr[x]]=(typeof y!='undefined'&&y||0)+1;
      }
      return out;
    }
    String.prototype.cloud = function() {
        return cloud(this.split(''));
    }
    var s = "Lorem, lipsum lirem"
    var tags = cloud(s.toLowerCase().replace(/[\W]/g,' ').split(' '))
    var chars = cloud(s.toLowerCase().replace(/[\W]/g,'').split(''))

asort
-----
В JavaScript сортировка обьектов происходит автоматически, но иногда потребуется сортировать либо в обратном порядке:

    ([3,7,5,15,10,6,1]).sort(function(a,b){return b-a})

либо особой функцией или последовательностью:

    ([3,7,5,15,10,6,1]).sort(function(a,b){return a*(b-a))})

либо сортировать ключи по содержимому:

    Object.prototype.asort = function(){
      sorter = function (a, b) {
        var aFloat = parseFloat(a),
          bFloat = parseFloat(b),
          aNumeric = aFloat + '' === a,
          bNumeric = bFloat + '' === b;
        if (aNumeric && bNumeric) {
          return aFloat > bFloat ? 1 : aFloat < bFloat ? -1 : 0;
        } else if (aNumeric && !bNumeric) {
          return 1;
        } else if (!aNumeric && bNumeric) {
          return -1;
        }
        return a > b ? 1 : a < b ? -1 : 0;
      };
      var arr = []
      for (k in this) {if (this.hasOwnProperty(k)) {arr.push([k, this[k]]);}}
      return arr.sort(function (a, b) {return sorter(b[1],a[1]);});
    }

    ([["b","lemon"], ["d","orange"], ["a","banana"], ["c","apple"]]).asort()

Другие примеры сортировки:


    ([3,1,'a',2,'c',15,'b','aa']);
    ([3,1,'a',2,'c',15,'b','aa']).sort();
    ([3,1,'a',2,'c',15,'b','aa']).reverse();
    ([3,1,'a',2,'c',15,'b','aa']).sort().reverse();
    ([3,1,'a',2,'c',15,'b','aa']).sort(function(a,b){return a});
    ([3,1,'a',2,'c',15,'b','aa']).sort(function(a,b){return b});
    ([3,1,'a',2,'c',15,'b','aa']).sort().sort(function(a,b){return a>0?a-b:b});
    ([3,1,'a',2,'c',15,'b','aa']).sort().sort(function(a,b){return a>0?a-b:b}).reverse();
    ([3,1,'a',2,'c',15,'b','aa']).sort(function(a,b){return a>0?a-b:b});

    ([3,17,5,15,1,Math.PI]);
    ([3,17,5,15,1,Math.PI]).sort(function(a,b){return b-a});
    ([3,17,5,15,1,Math.PI]).sort(function(a,b){return a*b});
    ([3,17,5,15,1,Math.PI]).sort();
    ([3,17,5,15,1,Math.PI]).sort(function(a,b){return a%b});
    ([3,17,5,15,1,Math.PI]).sort(function(a,b){return b%a*a%b});
    ([3,17,5,15,1,Math.PI]).sort(function(a,b){return new Date() % a});

remove counts
-------------

    for(x in arr){arr[x].pop()}
    arr.join('')

clone
-----

    function clone(o) {
      if(!o || 'object' !== typeof o)  {
        return o;
      }
      var c = 'function' === typeof o.pop ? [] : {};
      var p, v;
      for(p in o) {
        if(o.hasOwnProperty(p)) {
          v = o[p];
          if(v && 'object' === typeof v) {
            c[p] = clone(v);
          }
          else {
            c[p] = v;
          }
        }
      }
      return c;
    }

Minified:

    function clone(a){if(!a||"object"!=typeof a)return a;var b="function"==typeof a.pop?[]:{},c,d;for(c in a)a.hasOwnProperty(c)&&(d=a[c],b[c]=d&&"object"==typeof d?clone(d):d);return b};

jQuery hacks
============

jQuery selectors
----------------

    $('#id, form, input') // fast selectors
    this.parent.find('.child') // naiborhoods
    $('.class').eq(0) // first occurrence

Loading jQuery
--------------

    jQuery(function($){
      //...//
    });

    $(function() {
      //...//
    });

    (function($){
      //...//
    })(jQuery);

Turn jQuery into Plugin
-----------------------

    $.fn.yourPluginName = function(){
      //...//
      return this;
    };

Creating advanced Plugin
------------------------

    $.fn.toggler = function(options) {
      var opts = $.extend({}, $.fn.toggler.defaults, options);
      function onClick() {
        this.togglee[opts.animate ? 'slideToggle' : 'toggle']();
        return false;
      }
      return this.each(function() {
        this.togglee = $($(this).attr('href')).hide();
        $(this).click(onClick);
      });
    }
    $.fn.toggler.defaults = {animate: false}

    $('.toggle-and-animate').toggler({animate:true});

DOM: Object with params
----------------------

    var e = $("<a />", { href: "#", class: "a-class another-class", title: "..." });

    $("<a />", {
        ...
        id: '',
        class: '',
        href: '',
        css: {
            color: "#FF0000",
            display: "block"
        }
    });

DOM: Nested objects
-------------------

    $('#something')
    .append(div)
    .append(div.clone(true))
    .append(
        $('<button>Button</button>').click(function(){
            app.doStuff();
        })
    );

/ Note: Keep the HTML… in the HTML /

    $('#something')
    .append('<div><a href="javascript:void(0)"></a></div>')
    .append('<div><a href="javascript:void(0)"></a></div>')
    .append('<button onclick="app.doStuff()">Button</button>');

Id = id
-------

    $(this).attr('id') = this.id

AJAX
----

    $.ajaxSetup({
        url : 'json',
        type: 'GET',
        dataType : 'json'
    });
    $.ajax({
        data : yourData,
        success : function( results ) {
            console.log('success');
        })
    });

Extending :pseudo-selections
----------------------------

    $.extend($.expr[':'], {
        over100pixels: function(a) {
            return $(a).height() > 100;
        },
        random: function(a, i, m, r) {
            if (i == 0) {
                random = Math.floor(Math.random() * r.length);
            }
            return i == random;
        }
    });

Animations
----------

    $("#someElement").hover(function(){
        $("div.desc", this).stop(true,true).fadeIn();
    },function(){
        $("div.desc", this).fadeOut();
    });

    $('#elem').animate({width:200}).delay(2000).animate({marginTop:100});

Centerize element
-----------------

    jQuery.fn.center = function () {
        this.css("position","absolute");
        this.css("top", ( $(window).height() - this.height() ) / 2+$(window).scrollTop() + "px");
        this.css("left", ( $(window).width() - this.width() ) / 2+$(window).scrollLeft() + "px");
        return this;
    }

QuickEach
---------

    jQuery.fn.quickEach = (function() {
       var jq = jQuery([1]);
       return function(c) {
        var i = -1,
            el, len = this.length;
        try {
         while (++i < len && (el = jq[0] = this[i]) && c.call(jq, i, el) !== false);
        } catch (e) {
         delete jq[0];
         throw e;
        }
        delete jq[0];
        return this;
      };
    }());

The smaller the number, the faster the website is rendered
----------------------------------------------------------

    console.log( $('*').length );

Storage
-------

    // Check if "key" exists in the storage
    var value = $.jStorage.get("key");
    if(!value){
      // if not - load the data from the server
      value = load_data_from_server();
      // and save it
      $.jStorage.set("key",value);
    }

jQuery and HTML5 metadata
-------------------------

    <input
      name="email"
      class="validation {validate: email, minLength: 2, maxLength: 50}" />
    <script>
    jQuery('*[class=validation]').each(function () {
        var metadata = $(this).metadata();
        // etc.
    });
    </script>

Changing the type of an input element
-------------------------------------

    var oldButton = jQuery("#Submit");
    var newButton = oldButton.clone();
    newButton.attr("type", "button");
    newButton.attr("id", "newSubmit");
    newButton.insertBefore(oldButton);
    oldButton.remove();
    newButton.attr("id", "Submit");

Going over the top with chaining
--------------------------------

    $('a').addClass('reg-link')
      .find('span')
        .addClass('inner')
      .end().end()
      .find('div')
        .mouseenter(mouseEnterHandler)
        .mouseleave(mouseLeaveHandler)
      .end()
      .explode();

<textarea id="code" class="pre" cols="97" rows="25" placeholder="// Write some code here and realese mouse from area then done: function foo(bar){return bar*bar}"></textarea>
Result
------

<pre id="result"></pre>

Hightlighted code
-----------------

<pre id="hightlighted"></pre>

<script src="//iegik.github.io/js/hightlighter.min.js"></script>
<script>
(function(d,code,result,hightlighted){
  d.getElementById(code).onchange=function(){
    var c=this.value,
      e=eval(c);
    if(e){
      d.getElementById(result).innerHTML=e.toString().hightlight();
      d.getElementById(hightlighted).innerHTML=c.hightlight();
    }
  }
})(document,'code','result','hightlighted');
</script>

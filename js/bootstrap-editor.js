$.fn.editable = function(options) {
  var opts = $.extend({}, $.fn.editable.defaults, options);
  return this.each(function() {
    this.style.webkitApperiance = 'textarea';
    this.contentEditable=true;
  });
}

$.fn.editable.defaults = {
}
$.fn.editor = function(options) {
  var opts = $.extend({}, $.fn.editor.defaults, options);
  return this.each(function() {
    $('.'+$(this).data('toggle')).editable();
    // new save print bold/strong italic/em stroke center start end justify ol
    $(this).find('[data-target="strong"]').click(function(){
      var range = window.getSelection().getRangeAt(0);
      var selectionContents = range.startOffset != range.endOffset && range.extractContents() || range.commonAncestorContainer;
      var tag = document.createElement("strong");
      tag.appendChild(selectionContents);
      range.insertNode(tag);
    });
    $(this).find('[data-target="ephasis"]').click(function(){
      var range = window.getSelection().getRangeAt(0);
      var selectionContents = range.startOffset != range.endOffset && range.extractContents() || range.commonAncestorContainer;
      var tag = document.createElement("em");
      tag.appendChild(selectionContents);
      range.insertNode(tag);
    });
    $(this).find('[data-target="stroketrougth"]').click(function(){
      var range = window.getSelection().getRangeAt(0);
      var selectionContents = range.startOffset != range.endOffset && range.extractContents() || range.commonAncestorContainer;
      var tag = document.createElement("del");
      tag.appendChild(selectionContents);
      range.insertNode(tag);
    });

    $(this).find('[data-target="align-start"]').click(function(){
      var range = window.getSelection().getRangeAt(0);
      range.commonAncestorContainer.parentElement.style.textAlign = 'start';
    });
    $(this).find('[data-target="align-end"]').click(function(){
      var range = window.getSelection().getRangeAt(0);
      range.commonAncestorContainer.parentElement.style.textAlign = range.commonAncestorContainer.parentElement.style.textAlign == 'end'?'':'end';
    });
    $(this).find('[data-target="align-justify"]').click(function(){
      var range = window.getSelection().getRangeAt(0);
      range.commonAncestorContainer.parentElement.style.textAlign = range.commonAncestorContainer.parentElement.style.textAlign == 'justify'?'':'justify';
    });
    $(this).find('[data-target="align-center"]').click(function(){
      var range = window.getSelection().getRangeAt(0);
      range.commonAncestorContainer.parentElement.style.textAlign = range.commonAncestorContainer.parentElement.style.textAlign == 'center'?'':'center';
    });

    $(this).find('[data-target="bullets"]').click(function(){
      var range = window.getSelection().getRangeAt(0);
      var selectionContents = range.startOffset != range.endOffset && range.extractContents() || range.commonAncestorContainer;
      var tag = document.createElement("ul");
      var subtag = document.createElement("li");
      subtag.appendChild(selectionContents);
      tag.appendChild(subtag);
      range.insertNode(tag);
    });
    $(this).find('[data-target="numbering"]').click(function(){
      var range = window.getSelection().getRangeAt(0);
      var selectionContents = range.startOffset != range.endOffset && range.extractContents() || range.commonAncestorContainer;
      var tag = document.createElement("ol");
      var subtag = document.createElement("li");
      subtag.appendChild(selectionContents);
      tag.appendChild(subtag);
      range.insertNode(tag);
    });
    $(this).find('[data-target="pull"]').click(function(){
    });
    $(this).find('[data-target="push"]').click(function(){
    });

    $(this).find('[data-target="webcam"]').click(function(){
    });
    $(this).find('[data-target="float-left"]').click(function(){
      var r = window.getSelection().getRangeAt(0),
        c = r.commonAncestorContainer.children[0];
      c.style.float = c.style.float == 'left'?'':'left';
    });
    $(this).find('[data-target="float-right"]').click(function(){
      var r = window.getSelection().getRangeAt(0),
        c = r.commonAncestorContainer.children[0];
      c.style.float = c.style.float == 'right'?'':'right';
    });
    $(this).find('[data-target="float-top"]').click(function(){
      var r = window.getSelection().getRangeAt(0),
        c = r.commonAncestorContainer.children[0];
      c.style.float = 'none';
    });

    $(this).find('[data-target="paragraph"]').click(function(){
      var range = window.getSelection().getRangeAt(0);
      var selectionContents = range.commonAncestorContainer;
      var tag = document.createElement("p");
      tag.appendChild(selectionContents);
      range.insertNode(tag);
    });
    $(this).find('[data-target="heading1"]').click(function(){
      var range = window.getSelection().getRangeAt(0);
      var selectionContents = range.commonAncestorContainer;
      var tag = document.createElement("h1");
      tag.appendChild(selectionContents);
      range.insertNode(tag);
    });
    $(this).find('[data-target="heading2"]').click(function(){
      var range = window.getSelection().getRangeAt(0);
      var selectionContents = range.commonAncestorContainer;
      var tag = document.createElement("h2");
      tag.appendChild(selectionContents);
      range.insertNode(tag);
    });
    $(this).find('[data-target="heading3"]').click(function(){
      var range = window.getSelection().getRangeAt(0);
      var selectionContents = range.commonAncestorContainer;
      var tag = document.createElement("h3");
      tag.appendChild(selectionContents);
      range.insertNode(tag);
    });
    $(this).find('[data-target="heading4"]').click(function(){
      var range = window.getSelection().getRangeAt(0);
      var selectionContents = range.commonAncestorContainer;
      var tag = document.createElement("h4");
      tag.appendChild(selectionContents);
      range.insertNode(tag);
    });
    $(this).find('[data-target="heading5"]').click(function(){
      var range = window.getSelection().getRangeAt(0);
      var selectionContents = range.commonAncestorContainer;
      var tag = document.createElement("h5");
      tag.appendChild(selectionContents);
      range.insertNode(tag);
    });
    $(this).find('[data-target="heading6"]').click(function(){
      var range = window.getSelection().getRangeAt(0);
      var selectionContents = range.commonAncestorContainer;
      var tag = document.createElement("h6");
      tag.appendChild(selectionContents);
      range.insertNode(tag);
    });
    $(this).find('[data-target="quote"]').click(function(){
      var range = window.getSelection().getRangeAt(0);
      var selectionContents = range.startOffset != range.endOffset && range.extractContents() || range.commonAncestorContainer;
      var tag = document.createElement("blockquote");
      tag.appendChild(selectionContents);
      range.insertNode(tag);
    });
    $(this).find('[data-target="monospace"]').click(function(){
      var range = window.getSelection().getRangeAt(0);
      var selectionContents = range.commonAncestorContainer;
      var tag = document.createElement("pre");
      tag.appendChild(selectionContents);
      range.insertNode(tag);
    });
  });
}

$.fn.editor.defaults = {
}

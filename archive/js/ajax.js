$(function(){
	var LoadMsg = 'Please Wait ...';
	var AjaxPath = 'pages/';
	$('#hd ul li a').click(function(){
		if(!$(this).hasClass("current")) {
			var _Href = $(this).attr('href');
			$('#hd ul li a').removeClass("current");
			$(this).addClass("current");
			$('<div id="loading">'+LoadMsg+'</div>').appendTo('body').fadeIn('slow',function(){
				$.ajax({
					type:	'GET',
					url:	AjaxPath+_Href,
					dataType:	'html',
					timeout:	5000,
					success: function(d,s){
							$('#loading').fadeOut('slow',function(){
								$(this).remove();
								$('#bd').slideUp('slow',function(){
										$(this).html(d).slideDown('slow');
									});
								});
							},
					error: function(o,s,e){
								$('#loading').html('Ajax Request Failed: '+s);
								eTimer(_Href);
							}
				});
			});
		}
		return false;
	});
	
	function eTimer(url) {
		var t=setTimeout("window.location='"+url+"'",1000);
		$('#loading').fadeOut('slow');
	}

});

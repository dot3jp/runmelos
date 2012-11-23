$(function(){
	$('#tour li a').lightBox();
	
	var $img = $("#catchImg").find("img").css({"opacity":0, "display":"block"});
	
	$("#catchImg").hover(function(){$img.stop().animate({"opacity":1},200);}, function(){$img.stop().animate({"opacity":0},200);})
	$("#catchImg").click(function()
	{
		$(this).children().remove();
		$(this).append('<iframe width="552" height="414" src="http://www.youtube.com/embed/RWoxL_6kpR4?&amp;autohide=1&amp;autoplay=1" frameborder="0" allowfullscreen=""></iframe>');
	});
	
	$("#tour a").click(function(e)
	{
		e.stopPropagation();
		
		$("iframe").hide();
		$("#jquery-lightbox, #jquery-overlay, #lightbox-secNav-btnClose").click(function()
		{
			$("iframe").show()
		})
	});
	
	
});

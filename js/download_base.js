$(function(){
	$(".links-box p").click(function(){
		if($(this).siblings(".links-list").css("display") == "none"){
			$(this).siblings(".links-list").stop().slideDown(300)
		}else{
			$(this).siblings(".links-list").stop().slideUp(300)
		}
	})//BackTop
	Hover($(".back-top"), "hover")
	$(".back-top").click(function(){
		$("html,body").stop().animate({scrollTop: 0}, 600);
	})//二维码 
			$("#imgewm").hover(function(){
				$(".erweima-box").css("width",'100%').show(600);
			})
})
$(function(){
	//前端方便修改Header,Footer等部分公共内容,做程序时请把公共部分嵌回页面并提取JS放置于此Function内
		//Header
	//$(".header").load("inc/header.html");
		//Footer
	//$(".footer").load("inc/footer.html");

	
	$(window).scroll(function(){
		//Header Main
		if($(window).scrollTop() > 35){
			$(".header-main").addClass("fixed").stop().animate({
				"padding-top"    : 0,
				"padding-bottom" : 6
			}, 300)
		}else{
			$(".header-main").removeClass("fixed").stop().animate({
				"padding-top"    : 20,
				"padding-bottom" : 26
			}, 300)
		}
		
		//Right Float
		//$(".right-float").stop().animate({top: $(window).scrollTop() + 300}, 600);
	})
	
	$(".inside-tips a.link").hover(function(){
        $(this).stop().animate({right: 0}, 500);
    }, function(){
        $(this).stop().animate({right: 5}, 500);
    })
});

function Hover(obj, calssName) {
	obj.hover(function(){
		$(this).addClass(calssName);
	},function(){
		$(this).removeClass(calssName);
	})
}

$('.swiper-slide a').hover(function(){
		$(".swiper_content_text", this).stop().animate({top:'0'},{queue:false,duration:160});
	}, function() {
		$(".swiper_content_text", this).stop().animate({top:'260'},{queue:false,duration:160});
	});
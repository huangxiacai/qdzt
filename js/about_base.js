$(function(){
	$(".links-box p").click(function(){
		if($(this).siblings(".links-list").css("display") == "none"){
			$(this).siblings(".links-list").stop().slideDown(300)
		}else{
			$(this).siblings(".links-list").stop().slideUp(300)
		}
	})
	//BackTop
	Hover($(".back-top"), "hover")
	$(".back-top").click(function(){
		$("html,body").stop().animate({scrollTop: 0}, 600);
	})
			//二维码 
			$("#imgewm").hover(function(){
				$(".erweima-box").css("width",'100%').show(600);
			})
});

$(function(){
	//第一排特殊效果;
	$(".about-netwrok").click(function(){
		window.location.href="/about-qyry";
	})
	$(".about-t li").stop().animate({top: 0}, 600);
	$(window).scroll(function(){
		if($(window).scrollTop() > 150){
			$(".about-netwrok .center").stop().fadeIn(800, function(){
				$(".line-fi").stop().animate({width: 169}, 500);
				$(".line-se").stop().animate({width: 49}, 500);
				$(".line-th").stop().animate({width: 44}, 500);
				$(".line-fo").stop().animate({width: 27}, 500);
				$(".about-netwrok .btn img").stop().animate({
					width : 100 + '%',
					left  : 0,
					top   : 0
				}, 1000, function(){
					$(".about-netwrok .btn span").show();
				})
			}).css("opacity", 1)
		}
	})
    $(".about-b .r-box").hover(function(){
        $(this).find(".bg").stop().animate({top: -135}, 500);
    }, function(){
        $(this).find(".bg").stop().animate({top: -13}, 500);
    })
})
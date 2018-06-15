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
$(function(){
    if("001001".length/3==2){
    $("#select-list p").html("产品");
    }
     if("001001".length/3==3){
    $("#select-list p").html("产品");
    $("#select-next p").html("产品");
    }
    //Banner
    var w=screen.width-20
	$(".box_skitter").width(w);
    $('.box_skitter').skitter({
        animation: 'cubeSpread',
        interval: 5000,
        numbers: false
    });
    $(".box_skitter .prev_button").hover(function(){
        $(this).find("img").stop().animate({left: -65}, 500);
    }, function(){
        $(this).find("img").stop().animate({left: -130}, 500, function(){
            $(".box_skitter .prev_button img").css("left", 0)
        });
    })
    $(".box_skitter .next_button").hover(function(){
        $(this).find("img").stop().animate({right: -65}, 500);
    }, function(){
        $(this).find("img").stop().animate({right: -130}, 500, function(){
            $(".box_skitter .next_button img").css("right", 0)
        });
    })
});
var mySwiper = new Swiper('.swiper-container',{
	autoplay: 5000,
});
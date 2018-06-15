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
});
$(function(){//Banner
   var w=screen.width-20
	$(".box_skitter").width(w);//alert($(".box_skitter").width());
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
    Hover($(".proinfo-list .btn"), "hover");
    $(".tab-boxs:first").show(0, function(){
        $(".tab-box").height($(".tab-boxs:first").height());
    });
	
    $(".tab-list li").click(function(){
        var n = $(this).index();
        location.hash=n;
        $(this).addClass("on").siblings().removeClass("on");
        $(".tab-boxs").eq(n).show(0, function(){
            $(".tab-box").height($(".tab-boxs").eq(n).height());
        }).siblings().hide();
    })
    $(".tab-download li").hover(function(){
        $(this).addClass("hover").find(".t img").stop().animate({top: -23}, 500);
    }, function(){
        var $T = $(this);
        $T.removeClass("hover").find(".t img").stop().animate({top: 0}, 500, function(){
            $T.find(".t img").css("top", -46)
        });
    })
});
$(function(){ //图片上下页控制器;
    $(".honor-img .prev").hover(function(){
        $(this).find("img").stop().animate({left: -65}, 500)
    }, function(){
        $(this).find("img").stop().animate({left: -130}, 500, function(){
            $(".honor-img .prev img").css("left", 0)
        })
    })
    $(".honor-img .next").hover(function(){
        $(this).find("img").stop().animate({right: -65}, 500)
    }, function(){
        $(this).find("img").stop().animate({right: -130}, 500, function(){
            $(".honor-img .next img").css("right", 0)
        })
    })
    imgShow($(".honor-img .list"),$(".honor-img .img"),6,109,"margin-left");
})
var mySwiper = new Swiper('.swiper-container',{
	autoplay: 5000,
});

$(function(){
	var imgNum=$('img').length;
	$('img').load(function(){
	    --imgNum
	     var h=$(".tab-boxs:first").height();
	     var th=$(".tab-box").height();
	     $(".tab-box").height($(".tab-boxs:first").height());
	    
	});
});

$(function(){//特效代码;
    $(".inside-tips a.mail,.inside-tips a.download").hover(function(){
        $(this).stop().animate({top: 93}, 500);
    }, function(){
        $(this).stop().animate({top: 88}, 500);
    })
    $(".investor-main .title a").hover(function(){
        $(this).siblings().find(".line-in").stop().animate({left: 0}, 500)
    }, function(){
        var $t = $(this);
        $t.siblings().find(".line-in").stop().animate({left: 24}, 500, function(){
            $t.siblings().find(".line-in").css("left", -24);
        })
    })
    $(".stock-box").hover(function(){
        $(this).find(".line-fi .line-in").css("top", 24).stop().animate({top: 0}, 500);
        $(this).find(".line-se .line-in").css("top", 43).stop().animate({top: 0}, 500);
        $(this).find(".line-th .line-in").css("top", 34).stop().animate({top: 0}, 500);
        $(this).find(".line-fo .line-in").css("left", -54).stop().animate({left: 0}, 500);
    }, function(){
        $(this).find(".line-fi .line-in").css("top", 0)
        $(this).find(".line-se .line-in").css("top", 0)
        $(this).find(".line-th .line-in").css("top", 0)
        $(this).find(".line-fo .line-in").css("left", 0)
    })
    $(".investor-fo .l li").hover(function(){
        $(this).find(".sign .bg").stop().animate({top: -72}, 500);
    }, function(){
        $(this).find(".sign .bg").stop().animate({top: 0}, 500);
    })
    $(".investor-fi .l").stop().animate({left: 0}, 800, function(){
        $(".investor-se .l").stop().animate({left: 0}, 800)
    })
    $(".investor-fi .r").stop().animate({right: 0}, 800, function(){
        $(".investor-se .r").stop().animate({right: 0}, 800)
    })
   $(".investor-fo .l").stop().animate({left: 0}, 800)
   $(".investor-fo .r").stop().animate({right: 0}, 800)

 $(".investor-th .l").stop().animate({left: 0}, 800)
        $(".investor-th .r").stop().animate({right: 0}, 800)
    $(window).scroll(function(){
       /* if($(window).scrollTop() > 0){
            $(".investor-th .l").stop().animate({left: 0}, 800)
            $(".investor-th .r").stop().animate({right: 0}, 800)
        }*/
       
        /* if($(window).scrollTop() > 15){
            $(".investor-fo .l").stop().animate({left: 0}, 800)
            $(".investor-fo .r").stop().animate({right: 0}, 800)
        }*/
    })
});

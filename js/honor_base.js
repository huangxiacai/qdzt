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

$(function(){
    //荣誉图片集效果;
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
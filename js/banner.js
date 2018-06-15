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
    $("#btnreg2").click(function(){
        $("#login-box").hide();
        $("#regist-box").show();
  })
            //二维码 
            $("#imgewm").hover(function(){
            })
});

$(function(){
    //Banner
    var w=screen.width-20
    $(".box_skitter").width(w);
    $('.box_skitter').skitter({
        animation: 'cubeJelly',
        interval: 3000,
        navigation: false,
        numbers_align: 'right'
    });
    //Index Products
    Hover($(".index-pro .btn"), "hover");
    var $ProListUl = $(".index-pro .list ul"),
        $ProListLi = $(".index-pro .list li"),
        $ProPrev   = $(".index-pro .prev"),
        $ProNext   = $(".index-pro .next");
    if($ProListLi.length > 3){
        $ProNext.show();
        $ProListUl.width($ProListLi.length * 342);
        $ProListLi.eq(2).addClass("on");
        $ProNext.click(function(){
            $ProPrev.show();
            $(".index-pro .list li.on").next().addClass("on").siblings().removeClass("on");
            var n = $(".index-pro .list li.on").index() - 2;
            $ProListUl.stop().animate({marginLeft: -342 * n}, 500);
            if($(".index-pro .list li.on").index() == $(".index-pro .list li").length - 1){
                $ProNext.hide();
            }
        })
        $ProPrev.click(function(){
            $ProNext.show();
            $(".index-pro .list li.on").prev().addClass("on").siblings().removeClass("on");
            var n = $(".index-pro .list li.on").index() - 2;
            $ProListUl.stop().animate({marginLeft: -342 * n}, 500);
            if($(".index-pro .list li.on").index() == 2){
                $ProPrev.hide();
            }
        })
    }
    $(".index-links li").hover(function(){
        $(this).find(".sign .bg").stop().animate({top: -50}, 500);
    }, function(){
        $(this).find(".sign .bg").stop().animate({top: 0}, 500);
    })
    $(".index-news .l").css({left: 0})
    $(".index-news .r").css({left: 683})
    /*$(window).scroll(function(){
        if($(window).scrollTop() > 402){
            $(".index-news .l").stop().animate({left: 0}, 500)
            $(".index-news .r").stop().animate({left: 683}, 800)
        }
    })*/
});
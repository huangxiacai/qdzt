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

$(function(){//产品左右滚动代码;
    $(".inside-tips a.download,.inside-tips a.box").hover(function(){
        $(this).stop().animate({top: 93}, 500);
    }, function(){
        $(this).stop().animate({top: 88}, 500);
    })
    var $UL   = $(".products-list ul"),
        $LI   = $(".products-list li"),
        $Prev = $(".products-list .prev"),
        $Next = $(".products-list .next");
    $LI.hover(function(){
        $(this).find(".line-t").stop().animate({width: 319}, 500);
        $(this).find(".line-r").stop().animate({height: 419}, 500);
        $(this).find(".line-b").stop().animate({width: 314}, 500);
        $(this).find(".line-l").stop().animate({height: 414}, 500);
        $(this).siblings().find(".bg").stop().animate({
            left  : 0,
            width : 100 + '%'
        }, 500)
    }, function(){
        $(this).find(".line-t").stop().animate({width: 0}, 500);
        $(this).find(".line-r").stop().animate({height: 0}, 500);
        $(this).find(".line-b").stop().animate({width: 0}, 500);
        $(this).find(".line-l").stop().animate({height: 0}, 500);
        $(this).siblings().find(".bg").stop().animate({
            left  : 50 + '%',
            width : 0
        }, 500)
    })
    $UL.width( $LI.length * 320);
    if( $LI.length > Math.ceil($(window).width() / 320)){
        $Next.css("background", "url(/images/next02.png) no-repeat");
    }
    $Next.click(function(){
        $Prev.css("background", "url(/images/prev02.png) no-repeat");
        var W = (Math.ceil($(window).width() / 320)-1) * 320 ,
            N = $(this).attr("data-num");
        N ++ ;
        if( N < $LI.length / Math.ceil($(window).width() / 320) +1){
            if(N  > $LI.length / Math.ceil($(window).width() / 320)){
                $(this).css("background", "none");
            }
            $(this).attr("data-num", N);
            $Prev.attr("data-num", N);
            $UL.stop().animate({marginLeft: - W * N}, 500);
        }
    })
    $Prev.click(function(){
        $Next.css("background", "url(/images/next02.png) no-repeat");
        var W = (Math.ceil($(window).width() / 320)-1) * 320 ,
            N = $(this).attr("data-num");
        N -- ;
        if( N >= 0){
            if(N - 1 < 0){
                $(this).css("background", "none");
            }
            $(this).attr("data-num", N);
            $Next.attr("data-num", N);
            $UL.stop().animate({marginLeft: - W * N}, 500);
        }
    })
})
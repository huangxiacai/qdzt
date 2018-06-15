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
$(function(){//$(".nav li").eq(3).children("a").addClass("on");
    $(".newsinfo-join .btn").click(function(e){
        e.preventDefault();
        $(".out-box").show().find(".out-main").css("top", ($(window).height() - 437) / 2 + $(window).scrollTop() );
    })
})
$(function(){//Header Search
    $(".header-top .select p").click(function(){
        $(this).siblings().stop().slideDown(300, function(){
            $(".header-top .select-box a").click(function(){
                $(".header-top .select-box").stop().slideUp(300);
                $(".header-top .select p").html($(this).html());
                $("#stype").val($(this).html());//选中的产品或者内容给hidden
            })
        })
    })
    $("#wxs").hover(function(){
        $(".wx-box").slideDown(300);
    }
    ,function(){
        $(".wx-box").slideUp(300);
    })
    $(".language p").click(function(){
        if($(".language-list").css("display") == "none"){
            $(".language").addClass("on");
            $(this).siblings().stop().slideDown(300, function(){
                $(".language-list a").click(function(){
                    $(".language-list").stop().slideUp(300);
                    $(".language p").html($(this).html());
                    $(".language").removeClass("on");
                })
            })
        }else{
            $(".language-list").stop().slideUp(300);
            $(".language").removeClass("on");
        }
    })
    var cls;//导航下拉js
    $(".nav li").hover(function(){
        var the=$(this);
       cls=setInterval(function(){
                the.find(".sign").show();
                the.find(".subnav").stop(true,true).slideDown(500);
                clearInterval(cls);
       },500)
    }, function(){
            clearInterval(cls);
            $(this).find(".sign").hide();
            $(this).find(".subnav").stop(true,true).slideUp(10);        
    });
})
var usersplit=$(".user_split_string");
	if(usersplit!=undefined &&usersplit!=null &&usersplit.length>0){
		for(var i=0;i<usersplit.length;i++){
			var gettest=usersplit.eq(i).html();
			usersplit.eq(i).html(gettest.split("_")[0]);
		}
	}
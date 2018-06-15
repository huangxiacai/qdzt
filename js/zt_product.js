$("body").on('click',".zt_hasShow_list",function(){
	if($(this).hasClass("glyphicon-plus-sign")){
		$(this).removeClass("glyphicon-plus-sign");
		$(this).addClass("glyphicon-minus-sign");
	}else if($(this).hasClass("glyphicon-minus-sign")){
		$(this).removeClass("glyphicon-minus-sign");
		$(this).addClass("glyphicon-plus-sign");
	}
	if($(this).parent().next("dd").hasClass("zt_def_hide")){
		$(this).parent().next("dd").removeClass("zt_def_hide");
	}else{
		$(this).parent().next("dd").addClass("zt_def_hide");
	}
})
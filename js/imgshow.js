function imgShow(imgList,imgShow,number,width,direction){
	var objUl   = imgList.find("ul"),
		objLi   = imgList.find("li"),
		objCImg = objLi.children("img"),
		objImg  = imgShow.find("img"),
		objUp   = $(".honor-img .prev"),
		objDown = $(".honor-img .next");
	objUl.width(objLi.length*width*2);
	objLi.click(function(){
		proSlideRun(objLi.index(this));
	})
	objUp.click(function(){
		proSlideRun(objLi.index(objUl.children("li.on"))-1);
	})
	objDown.click(function(){
		proSlideRun(objLi.index(objUl.children("li.on"))+1);
	})
	function proSlideRun(n){
		if(n>=objLi.length){n=objLi.length-1;return false;}
		if(n<0){n=0;return false;}
		if(n<=1){
			if(direction == "margin-left"){
				objUl.animate({"margin-left":0},300);	
			}else{
				objUl.animate({"margin-top":0},300);		
			};			
		}else if(n>=objLi.length-(number-1) && objLi.length-(number-1)>0){
			if(direction == "margin-left"){
				objUl.animate({"margin-left":-(objLi.length-number)*width+"px"},300);
			}else{
				objUl.animate({"margin-top":-(objLi.length-number)*width+"px"},300);	
			};
		}else if(objLi.length-(number-1)>0){
			if(direction == "margin-left"){
				objUl.animate({"margin-left":-(n-1)*width+"px"},300);
			}else{
				objUl.animate({"margin-top":-(n-1)*width+"px"},300);	
			};
		}
		objLi.removeClass("on").eq(n).addClass("on");
		objImg.fadeTo(300,0,function(){
			objImg.attr("src","");
			objImg.fadeTo(300,1,function(){
				objImg.attr("src",objLi.eq(n).children("img").attr("data-img"));
				objImg.siblings(".tips").html(objLi.eq(n).children("img").attr("data-tips"));
			});
		})
	};
	proSlideRun(0);
}
var usersplit=$(".user_split_string");
	if(usersplit!=undefined &&usersplit!=null &&usersplit.length>0){
		for(var i=0;i<usersplit.length;i++){
			var gettest=usersplit.eq(i).html();
			usersplit.eq(i).html(gettest.split("_")[0]);
		}
	}
$(function(){
	//Imgshow-Scroll
	var $imgshowUl = $(".news-rec ul");
	var $imgshowLi = $(".news-rec li");
	var $prev = $(".news-rec .prev");
	var $next = $(".news-rec .next");
	$imgshowLi.eq(1).stop().animate({
		left: 113,
		top: 0,
		width: 514,
		height: 339
	},500).addClass("on");

	var $imgshowLiOn = $(".news-rec li.on");
	$imgshowLiOn.prev().stop().animate({left:0},500);
	$imgshowLiOn.next().stop().animate({left:339},500);

	$prev.click(function(){
		var $imgshowLiOn = $(".news-rec li.on");
		$imgshowLiOn.prev().stop().animate({left:-408},500,function(){
			$imgshowLiOn.prev().appendTo($imgshowUl).css("left",748);
		});
		$imgshowLiOn.stop().animate({
			left: 0,
			top: 31,
			width: 408
		},500).removeClass("on");
		$imgshowLiOn.next().stop().animate({
			left:113,
			top: 0,
			width: 514,
			height: 339
		},500).addClass("on");
		var $liOn = $(".news-rec li.on");
		$liOn.next().stop().animate({left:339},500);
	});
	
	$next.click(function(){
		var $imgshowLiOn = $(".news-rec li.on");
		$imgshowUl.find('li:last').prependTo($imgshowUl).css("left",-408).stop().animate({left:0},500);		
		$imgshowLiOn.next().addClass("z1").stop().animate({left:748},500,function(){
			$imgshowLiOn.next().removeClass("z1")
		});
		$imgshowLiOn.stop().animate({
			left: 339,
			top: 31,
			width: 408
		},500).removeClass("on");
		$imgshowLiOn.prev().stop().animate({
			left: 113,
			top: 0,
			width: 514,
			height: 339
		},500).addClass("on");
	});
});
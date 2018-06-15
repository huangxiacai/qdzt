	var map = new BMap.Map("allmap");
	var point = new BMap.Point(116.331398,39.897445);
	map.centerAndZoom(point,12);
	// 创建地址解析器实例
	var myGeo = new BMap.Geocoder();
	// 将地址解析结果显示在地图上,并调整地图视野
	myGeo.getPoint("中国青岛高薪区锦业路1号A3座", function(point){
		if (point) {
			map.centerAndZoom(point, 16);
			map.addOverlay(new BMap.Marker(point));
		}else{
			alert("您选择地址没有解析到结果!");
		}
	}, "青岛市");
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
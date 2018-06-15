var pub={
		newwin:null,
		open:function(url,o,w,h){
				var iTop = (window.screen.availHeight-30-h)/2;       // 获得窗口的垂直位置;
				  var iLeft = (window.screen.availWidth-10-w)/2;  
				  // alert(iTop);
				// window.showModalDialog(url,o,"dialogWidth="+w+"px;dialogHeight="+h+"px;resizable=no;scroll=no;help=no;");
				this.newwin=window.open(url,'图片上传','height='+h+',width='+w+',top='+iTop+',left='+iLeft+',toolbar=no,menubar=no,scrollbars=no, resizable=no,location=no, status=no') 
		},
		setv:function(obj,v){
			// alert("");
			$(obj).val(v);
		    //$(obj+"small").val(v);
			
		}
}

var Request = {
	    QueryString: function (item) {
	        var svalue = location.search.match(new RegExp("[\?\&]" + item + "=([^\&]*)(\&?)", "i"));
	        return svalue ? svalue[1] : svalue;
	    }
	}

function getRootPath(){
	var strFullPath=window.document.location.href;
	var strPath=window.document.location.pathname;
	var pos=strFullPath.indexOf(strPath);
	var prePath=strFullPath.substring(0,pos);
	var postPath=strPath.substring(0,strPath.substr(1).indexOf('/')+1);
	return(prePath+postPath);
	}
$(function(){
	
	//alert(getRootPath())
	$("#upload").click(function(){
		var tar=$(this).attr("tar");
		//alert(tar);
		pub.open(""+getRootPath()+"/website/upload/upload.jsp?tar="+tar,"图片上传",328,198);
		
	})
	$(".upload").click(function(){
		var tar=$(this).attr("tar");
		//alert(tar);
		pub.open(""+getRootPath()+"/website/upload/upload.jsp?tar="+tar,"图片上传",328,198);
		
	})

})
var fun={
				isdou:function(v){
				     var re = /^[0-9]+.?[0-9]*$/;         
				     if (re.test(v)){return true;}
			},
				isnum:function(v){
					 var re = /^[1-9]+[0-9]*]*$/;
				     if (re.test(v)){
				    	 return true;  
				     }
				   
			}
}
var code =
{
    //匹配手机号码
    phone: function (v) {

        var reg = /^1((3[0-9])||(5[0-2])||(5[8-9])||(8[8-9])||(82))\d{8}$/g;
        return reg.test(v);
    },
    //匹配邮箱
    email: function (v) {
    	var reg=/^[0-9a-z][_.0-9a-z-]{0,31}@([0-9a-z][0-9a-z-]{0,30}[0-9a-z]\.){1,4}[a-z]{2,4}$/;
        //var reg = /^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/;
        return reg.test(v)
    },
    //匹配日期
    date: function (v) {
        var reg = /^(^(\d{4}|\d{2})(\-|\/|\.)\d{1,2}\3\d{1,2}$)|(^\d{4}年\d{1,2}月\d{1,2}日$)$/;
        return reg.test(v);
    },
    //匹配QQ
    QQ: function (v) {
        var reg = /^[1-9]*[1-9][0-9]*$/;
        return reg.test(v);
    },
    //匹配身份证
    CID: function (v) {
        var reg = /^\d{15}|\d{}18$/;
        return reg.test(v);

    },
    //匹配整数
    number: function (v) {
        var reg = /^-?\\d+$/;
        return reg.test(v);
    },
    //匹配字母 
    AZ: function (v) {
        var reg = /^[A-Za-z]+$/;
        return reg.test(v);
    },
    //匹配double
    isdou:function(v){
	     var re = /^[0-9]+.?[0-9]*$/;         
	     if (re.test(v)){return true;}
    }

}

//包含 jquery 1.7.2 和 tip.css ,tip.js 不然以下无效
//消息
var msg={
	show:function(txt){
		
		var btns="<input type=\"button\" value=\"错误\" class=\"manhuaTip\" ty=\"error\" id=\"Tiperror\" msg=\""+txt+"\" />";
		$("body").append(btns);
		$(".manhuaTip").manhuaTip({					       
			Event : "click",//可选			       
			timeOut : 2000//停留时间
		});
		$("#Tiperror").attr("msg",txt);
		$("#Tiperror").click();
		//alert(txt)
		//$(".manhuaTip").remove();
	},
	succ:function(txt){
		var btns="<input type=\"button\"  value=\"成功\" class=\"manhuaTip\" ty=\"succ\" id=\"Tipsucc\" msg=\""+txt+"\" />";
		$("body").append(btns);
		$(".manhuaTip").manhuaTip({					       
			Event : "click",//可选			       
			timeOut : 2000//停留时间
		});
		$("#Tipsucc").attr("msg",txt);
		$("#Tipsucc").click();
		$(".manhuaTip").remove();
		
	},
	notice:function(txt){
		var btns="<input type=\"button\"  value=\"消息\" class=\"manhuaTip\" ty=\"notice\" id=\"Tipnotice\" msg=\""+txt+"\" />";
		$("body").append(btns);
		$(".manhuaTip").manhuaTip({					       
			Event : "click",//可选			       
			timeOut : 2000//停留时间
		});
		$("#Tipnotice").attr("msg",txt);
		$("#Tipnotice").click();
		//$(".manhuaTip").remove();
	},
	loading:function(txt){
		var btns="<input type=\"button\"  value=\"等待\" class=\"manhuaTip\" ty=\"loading\" id=\"Tiploading\" msg=\""+txt+"\" />";
		$("body").append(btns);
		$(".manhuaTip").manhuaTip({					       
			Event : "click",//可选			       
			timeOut : 2000//停留时间
		});
		$("#Tiploading").attr("msg",txt);
		$("#Tiploading").click();
		$(".manhuaTip").remove();
	}
	
}
//messge2

var mm={
	show:function(m,url){
		$("#msgbox").remove();
		var str="";
			str+="<div class=\"email-box\" id=\"msgbox\">";
			str+="  <div class=\"bg\"></div>";
			str+=" <div class=\"main\">";
			str+="     <div class=\"close\" id=\"closeid\"></div>";
			str+="     <p>"+m+"</p>";
			str+="     <a href=\"javascript:;\"  id=\"msgboxok\">确定</a>";
			str+="</div>";
			str+="</div>";
		 $("body").append(str);
		 $("#msgbox").show().find('.main').css('top', ($(window).height() - $("#msgbox .main").height()) / 2 + $(window).scrollTop());
		 $("#msgboxok").click(function(){
			 $('#msgbox').hide();
			 if(url!=""){
			    	window.location.href=url; 
			  }
			 
		 })
		 $("#closeid").click(function(){
			 $('#msgbox').hide();
			 if(url!=""){
			    	window.location.href=url; 
			  }
			 
		 })
	    
	}
}


var key = {
    //英文和数字
    numAZ: function (o) {
        //clipboardData.setData('text', '');
        $(o).css("imeMode", "disabled");
        $(o).keyup(function () {
            var str = $(o).val()
            $(o).val(str.replace(/[\W]/g, ""));
        })
    },
    //只能输入数字
    number: function (o) {
        //clipboardData.setData('text', '');
        $(o).css("imeMode", "disabled");
        $(o).keypress(function () {
            return event.keyCode >= 48 && event.keyCode <= 57
        })


        $(o).keyup(function () {
            var str = $(o).val()
            $(o).val(str.replace(/\D/gi, ""));
        })

    }
}

function getNav() {
			var agt=navigator.userAgent.toLowerCase();
			if (agt.indexOf("opera") != -1) return 'Opera';
			if (agt.indexOf("staroffice") != -1) return 'Star Office';
			if (agt.indexOf("webtv") != -1) return 'WebTV';
			if (agt.indexOf("beonex") != -1) return 'Beonex';
			if (agt.indexOf("chimera") != -1) return 'Chimera';
			if (agt.indexOf("netpositive") != -1) return 'NetPositive';
			if (agt.indexOf("phoenix") != -1) return 'Phoenix';
			if (agt.indexOf("firefox") != -1) return 'Firefox';
			if (agt.indexOf("chrome") != -1) return 'chrome';
			if (agt.indexOf("safari") != -1) return 'Safari';
			if (agt.indexOf("skipstone") != -1) return 'SkipStone';
			if (agt.indexOf("msie") != -1) return 'Internet Explorer';
			if (agt.indexOf("netscape") != -1) return 'Netscape';
			if (agt.indexOf("mozilla/5.0") != -1) return 'Mozilla';
			if (agt.indexOf('\/') != -1) {
			if (agt.substr(0,agt.indexOf('\/')) != 'mozilla') {
			return navigator.userAgent.substr(0,agt.indexOf('\/'));}
			else return 'Netscape';} else if (agt.indexOf(' ') != -1)
			return navigator.userAgent.substr(0,agt.indexOf(' '));
			else return navigator.userAgent;
	}

Date.prototype.format = function(format)
{
    var o =
    {
        "M+" : this.getMonth()+1, //month
        "d+" : this.getDate(),    //day
        "h+" : this.getHours(),   //hour
        "m+" : this.getMinutes(), //minute
        "s+" : this.getSeconds(), //second
        "q+" : Math.floor((this.getMonth()+3)/3),  //quarter
        "S" : this.getMilliseconds() //millisecond
    }
    if(/(y+)/.test(format))
		    format=format.replace(RegExp.$1,(this.getFullYear()+"").substr(4 - RegExp.$1.length));
		    for(var k in o)
		    if(new RegExp("("+ k +")").test(format))
		    format = format.replace(RegExp.$1,RegExp.$1.length==1 ? o[k] : ("00"+ o[k]).substr((""+ o[k]).length));
    return format;
}
function msgs(json){
	if(json.model.errorList.length == 0){
		var msg = "";
		if(json.model.messageList.length > 0){
			for(var i = 0;i<json.model.messageList.length;i++){
				msg = msg + json.model.messageList[i].msg_body + "\n";
			}
			//alert(msg)
				return msg;
				
		} 
		
	}else{
		var err = "";
		for(var i = 0;i<json.model.errorList.length;i++){
				err = err + json.model.errorList[i].msg_body + "\n";
			}
		//alert(err)
		 return err;
	}
}

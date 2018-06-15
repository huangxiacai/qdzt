
	                <li> <a href='[field:typeurl/]'>[field:typename/]</a></li>

                    </ul>
                    <div class="clear"></div>
                </div>
            </div>
            <div class="news-rec" id="newpic">
                <div class="w960">
                    <div class="btn prev"></div>
                    <div class="list"></div>
                    <div class="btn next"></div>
                </div>
            </div>
            <div class="w960 news-main">
                <div class="news-list" style="padding-top:15px">
                    <ul>
					{dede:list pagesize='1' infolen='80' titlelen='42'}
                        <li>
						<a href="[field:arcurl/]" class="img"><img src="[field:litpic/]" width="146" height="97" class="fl" alt="[field:title function='html2text(@me)'/]"></a>
                            <div class="intro">
                                <a href="[field:arcurl/]" class="tit" >[field:title/]</a>
								<a href="[field:arcurl/]">[field:infos/]...</a>
                                <span>[field:pubdate function="MyDate('Y-m-d',@me)"/]</span>
                            </div>
                        </li>
                    {/dede:list}
                    </ul>
                    <div class="clear"></div>
                    <div class="page">
                      <style type="text/css">
					  .pagedl{line-height:30px;font-size:13px;margin:0 auto;}
					  .pagedl dt{ min-width:60px;width:auto; height:30px;float:left; text-align:center;line-height:23px;}
					  .pagedl dt a {  font-size:12px;text-decoration:none;}
					  .pagedl dt a:hover {background:none;color:#666; }
					  .pagedl dd{ width:25px; height:30px;float:left; text-align:center;}
					  .pagedl dd a { display:block; text-decoration:none;text-align:center;}
					  .pagedl dd a:hover { width:auto;color:#666;color:#fff; display:block; background-color:#0066CC; no-repeat center;}
					  .pagedl dd .curpage { width:auto;color:#fff; display:block; background-color:#0066CC; no-repeat center;}
					  .pagedl dd a.next { font-size: 12px;	padding-right: 18px; background-color:#0066CC; no-repeat right 0;}
					  .pagedl dd a.next:hover { color: #1a4ea3;	background-position: right -24px;;}
					  .pagedl dd a.pre { background: url(/images/prev05.jpg) no-repeat;	.pagedl dd a.pre:hover {  background-position: 0 -24px;</style>
					  <dl class="pagedl">
                      {dede:pagelist listitem="info,index,end,pre,next,pageno" listsize="5"
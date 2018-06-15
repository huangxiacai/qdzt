<div class="col-md-6">
                            <div class="zt_indr_item">
                                <div class="zt_indr_item_img">
                                    {dede:arclist row="1"}
                                    <img src="[field:litpic/]" alt="[field:fulltitle/]" /> {/dede:arclist}
                                </div>
                                <div class="zt_indr_item_list">
                                    <dl class="zt_dl zt_list">
                                        <dt>
                                            <a href='{dede:field name=' typeurl '/}'>{dede:field name='typename'/}</a>
                                        </dt>
                                        <dd class="zt_dd">
                                            {dede:arclist}
                                            <li>
                                                - <a href="[field:arcurl /]">[field:title /]</a>
                                            </li>
                                            {/dede:arclist}
                                        </dd>
                                    </dl>
                                </div>
                                <div><a href='{dede:field name=' typeurl '/}'>查看更多></a></div>
                            </div>
                        </div>
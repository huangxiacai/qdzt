<div class="col-md-6">
                            <div class="zt_indr_item">
                                <div class="zt_indr_item_img">
                                    {dede:arclist row="1"}
                                    <img src="[field:litpic/]" alt="[field:fulltitle/]"/>
                                    {/dede:arclist}
                                </div>
                                <div class="zt_indr_item_list">
                                    {dede:channelartlist}
                                    <dl class="zt_dl">
                                        <dt>
                                            <span class="zt_hasShow_list glyphicon glyphicon-plus-sign"></span>
                                            <a href='{dede:field name=' typeurl '/}'>{dede:field name='typename'/}</a></dt>
                                        <dd class="zt_dd zt_def_hide">
                                            {dede:arclist}
                                            <li>
                                                - <a href="[field:arcurl /]">[field:title /]</a>
                                            </li>
                                            {/dede:arclist}
                                        </dd>
                                    </dl>
                                    
                                </div>
                            </div>
                        </div>
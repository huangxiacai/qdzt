<?php
/**
 * @version        $Id: index.php 1 9:23 2010-11-11 tianya $
 * @package        DedeCMS.Site
 * @copyright      Copyright (c) 2007 - 2010, DesDev, Inc.
 * @license        http://help.dedecms.com/usersguide/license.html
 * @link           http://www.dedecms.com
 */
//主域名301跳转到www      
$redirect301=1; //301跳转开关，1代表打开，0代表关闭      
$index_file='index.html'; //指定网站默认首页文件，DeDeCMS设置为index.html，不支持SSI（shtml/shtm）      

if(substr($_SERVER['SERVER_NAME'],0,4)!='www.'&&$redirect301) //判断URL中是否带www      
{      
header('HTTP/1.1 301 Moved Permanently');      
header('Location:http://www.'.$_SERVER['SERVER_NAME']); //301跳转到www      
exit();      
}
if(!file_exists(dirname(__FILE__).'/data/common.inc.php'))
{
    header('Location:install/index.php');
    exit();
}
//自动生成HTML版
require_once (dirname(__FILE__) . "/include/common.inc.php"); 
require_once DEDEINC."/arc.partview.class.php"; 
$GLOBALS['_arclistEnv'] = 'index'; 
$row = $dsql->GetOne("Select * From `#@__homepageset`"); 
$row['templet'] = MfTemplet($row['templet']); 
$pv = new PartView(); 
$pv->SetTemplet($cfg_basedir . $cfg_templets_dir . "/" . $row['templet']); 
$pv->Display(); 
?> 
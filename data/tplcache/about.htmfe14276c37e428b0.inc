<?php
$z[0]=Array("field","",114,133);
$z[0][4]['name']="title";
$z[1]=Array("global","",134,160);
$z[1][4]['name']="cfg_webname";
$z[2]=Array("field","",201,223);
$z[2][4]['name']="keywords";
$z[3]=Array("field","",263,314);
$z[3][4]['name']="description";
$z[3][4]['function']="html2text(@me)";
$z[4]=Array("include","",836,871);
$z[4][4]['filename']="head.htm";
$z[5]=Array("type","[field:typename/]",974,1014);
$z[6]=Array("sql","[field:content function='html2text(@me)'/]",1578,1725);
$z[6][4]['sql']="Select content,substring(content,1,90) as content from zt_arctype where id=12";
$z[7]=Array("include","",4059,4096);
$z[7][4]['filename']="footer.htm";

?>
<?php
$z[0]=Array("field","",114,137);
$z[0][4]['name']="seotitle";
$z[1]=Array("field","",178,200);
$z[1][4]['name']="keywords";
$z[2]=Array("field","",240,291);
$z[2][4]['name']="description";
$z[2][4]['function']="html2text(@me)";
$z[3]=Array("include","",395,435);
$z[3][4]['filename']="headquote.htm";
$z[4]=Array("include","",855,890);
$z[4][4]['filename']="head.htm";
$z[5]=Array("type","[field:typename/]",993,1033);
$z[6]=Array("sql","[field:content function='html2text(@me)'/]",1597,1744);
$z[6][4]['sql']="Select content,substring(content,1,90) as content from zt_arctype where id=12";
$z[7]=Array("include","",4109,4146);
$z[7][4]['filename']="footer.htm";

?>
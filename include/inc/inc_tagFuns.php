<?php
function getParentId($typeid){
global $dsql;
$sql = "SELECT reid FROM `zt_arctype` WHERE id=$typeid";
$dsql->SetQuery($sql);
$dsql->Execute();
$row = $dsql->GetArray();
return $row['reid'];
}
?>
<?php
$compress = setVar('compress');
$mode = setVar('mode');
$i = setVar('i','メロス');
$you = setVar('you','セリヌンティウス');

$scene = setVar('scene','dark');
$action = setVar('action');
$uaFlag = setVar('uaFlag');

$ua = $_SERVER['HTTP_USER_AGENT'];
if($mode=='ipad'||(ereg("iPad",$ua))){
	$uaFlag = true;
}
function setVar(){
	$var = func_get_arg(0);
	if(func_num_args()>1){
		$num = htmlspecialchars(func_get_arg(1));
	}else{
		$num = "0";
	}
	return isset($_GET[$var])?htmlspecialchars($_GET[$var]):$num;
}

function includeFiles(){
	$dir = func_get_args();
	$content="";
	foreach ($dir as $lst){
		$lst='./'.$lst;
		$drc=dir($lst);
		
		while($fl=$drc->read()) {
            //$content = $content.'/*'.$fl.'*/';
			$lfl = $lst."/".$fl;
			$din = pathinfo($lfl);
			if($fl!=".." && $fl!="."){
				$content = $content.file_get_contents($lst."/".$fl);
			}
		}
		$drc->close();
	}
	return $content;
}
?>

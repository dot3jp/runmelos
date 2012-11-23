<?php
require_once('../lib/config.php');
header("Content-type: text/css");

$content = includeFiles('core');

if($compress=="1"){
	$content = ereg_replace("\n","",$content);
	$content = ereg_replace("\t","",$content);
	//$content = ereg_replace("\/\*.*?\*\/","",$content);
}
echo $content;
?>
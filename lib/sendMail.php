<?php
require_once('../cmn/php/mail.php');
if($debug!=1){
	$body = '■date'."\n".date("Y-m-d H:i:s")."\n"
							.	'■referer'."\n".$_SERVER['HTTP_REFERER']."\n"
							.	'■ip address'."\n".$_SERVER['REMOTE_ADDR']."\n"
							.	'■browser'."\n".$_SERVER['HTTP_USER_AGENT']."\n";
	sendMail('runmelos','log@dot3.jp',date("Y/m/d H:i:s").'　dot3.jp/runmelosにアクセス有り',$body);
}
?>

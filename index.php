<?php require_once('lib/config.php');if($uaFlag){ ?>
<!DOCTYPE html>
<html lang="ja">
<head>
<meta charset="UTF-8">
<?php /*
<meta name="robots" content="noindex"> 
<meta name="robots" content="nofollow">
<meta name="robots" content="noarchive">
*/ ?>
<title>走れメロス - dot3</title>
<meta name="viewport" content="width=device-width, minimum-scale=1.0, maximum-scale=1.0">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
<link rel="icon" href="http://dot3.jp/runmelos/img/icon/favicon.ico" type="image/x-icon">
<?php //<link rel="apple-touch-startup-image" href="top.png"> ?>
<link rel="apple-touch-icon-precomposed" href="./img/icon/apple-touch-icon">
<?php if($mode=='debug'){ ?>
<link rel="stylesheet" href="./css/style.php" media="all">
<?php }else{ ?>
<link rel="stylesheet" href="./css/style.min.css" media="all">
<?php } ?>
</head>
<body>
	<div id="wrapper">
		<div id="doc"><div id="docScroll"><section id="docWrap">
			<hgroup id="title">
				<h1>走れメロス</h1>
				<h2>太宰治</h2>
			</hgroup>
<?php include('./html/scene/prologue.php'); ?>
<?php include('./html/scene/castleTown.php'); ?>
<?php include('./html/scene/castle.php'); ?>
<?php include('./html/scene/goHome.php'); ?>
<?php include('./html/scene/melosHouse.php'); ?>
<?php include('./html/scene/mukoHouse.php'); ?>
<?php include('./html/scene/wedding.php'); ?>
<?php include('./html/scene/goCastle.php'); ?>
<?php include('./html/scene/river.php'); ?>
<?php include('./html/scene/ambivalence.php'); ?>
<?php include('./html/scene/melosRunAgain.php'); ?>
<?php include('./html/scene/disciple.php'); ?>
<?php include('./html/scene/prison.php'); ?>
<?php include('./html/scene/endroll.php'); ?>
			<!--タイトルに戻る--> 
		</section><!-- /#docWrap --></div><!-- /#docScroll --></div><!-- /#doc -->
<?php include('./html/core/bg.php'); ?>
<?php include('./html/core/object.php'); ?>
<?php include('./html/core/chara.php'); ?>
<?php include('./html/core/share.php'); ?>
	</div><!-- /#wrapper -->
	<div id="preload"></div>
<?php
if($mode=='debug'){
//デバッグするときは各ソースを読み込み
?>
<script src="./js/lib/jquery.min.js"></script>
<script src="./js/lib/iscroll.js"></script>
<script src="./js/core/NameSpace.js"></script>
<script src="./js/core/BackgroundManager.js"></script>
<script src="./js/core/Character.js"></script>
<script src="./js/core/Planet.js"></script>
<script src="./js/core/Modal.js"></script>
<script src="./js/core/PNGAnimater.js"></script>
<script src="./js/core/Scene.js"></script>
<?php foreach (glob("./js/scene/*.js") as $filename) { ?>
<script src="<?php echo $filename; ?>"></script> 
<?php } ?>
<script src="./js/core/SceneManager.js"></script>
<script src="./js/core/App.js"></script>
<?php //<script src="./js/core/AppPR.js"></script> ?>
<?php }else{ ?>
<script src="./js/script.min.js"></script>
<?php } ?>
<script>var gaJsHost = (("https:" == document.location.protocol) ? "https://ssl." : "http://www.");document.write(unescape("%3Cscript src='" + gaJsHost + "google-analytics.com/ga.js' type='text/javascript'%3E%3C/script%3E"));</script>
<script>try {var pageTracker = _gat._getTracker("UA-15912797-2");pageTracker._trackPageview();} catch(err) {}</script>
</body>
</html>
<?php //ipadじゃなければpr.htmlを読み込み
}else{include('pr.html');} ?>

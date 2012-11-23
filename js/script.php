<?php
require_once('../lib/config.php');
header("Content-type: application/x-javascript");

include_once("./lib/jquery.min.js");
include_once("./lib/iscroll.js");
include_once("./core/NameSpace.js");
include_once("./core/BackgroundManager.js");
include_once("./core/Character.js");
include_once("./core/Planet.js");
include_once("./core/Modal.js");
include_once("./core/PNGAnimater.js");
include_once("./core/Scene.js");

foreach (glob("./scene/*.js") as $filename) { 
	include_once($filename);
}
include_once("./core/SceneManager.js");
include_once("./core/App.js");
?>
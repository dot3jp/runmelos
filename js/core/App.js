$(document).bind("touchmove", function(e){e.preventDefault();});

$(function()
{
	var D = DOT3.RUN_MELOS;
	
	/*コンテンツ幅調整*/
	$("#title").width($("html").width());
	$("#docScroll, #docWrap").width($("#docWrap").width() - $(".section:last").offset().left);
	
	/*iScroll設定*/
	var myScroll = new iScroll('doc',{
		desktopCompatibility:true, 
		snap: false,
		vScroll: false, 
		hScrollbar: false, 
		vScrollbar: false
	});
	
	/*画面を右端へ移動*/
	/*debugｺｺｶﾗ↓
	var query = {};
	var q = location.search.substring(1).split("&")
	$(q).each(function()
	{
		var qn = this.split("=");
		query[qn[0]] = qn[1];
	})
	
	if(query.s)
	{
		$(".section").each(function()
		{
			if($(this).attr("data-scenename") == query.s)
			{
				var qX = -($(this).offset().left + $(this).width());
				setTimeout(function(){myScroll.scrollTo(qX,0)},2000);
			}
		})
	}
	else
	{
	debugｺｺﾏﾃﾞ↑*/
		$("#docScroll").css({"-webkit-transform": "translateX(-"+ ($("#docWrap").width()-$("#title").width()) +"px)"});
	//}
	
	/*アニメーション定義*/
	var 
	cutCount1 = 6,
	timerCount1 = 0,
	timer1 = setInterval(function(){
		var pos =  -timerCount1*100+"px 0";
		if($("#melos>.run").is(':visible'))$("#melos>.run").css({"background-position": pos});
		if($("#melos>.run_nude").is(':visible'))$("#melos>.run_nude").css({"background-position": pos});
		
		timerCount1++;
		timerCount1 = (timerCount1>cutCount1-1)? 0: timerCount1;
	}, 150);
	
	var 
	cutCount2 = 6,
	timerCount2 = 0,
	cutCount4 = 8,
	timerCount4 = 0,
	timer2 = setInterval(function(){
		var pos =  -timerCount2*100+"px 0";
		if($("#melos>.run_tired").is(':visible'))$("#melos>.run_tired").css({"background-position": pos});
		if($("#melos>.run_tired_nude").is(':visible'))$("#melos>.run_tired_nude").css({"background-position": pos});
		var pos2 =  -timerCount4*100+"px 0";
		if($("#melos>.walk").is(':visible'))$("#melos>.walk").css({"background-position": pos2});
		if($("#melos>.walk_nude").is(':visible'))$("#melos>.walk_nude").css({"background-position": pos2});
		
		timerCount4++;
		timerCount4 = (timerCount4>cutCount4-1)? 0: timerCount4;
		timerCount2++;
		timerCount2 = (timerCount2>cutCount2-1)? 0: timerCount2;
	}, 200);
	
	var 
	cutCount3 = 6,
	timerCount3 = 0,
	timer3 = setInterval(function(){
		var pos =  -timerCount3*100+"px 0";
		if($("#melos>.dash").is(':visible'))$("#melos>.dash").css({"background-position": pos});
		if($("#firostratos>.run").is(':visible'))$("#firostratos>.run").css({"background-position": pos});
		
		timerCount3++;
		timerCount3 = (timerCount3>cutCount3-1)? 0: timerCount3;
	}, 130);
	/*
	var 
	cutCount4 = 8,
	timerCount4 = 0,
	timer4 = setInterval(function(){
		var pos =  -timerCount4*100+"px 0";
		if($("#melos>.walk").is(':visible'))$("#melos>.walk").css({"background-position": pos});
		if($("#melos>.walk_nude").is(':visible'))$("#melos>.walk_nude").css({"background-position": pos});
		
		timerCount4++;
		timerCount4 = (timerCount4>cutCount4-1)? 0: timerCount4;
	}, 200);
	*/
	var 
	cutCount5 = 2,
	timerCount5 = 0,
	timer5 = setInterval(function(){
		var pos =  -timerCount5*100+"px 0";
		if($("#melos>.tired").is(':visible'))$("#melos>.tired").css({"background-position": pos});
		if($("#melos>.tired_nude").is(':visible'))$("#melos>.tired_nude").css({"background-position": pos});
		
		timerCount5++;
		timerCount5 = (timerCount5>cutCount5-1)? 0: timerCount5;
	}, 1000);
	
	var 
	cutCount6 = 8,
	timerCount6 = 0,
	timer6 = setInterval(function(){
		var pos =  -timerCount6*100+"px 0";
		if($("#melos>.walk_tired_nude").is(':visible'))$("#melos>.walk_tired_nude").css({"background-position": pos});
		
		timerCount6++;
		timerCount6 = (timerCount6>cutCount6-1)? 0: timerCount6;
	}, 300);
	
	/*
	new PNGAnim("#melos>.run", 6, 150);//
	new PNGAnim("#melos>.run_nude", 6, 150)//;
	new PNGAnim("#melos>.run_tired", 6, 200);//
	new PNGAnim("#melos>.run_tired_nude", 6, 200);//
	new PNGAnim("#melos>.dash", 6, 130);//
	new PNGAnim("#melos>.walk", 8, 200);//
	new PNGAnim("#melos>.walk_nude", 8, 200);//
	new PNGAnim("#melos>.walk_tired_nude", 8, 300);//
	new PNGAnim("#melos>.tired", 2, 1000);//
	new PNGAnim("#melos>.tired_nude", 2, 1000);//
	new PNGAnim("#firostratos>.run", 6, 130);//
	*/
	
	/*キャラクター定義*/
	var characters = {
		melos: new D.Character("#melos"),
		youngMen: new D.Character("#youngMen"),
		oldMan: new D.Character("#oldman"),
		king: new D.Character("#king"),
		gyokuza: new D.Character("#shiroyukaObj"),
		soldier1: new D.Character("#soldier1"),
		soldier2: new D.Character("#soldier2"),
		serinuntius: new D.Character("#serinuntius"),
		sister: new D.Character("#sister"),
		melosHouse: new D.Character("#homeObj"),
		muko: new D.Character("#muko"),
		mukoHouse: new D.Character("#mukohomeObj"),
		murabito: new D.Character("#murabito"),
		girl: new D.Character("#girl"),
		river: new D.Character("#riverObj"),
		shokei: new D.Character("#shokeiObj"),
		spring: new D.Character("#springObj"),
		firostratos: new D.Character("#firostratos")
	}
	
	var planet =  new DOT3.RUN_MELOS.Planet('#bg .planet');
	
	/*背景定義*/
	var bgMng = new D.BackgroundManager();
	
	/* 情報を見る（シェアEtc） */
	var modal = new D.Modal();

	/*続きから読む*/
	var LS = window.localStorage['dot3runmelos'];

	if(LS){
		var LSdata = JSON.parse(LS);
		$('li#readContinued').click(function(){
			$('#docScroll').css('-webkit-transform','translateX('+LSdata['docX']+'px)');
			$('#share').removeClass('on').addClass('off');
		});
		$('li#readFirst').click(function(){
			$('#share').removeClass('on').addClass('off');
		});
		
		//modalを表示
	setTimeout(function(){modal.show('continuedstory');},4000);
	}

	/*Scene管理開始*/
	var sceneMng = new D.SceneManager(characters, bgMng, planet, modal);

	/*読み終わり*/
	// $('#readFirstEnd').click(function(){
	// 	myScroll.scrollTo(-($("#docWrap").width()-$("#title").width()),0,3);
	// 	$('#share').removeClass('on').addClass('off');
	// 	return false;
	// });
});

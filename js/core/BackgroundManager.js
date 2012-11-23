DOT3.RUN_MELOS.BackgroundManager = function  () {
	this.maxAnimTime = 9999;
	this.baseSpeed = 120;
	this.animProportion = {
		'distant' : 0.1,
		'short' : 0.15,
		'build' : 0.6,
		'road' : 1,
	},
	this.target = $('div#bgNow > div,div#bgTmp > div');
	this.init();
}
DOT3.RUN_MELOS.BackgroundManager.prototype = {
	init : function () {
		var o = this,
		t = o.target;
		$('#bgTmp').bind('webkitAnimationEnd.fadeAction',function () {
			$('#bg').removeClass();
		});
	},

	//アニメーション用メソッド		
	run : function () {
		var o = this;
		o.move(o.baseSpeed);
		return o;
	},
	walk : function () {
		var o = this;
		o.move(o.baseSpeed/2);
		return o;
	},
	move : function (speed) {
		var o = this,
		t = o.target;
		t.each(function(){
			var
			//x = $(this).css('background-positionX'),
			prop = o.animProportion[$(this).attr('class')];
			if(prop){
				// console.log($(this));
				//x = x.slice(0,(x.length)-2);
				$(this).css({
					'-webkit-transition-duration':o.maxAnimTime+'s',
					'background-positionX':o.maxAnimTime*speed*prop+'px'
				});
			}
		});
		return o;
	},
	stop : function () {
		var o = this,
		t = o.target;
		t.each(function(){
			x = $(this).css('background-positionX'),
			prop = o.animProportion[$(this).attr('class')];

			if(prop){
				// console.log(x);
				$(this).css({
					'background-positionX' : x
				});
			}
		});
		return o;
	},

	//シーン切り替え用メソッド
	scene : function (condition , type) {
		// dark
		// morning
		// daytime
		// sunset
		// deepSunset
		// night
		var o = this,
		nowBg = $('#bgNow'),
		tmpBg = $('#bgTmp'),
		tmpCls = nowBg.attr('class'),
		type = type || 'crossFade';

		if(type=='fadeOutIn'){
			tmpCls = 'dark';
			setTimeout(function () {
				nowBg.removeClass().addClass(condition);
			},600);
		}else{
			nowBg.removeClass().addClass(condition);
		}
		tmpBg.removeClass().addClass(tmpCls);
		$('#bg').addClass(type);
		return o;
	}
};

// var debug = setInterval(function(){
// 	$('.cloud').each(function(){
// 		var tmpID = $(this).parent().attr('id');
// 		console.log(tmpID+'：'+$(this).css('background-positionX'));
// 	});
// },500);

var PNGAnim = function(targetDom, cutCount, speedMS){
	this.targetEl = $(targetDom);
	this.cutCount = cutCount;
	this.speedMS = speedMS;
	this.init();
};

PNGAnim.prototype = {
	init : function () {
		var 
		o = this,
		targetEl = o.targetEl,
		cutCount = o.cutCount,
		speedMS = o.speedMS,
		i = 0,
		timer = setInterval(function(){
			//console.log();
			if(targetEl.is(':visible')){
				var pos =  -i*100+"px 0";
				targetEl.css({"background-position": pos});
				
				i++;
				i = (i>cutCount-1)? 0: i;
			}
		}, speedMS);
	}
};

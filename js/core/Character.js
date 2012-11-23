DOT3.RUN_MELOS.Character = function (target) {
	this.target = $(target);
};
DOT3.RUN_MELOS.Character.prototype = {
	math: function(num){
		var target = this.target;
		if(num=='left'){
			return $(window).width()/-2-target.width()/2;
		}else if(num=='right'){
			return $(window).width()/2+target.width()/2;
		}else if(!isNaN(num)){
			return num;
		}else if(num!=undefined){
			return $(window).width()*(num.replace(/%$/,'')/100);
		}else{
			return $(window).width()/2;
		}
	},
	show: function(x,y){
		var
		target = this.target,
		x = this.math(x),
		y = -y || 0;
		target.css({
			'-webkit-transition' : 'none',
			'-webkit-transform' : 'translate('+x+'px,'+y+'px)'
		});
		target.find('div').hide().filter(':first').show();
		return this;
	},
	fadeIn: function(x,y,time){
		var
		target = this.target,
		time = time || 2,
		x = this.math(x),
		y = -y || 0;
		target.css({
			'-webkit-transition' : 'none',
			'-webkit-transform' : 'translate('+x+'px,'+y+'px)'
		});
		target.find('div').hide().filter(':first').fadeIn(time*1000);
		return this;
	},
	hide: function(){
		this.target.find('div:visible').hide();
		return this;
	},
	fadeOut: function(time){
		var
		time = time || 2;
		this.target.find('div:visible').fadeOut(time*1000);
		return this;
	},
	moveTo: function(x,y,time,timing){
		var
		target = this.target,
		x = this.math(x),
		y = -y || 0,
		time = time || 2,
		timing = timing || 'ease-in-out';
		target.css({
			'-webkit-transition' : time+'s '+timing+' -webkit-transform',
			'-webkit-transform' : 'translate('+x+'px,'+y+'px)'
		});
		return this;
	},
	be: function(motion){
		var
		motion = (motion) ? '.'+motion : ':first',
		target = this.target;
		target.find('div').hide().filter(motion).show();
		return this;
	},
	info: function () {
		this.target.find('div').each(function(){
			console.log($(this).attr('class'));
		});
	}
}

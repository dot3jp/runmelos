DOT3.RUN_MELOS.Planet = function (target) {
	this.target = $(target);
};
DOT3.RUN_MELOS.Planet.prototype = {
	show: function(deg){
		var
		target = this.target;
		deg = deg || 0;
		target.find('div').attr('style','');
		target.css({
			'-webkit-transition' : 'none',
			'-webkit-transform' : 'rotate('+deg+'deg)'
		});
		deg = -deg;
		target.find('div').css({
			'-webkit-transition' : 'none',
			'-webkit-transform' : 'rotate('+deg+'deg)'
		});
		return this;
	},
	hide: function(){
		this.target.find('div').attr('style','display:none;');
		return this;
	},
	moveTo: function(deg,time,timing){
		var
		target = this.target,
		deg = deg || 0,
		time = time || 2,
		timing = timing || 'ease-in-out';
		target.css({
			'-webkit-transition' : time+'s '+timing+' -webkit-transform',
			'-webkit-transform' : 'rotate('+deg+'deg)'
		});
		deg = -deg;
		target.find('div').css({
			'-webkit-transition' : time+'s '+timing+' -webkit-transform',
			'-webkit-transform' : 'rotate('+deg+'deg)'
		});
		return this;
	}
}

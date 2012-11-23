DOT3.RUN_MELOS.Modal = function () {
	this.shareEL = $('#share');
	this.init();
};
DOT3.RUN_MELOS.Modal.prototype = {
	init: function(){
		var
		o = this,
		shareEL = o.shareEL;

		$('div#shareShowBtn').click(function(){
			o.show($(this).attr('id'));
		});
		$('div#shareCloseBtn').click(function(){
			o.hide();
		});
	},
	show: function (data) {
		var
		shareEL = this.shareEL;

		shareEL.find('.txt').hide();
		if(data=='shareShowBtn'){
			$('#shareTxt1').show();
		}else if(data=='melosEnd'){
			$('#shareTxt2').show();
		}else if(data=='continuedstory'){
			$('#shareTxt3').show();
		}
		shareEL.removeClass('off').addClass('on');
	},
	hide: function(){
		this.shareEL.removeClass('on').addClass('off');
	}
}

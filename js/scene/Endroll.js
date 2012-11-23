DOT3.RUN_MELOS.Endroll = function () {
	this._actionStore = [];
	this._actions = {
		"melosEnd": this.melosEnd
	};
	this._timer;
	this._characters;
	this._bgMng;
	this._modal;
};

DOT3.RUN_MELOS.Endroll.prototype = new DOT3.RUN_MELOS.Scene();

DOT3.RUN_MELOS.Endroll.prototype.initBG = function()
{
	this._bgMng.scene("dark");
	this._bgMng.stop();
}

DOT3.RUN_MELOS.Endroll.prototype.melosEnd = function()
{   
	//display modal sns share
	this._modal.show('melosEnd');
	window.localStorage['dot3runmelos'] = '';
}

DOT3.RUN_MELOS.SCENES["endroll"] = new DOT3.RUN_MELOS.Endroll();

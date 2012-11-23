DOT3.RUN_MELOS.MelosHouse = function () {
	this._actionStore = [];
	this._actions = {
		"showHouse": this.showHouse,
		"darkOut":this.darkOut
	};
	this._timer;
	this._characters;
	this._bgMng;
};

DOT3.RUN_MELOS.MelosHouse.prototype = new DOT3.RUN_MELOS.Scene();

DOT3.RUN_MELOS.MelosHouse.prototype.initBG = function()
{
	this._bgMng.scene("dark");
	this._characters.melos.fadeOut();
}

DOT3.RUN_MELOS.MelosHouse.prototype.showHouse = function()
{
	this._bgMng.scene("daytime").stop();
	
	this._characters.melosHouse.show();
	this._characters.melos.show("60%").be("tired");
	this._characters.sister.show("40%").be("angry");
}
DOT3.RUN_MELOS.MelosHouse.prototype.darkOut = function()
{
	this._characters.mukoHouse.hide();
	this._characters.muko.hide();

	this._bgMng.scene("dark");
	
	this._characters.melosHouse.fadeOut();
	this._characters.melos.fadeOut();
	this._characters.sister.fadeOut();
}

DOT3.RUN_MELOS.SCENES["melosHouse"] = new DOT3.RUN_MELOS.MelosHouse();
DOT3.RUN_MELOS.GoHome = function () {
	this._actionStore = [];
	this._actions = {
		"showNight": this.showNight,
		"showMorning": this.showMorning,
		"showDaytime": this.showDaytime,
		"darkOut":this.darkOut
	};
	this._timer;
	this._characters;
	this._bgMng;
};

DOT3.RUN_MELOS.GoHome.prototype = new DOT3.RUN_MELOS.Scene();

DOT3.RUN_MELOS.GoHome.prototype.initBG = function()
{
	this._bgMng.scene("night").run();
	this._characters.melos.be("run").show('75%').moveTo("50%", 0, 3, "ease-out");
	this._characters.serinuntius.fadeOut();
	this._characters.king.fadeOut();
	this._characters.gyokuza.fadeOut();
	this._characters.soldier1.fadeOut();
	this._characters.soldier2.fadeOut();
	
	this._planet.show(50);
}

DOT3.RUN_MELOS.GoHome.prototype.showNight = function()
{
	this._bgMng.scene("night","none");
	this._planet.show(50);
}
DOT3.RUN_MELOS.GoHome.prototype.showMorning = function()
{
	this._bgMng.scene("morning");
	this._planet.show(-60).hide();
}
DOT3.RUN_MELOS.GoHome.prototype.showDaytime = function()
{
	this._characters.melosHouse.hide();
	this._characters.sister.hide();

	this._bgMng.scene("daytime");
	this._planet.show(-60);
	var o = this;
	setTimeout(function(){
		o._planet.moveTo(-30,10,"linear");
	},200);
}
DOT3.RUN_MELOS.GoHome.prototype.darkOut = function()
{

	this._bgMng.scene("dark");
	this._characters.melos.fadeOut();
}

DOT3.RUN_MELOS.SCENES["goHome"] = new DOT3.RUN_MELOS.GoHome();
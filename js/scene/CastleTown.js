DOT3.RUN_MELOS.CastleTown = function () {
	this._actionStore = [];
	this._actions = {
		"melosWalk": this.melosWalk,
		"meetYoungMen":this.meetYoungMen,
		"leaveYoungMen":this.leaveYoungMen,
		"meetOldMan":this.meetOldMan,
		"leaveOldMan":this.leaveOldMan
	};
	this._timer;
	this._characters;
	this._bgMng;
};

DOT3.RUN_MELOS.CastleTown.prototype = new DOT3.RUN_MELOS.Scene();

DOT3.RUN_MELOS.CastleTown.prototype.initBG = function()
{
	this.reset();
	this._characters.melos.show();

	this._bgMng.scene("downtownNight").walk();
	this._planet.show(-30)
}

DOT3.RUN_MELOS.CastleTown.prototype.melosWalk = function()
{
	this._characters.youngMen.hide();
	this._bgMng.walk();

	this._characters.melos.be("walk");
}
DOT3.RUN_MELOS.CastleTown.prototype.meetYoungMen = function()
{
	this._characters.youngMen.fadeIn("30%").moveTo("35%");
	this._characters.melos.be("stand");
	this._bgMng.stop();
}
DOT3.RUN_MELOS.CastleTown.prototype.leaveYoungMen = function()
{
	this._characters.oldMan.hide();
	this._characters.youngMen.show("35%");

	this._characters.youngMen.fadeOut().moveTo("55%",0,3,"linear");
	this._characters.melos.be("walk");
	this._bgMng.walk();
}
DOT3.RUN_MELOS.CastleTown.prototype.meetOldMan = function()
{
	this._bgMng.scene("downtownNight","none").stop();

	this._characters.oldMan.fadeIn("30%").moveTo("35%");
	this._characters.melos.be("stand");
	this._bgMng.stop();
}
DOT3.RUN_MELOS.CastleTown.prototype.leaveOldMan = function()
{
	this._bgMng.scene("dark").run();
	this._characters.oldMan.show("30%");
	
	this._characters.oldMan.fadeOut().moveTo("55%",0,1.5,"linear");
	this._characters.melos.be("run").fadeOut();
}

DOT3.RUN_MELOS.SCENES["castleTown"] = new DOT3.RUN_MELOS.CastleTown();
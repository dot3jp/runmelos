DOT3.RUN_MELOS.MukoHouse = function () {
	this._actionStore = [];
	this._actions = {
		"mukoNight": this.mukoNight,
		"mukoAngry": this.mukoAngry,
		"showMorning":this.showMorning,
		"mukoAgree":this.mukoAgree
	};
	this._timer;
	this._characters;
	this._bgMng;
};

DOT3.RUN_MELOS.MukoHouse.prototype = new DOT3.RUN_MELOS.Scene();

DOT3.RUN_MELOS.MukoHouse.prototype.initBG = function()
{
	this._bgMng.scene("night");
	this._bgMng.stop();
	this._planet.show(40);
}

DOT3.RUN_MELOS.MukoHouse.prototype.mukoNight = function()
{

	this._characters.mukoHouse.show();
	this._characters.melos.show("60%").be("stand");
	this._characters.muko.show("40%").be("normal");
}

DOT3.RUN_MELOS.MukoHouse.prototype.mukoAngry = function()
{
	this._characters.mukoHouse.show();
	this._characters.melos.show("60%").be("stand");
	this._characters.muko.show("40%").be("angry");
}

DOT3.RUN_MELOS.MukoHouse.prototype.showMorning = function()
{
	this._characters.mukoHouse.show();
	this._characters.melos.show("60%").be("stand");
	this._characters.muko.show("40%").be("angry");

	this._bgMng.scene("morning");
	this._planet.hide();
}
DOT3.RUN_MELOS.MukoHouse.prototype.mukoAgree = function()
{
	this._characters.mukoHouse.show();
	this._characters.melos.show("60%").be("stand");
	this._characters.muko.show("40%");
	this._planet.hide();
	
	this._bgMng.scene("morning");
	this._characters.muko.be("normal");

	//for next scene reset
	this._characters.murabito.hide();
	this._characters.sister.hide();
}

DOT3.RUN_MELOS.SCENES["mukoHouse"] = new DOT3.RUN_MELOS.MukoHouse();